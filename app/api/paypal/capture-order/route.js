import dbConnect from "@/lib/dbConnect";
import WebinarOrder from "@/models/WebinarOrder";
import Webinar from "@/models/Webinar";
import Coupon from "@/models/Coupon";

export async function POST(req) {

    await dbConnect();

    try {
        
        const {
            orderID,
            user,
            pricing,
            country,
            couponCode,
        } = await req.json();

        /* ---------------- VALIDATION ---------------- */
        if (!orderID || !user || !pricing) {
            return Response.json(
                { error: "Missing required payment data" },
                { status: 400 }
            );
        }

        /* ---------------- PAYPAL AUTH ---------------- */
        const auth = Buffer.from(
            `${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_CLIENT_SECRET}`
        ).toString("base64");

        /* ---------------- CAPTURE PAYMENT ---------------- */
        const res = await fetch(
            `${process.env.PAYPAL_API_BASE}/v2/checkout/orders/${orderID}/capture`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Basic ${auth}`,
                },
            }
        );

        const payment = await res.json();

        if (!res.ok || payment.status !== "COMPLETED") {
            return Response.json(
                { error: "Payment not completed", details: payment },
                { status: 400 }
            );
        }

        /* ---------------- FETCH WEBINAR ---------------- */
        const webinar = await Webinar.findOne({ isActive: true });
        if (!webinar) {
            return Response.json(
                { error: "Webinar not found" },
                { status: 404 }
            );
        }

        /* ---------------- COUPON USAGE ---------------- */
        if (couponCode) {
            await Coupon.updateOne(
                { code: couponCode.toUpperCase() },
                { $inc: { usedCount: 1 } }
            );
        }

        const capture =
            payment.purchase_units?.[0]?.payments?.captures?.[0];

        /* ---------------- STORE ORDER (SNAPSHOT) ---------------- */
        await WebinarOrder.create({
            webinarId: webinar._id,

            // 👤 User
            fullName: user.fullName,
            email: user.email,
            phone: user.phone,
            city: user.city,
            occupation: user.occupation,
            income: user.income,

            // 🌍 Context
            country,

            // 💰 Pricing snapshot (CRITICAL)
            displayCurrency: pricing.displayCurrency,
            displayPrice: pricing.displayPrice,

            paypalCurrency: pricing.paypalCurrency,
            paypalAmount: pricing.paypalAmount,

            basePrice: pricing.basePrice,
            discountType: pricing.discountType,
            discountValue: pricing.discountValue,
            couponCode,

            // 💳 Payment
            paymentProvider: "PAYPAL",
            paypalOrderId: orderID,               // ✅ CORRECT
            paypalCaptureId: capture?.id,         // ✅ CAPTURE ID

            paymentStatus: "COMPLETED",
            paymentRawResponse: payment,
        });

        return Response.json({ success: true });

    } catch (error) {

        console.error("Capture Order Error:", error);
        return Response.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );

    }
}