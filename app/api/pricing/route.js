import dbConnect from "@/lib/dbConnect";
import Webinar from "@/models/Webinar";
import PricingPhase from "@/models/PricingPhase";
import Coupon from "@/models/Coupon";

export async function POST(req) {

    await dbConnect();

    const { country, couponCode } = await req.json();
    const now = new Date();

    const webinar = await Webinar.findOne({ isActive: true });
    if (!webinar) {
        return Response.json({ error: "Webinar not found" }, { status: 404 });
    }

    /* --------------------------------------------------
       🇮🇳 INDIA PRICING (DISPLAY INR, PAY USD)
    -------------------------------------------------- */
    if (country === "IN") {
        const usdAmount = (webinar.indiaPriceINR / 83).toFixed(2); // approx FX

        return Response.json({
            displayCurrency: "INR",
            displayPrice: webinar.indiaPriceINR,

            paypalCurrency: "USD",
            paypalAmount: usdAmount,

            basePrice: webinar.indiaPriceINR,
            discountType: "INDIA_PRICING",
            discountValue: null,
        });
    }

    /* --------------------------------------------------
       🌍 GLOBAL PRICING (USD)
    -------------------------------------------------- */
    let basePrice = webinar.basePriceUSD;
    let finalPrice = basePrice;
    let discountType = null;
    let discountValue = null;

    // 🎯 Pricing phase
    const phase = await PricingPhase.findOne({
        isActive: true,
        startAt: { $lte: now },
        endAt: { $gte: now },
    });

    if (phase) {
        discountType = phase.name;
        discountValue = phase.discountPercentage;
        finalPrice = basePrice - (basePrice * discountValue) / 100;
    }

    // 🎟️ Coupon
    if (couponCode) {
        const coupon = await Coupon.findOne({
            code: couponCode.toUpperCase(),
            isActive: true,
            expiresAt: { $gte: now },
        });

        if (!coupon) {
            return Response.json({ error: "Invalid coupon" }, { status: 400 });
        }

        discountType = "COUPON";

        if (coupon.type === "PERCENT") {
            discountValue = coupon.value;
            finalPrice -= (finalPrice * coupon.value) / 100;
        } else {
            discountValue = coupon.value;
            finalPrice -= coupon.value;
        }
    }

    finalPrice = Math.max(finalPrice, 1).toFixed(2);

    return Response.json({
        displayCurrency: "USD",
        displayPrice: finalPrice,

        paypalCurrency: "USD",
        paypalAmount: finalPrice,

        basePrice,
        discountType,
        discountValue,
    });

}