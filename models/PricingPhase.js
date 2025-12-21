// models/PricingPhase.js
import mongoose from "mongoose";

const pricingPhaseSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            enum: ["EARLY_BIRD", "PHASE_1", "PHASE_2"],
            required: true,
        },

        discountPercentage: {
            type: Number,
            required: true, // 50, 30, etc
        },

        startAt: {
            type: Date,
            required: true,
        },

        endAt: {
            type: Date,
            required: true,
        },

        isActive: {
            type: Boolean,
            default: true,
        },
    },
    { timestamps: true }
);

export default mongoose.models.PricingPhase || mongoose.model("PricingPhase", pricingPhaseSchema);
