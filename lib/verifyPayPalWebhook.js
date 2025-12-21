export async function verifyPayPalWebhook(body, headers) {
    
    const auth = Buffer.from(
        `${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_CLIENT_SECRET}`
    ).toString("base64");

    const response = await fetch(
        `${process.env.PAYPAL_API_BASE}/v1/notifications/verify-webhook-signature`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Basic ${auth}`,
            },
            body: JSON.stringify({
                auth_algo: headers["paypal-auth-algo"],
                cert_url: headers["paypal-cert-url"],
                transmission_id: headers["paypal-transmission-id"],
                transmission_sig: headers["paypal-transmission-sig"],
                transmission_time: headers["paypal-transmission-time"],
                webhook_id: process.env.PAYPAL_WEBHOOK_ID,
                webhook_event: JSON.parse(body),
            }),
        }
    );

    const data = await response.json();
    return data.verification_status === "SUCCESS";

}