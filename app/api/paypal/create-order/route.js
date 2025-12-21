import dbConnect from "@/lib/dbConnect";
import Webinar from "@/models/Webinar";

export async function POST(req) {

    await dbConnect();

    try {

        const { finalPrice, currency } = await req.json();

        /* ---------------- VALIDATION ---------------- */
        if (!finalPrice || !currency) {
            return Response.json(
                { error: "Missing price or currency" },
                { status: 400 }
            );
        }

        if (currency !== "USD") {
            return Response.json(
                { error: "PayPal only supports USD currency" },
                { status: 400 }
            );
        }

        /* ---------------- PAYPAL AUTH ---------------- */
        const auth = Buffer.from(
            `${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_CLIENT_SECRET}`
        ).toString("base64");

        /* ---------------- CREATE ORDER ---------------- */
        const res = await fetch(
            `${process.env.PAYPAL_API_BASE}/v2/checkout/orders`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Basic ${auth}`,
                },
                body: JSON.stringify({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            amount: {
                                currency_code: currency,
                                value: String(finalPrice), // ✅ MUST be string
                            },
                        },
                    ],
                }),
            }
        );

        const data = await res.json();

        console.log("PayPal Create Order Response:", data);

        if (!res.ok) {
            return Response.json(
                {
                    error: "PayPal order creation failed",
                    details: data,
                },
                { status: 500 }
            );
        }

        return Response.json({ orderID: data.id });

    } catch (error) {

        console.error("Create Order Error:", error);
        return Response.json(
            { error: "Internal server error" },
            { status: 500 }
        );

    }
}