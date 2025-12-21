// models/Webinar.js
import mongoose from "mongoose";

const webinarSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },

        description: String,

        basePriceUSD: {
            type: Number,
            required: true,
            default: 10,
        },

        indiaPriceINR: {
            type: Number,
            required: true,
            default: 250,
        },

        startAt: Date,
        endAt: Date,

        certificateEnabled: {
            type: Boolean,
            default: true,
        },

        isActive: {
            type: Boolean,
            default: true,
        },
    },
    { timestamps: true }
);

export default mongoose.models.Webinar || mongoose.model("Webinar", webinarSchema);