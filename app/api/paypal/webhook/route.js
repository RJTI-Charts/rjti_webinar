import dbConnect from "@/lib/dbConnect";
import WebinarOrder from "@/models/WebinarOrder";
import { verifyPayPalWebhook } from "@/lib/verifyPayPalWebhook";

export async function POST(req) {

    await dbConnect();

    try {
        
        const body = await req.text(); // RAW BODY REQUIRED
        const headers = Object.fromEntries(req.headers);

        /* ---------------- VERIFY SIGNATURE ---------------- */
        const isValid = await verifyPayPalWebhook(body, headers);
        
        if (!isValid) {
            return new Response("Invalid signature", { status: 400 });
        }

        const event = JSON.parse(body);
        const eventType = event.event_type;

        const capture = event.resource;
        const orderId =
            capture?.supplementary_data?.related_ids?.order_id;

        if (!orderId) {
            return new Response("Missing order ID", { status: 400 });
        }

        /* ---------------- EVENT HANDLING ---------------- */
        switch (eventType) {
            case "PAYMENT.CAPTURE.COMPLETED": {
                await WebinarOrder.updateOne(
                    {
                        paypalOrderId: orderId,
                        paymentStatus: { $ne: "COMPLETED" }, // ✅ idempotent
                    },
                    {
                        $set: {
                            paymentStatus: "COMPLETED",
                        },
                        $push: {
                            webhookEvents: {
                                eventId: event.id,
                                eventType,
                                payload: event,
                                receivedAt: new Date(),
                            },
                        },
                    }
                );
                break;
            }

            case "PAYMENT.CAPTURE.DENIED":
            case "PAYMENT.CAPTURE.FAILED": {
                await WebinarOrder.updateOne(
                    {
                        paypalOrderId: orderId,
                        paymentStatus: { $ne: "COMPLETED" },
                    },
                    {
                        $set: {
                            paymentStatus: "FAILED",
                        },
                        $push: {
                            webhookEvents: {
                                eventId: event.id,
                                eventType,
                                payload: event,
                                receivedAt: new Date(),
                            },
                        },
                    }
                );
                break;
            }

            case "PAYMENT.CAPTURE.REFUNDED": {
                await WebinarOrder.updateOne(
                    { paypalOrderId: orderId },
                    {
                        $set: {
                            paymentStatus: "REFUNDED",
                        },
                        $push: {
                            webhookEvents: {
                                eventId: event.id,
                                eventType,
                                payload: event,
                                receivedAt: new Date(),
                            },
                        },
                    }
                );
                break;
            }

            default:
                // Ignore other events safely
                break;
        }

        return new Response("OK", { status: 200 });

    } catch (err) {

        console.error("Webhook error:", err);
        return new Response("Webhook handler error", { status: 500 });

    }
}