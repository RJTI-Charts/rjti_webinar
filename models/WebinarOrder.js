import mongoose from "mongoose";
import EmailHandlers from "../lib/emailTemplates/emailHandlers.js";

const webinarOrderSchema = new mongoose.Schema(
    {
        // 🔗 Relations
        webinarId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Webinar",
            required: true,
        },

        // 👤 User details
        fullName: { type: String, required: true },
        email: { type: String, required: true, index: true },
        phone: String,
        city: String,
        occupation: String,
        income: String,

        // 🌍 Context
        country: { type: String, required: true },

        // 💰 Display pricing
        displayPrice: { type: Number, required: true },
        displayCurrency: { type: String, required: true },

        // 💳 PayPal pricing
        paypalAmount: { type: String, required: true },
        paypalCurrency: { type: String, required: true },

        // 📉 Base & discounts
        basePrice: { type: Number },
        discountType: {
            type: String,
            enum: ["EARLY_BIRD", "PHASE", "COUPON", "INDIA_PRICING", null],
            default: null,
        },
        discountValue: { type: Number },
        couponCode: { type: String, default: null },

        // 💳 Payment
        paymentProvider: {
            type: String,
            enum: ["PAYPAL"],
            default: "PAYPAL",
        },

        paypalOrderId: {
            type: String,
            required: true,
            unique: true,
            index: true,
        },

        paypalCaptureId: String,

        paymentStatus: {
            type: String,
            enum: ["CREATED", "COMPLETED", "FAILED", "REFUNDED"],
            default: "CREATED",
            index: true,
        },

        paymentRawResponse: {
            type: Object,
            required: true,
        },

        // 🎓 Certificate
        certificateIssued: { type: Boolean, default: false },
        certificateId: String,
        certificateIssuedAt: Date,
    },
    { timestamps: true }
);

webinarOrderSchema.post("save", async function (doc) {

    //send email once paymentstatus is completed
    if (doc.paymentStatus === "COMPLETED") {

        const newEmail = new EmailHandlers({
            to: doc.email,
            subject: "Webinar Registration Successful",
            templateData: {
                fullName: doc.fullName || "there",
                infoMsg: `You have successfully registered for the webinar. We look forward to your participation! you will receive further details via email soon.`,
            }
        })

        await newEmail.sendEmail();

    }


})

export default mongoose.models.WebinarOrder ||
    mongoose.model("WebinarOrder", webinarOrderSchema);