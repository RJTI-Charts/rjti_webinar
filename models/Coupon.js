// models/Coupon.js
import mongoose from "mongoose";

const couponSchema = new mongoose.Schema(
    {
        code: {
            type: String,
            required: true,
            unique: true,
            uppercase: true,
            trim: true,
        },

        type: {
            type: String,
            enum: ["PERCENT", "FLAT"],
            required: true,
        },

        value: {
            type: Number,
            required: true,
        },

        maxUses: {
            type: Number,
            default: null,
        },

        usedCount: {
            type: Number,
            default: 0,
        },

        expiresAt: Date,

        isActive: {
            type: Boolean,
            default: true,
        },
    },
    { timestamps: true }
);

export default mongoose.models.Coupon || mongoose.model("Coupon", couponSchema);
