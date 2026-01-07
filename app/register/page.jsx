"use client";
import React, { useEffect, useState } from "react";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

const RegisterPage = () => {

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        city: "",
        occupation: "",
        income: "",
    });

    const [pricing, setPricing] = useState(null);
    const [country, setCountry] = useState("US");
    const [couponCode, setCouponCode] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    /* ---------------- GEO DETECTION ---------------- */
    useEffect(() => {
        fetch("https://ipapi.co/json/")
            .then((res) => res.json())
            .then((data) => {
                if (data?.country_code === "IN") {
                    setCountry("IN");
                }
            })
            .catch(() => { });
    }, []);

    /* ---------------- FORM HANDLING ---------------- */
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    /* ---------------- PRICING ---------------- */
    const fetchPricing = async () => {
        setError("");

        const res = await fetch("/api/pricing", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ country, couponCode }),
        });

        const data = await res.json();

        if (!res.ok) {
            setError(data.error || "Failed to fetch pricing");
            return;
        }

        setPricing(data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        await fetchPricing();
        setIsLoading(false);
    };

    /* ---------------- PAYPAL ---------------- */
    const createOrder = async () => {
        try {
            const res = await fetch("/api/paypal/create-order", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    finalPrice: pricing.paypalAmount,
                    currency: pricing.paypalCurrency,
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data?.error || "Failed to create PayPal order");
            }

            return data.orderID;
        } catch (err) {
            setError(err.message);
            throw err;
        }
    };

    const onApprove = async (data) => {
        const res = await fetch("/api/paypal/capture-order", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                orderID: data.orderID,
                user: formData,
                pricing,
                country,
                couponCode,
            }),
        });

        if (res.ok) {

            setSuccess(true);

            window.gtag("event", "conversion", {
                send_to: "AW-17855649640/rAFeCJmcm94bEOiunsJC",
                transaction_id: data.orderID,
            });

        } else {
            setError("Payment succeeded but order processing failed.");
        }
    };

    /* ---------------- SUCCESS SCREEN ---------------- */
    if (success) {
        return (
            <main className="min-h-screen flex items-center justify-center">
                <div className="bg-white p-8 rounded shadow text-center space-y-3">
                    <h2 className="text-2xl font-bold text-green-600">
                        Registration Successful 🎉
                    </h2>
                    <p className="text-gray-600">
                        Payment confirmed. Webinar and certificate details will be emailed to you.
                    </p>
                </div>
            </main>
        );
    }

    /* ---------------- UI ---------------- */
    return (
        <main className="min-h-screen flex items-center justify-center">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md p-8 space-y-5 bg-white rounded-lg shadow-md"
            >
                <h2 className="text-2xl font-bold text-center text-gray-800">
                    Webinar Registration
                </h2>

                {/* USER FIELDS */}
                {["fullName", "email", "phone", "city"].map((field) => (
                    <input
                        key={field}
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                        disabled={pricing !== null}
                        placeholder={field.replace(/([A-Z])/g, " $1")}
                        className="w-full px-4 py-2 border rounded-md"
                        required
                    />
                ))}

                <select
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleChange}
                    disabled={pricing !== null}
                    className="w-full px-4 py-2 border rounded-md"
                    required
                >
                    <option value="">Select Occupation</option>
                    <option value="student">Student</option>
                    <option value="employed">Employed</option>
                    <option value="self-employed">Self-Employed</option>
                    <option value="unemployed">Unemployed</option>
                </select>

                <select
                    name="income"
                    value={formData.income}
                    onChange={handleChange}
                    disabled={pricing !== null}
                    className="w-full px-4 py-2 border rounded-md"
                    required
                >
                    <option value="">Select Annual Income</option>
                    <option value="below-20k">Below $20,000</option>
                    <option value="20k-50k">$20,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="above-100k">Above $100,000</option>
                </select>

                {/* COUPON */}
                <input
                    type="text"
                    placeholder="Coupon code (optional)"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                    disabled={pricing !== null}
                    className="w-full px-4 py-2 border rounded-md"
                />

                {/* ERROR */}
                {error && <p className="text-sm text-red-500 text-center">{error}</p>}

                {/* PRICE BUTTON */}
                {!pricing && (
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full px-4 py-2 text-white bg-primary rounded-md"
                    >
                        {isLoading ? "Checking price..." : "Check Price & Continue"}
                    </button>
                )}

                {/* PRICE DISPLAY */}
                {pricing && (
                    <div className="text-center space-y-2">
                        <p className="font-semibold">
                            Final Price: {pricing.displayCurrency} {pricing.displayPrice}
                        </p>
                        {pricing.discountType && (
                            <p className="text-xs text-green-600">
                                Discount applied ({pricing.discountType})
                            </p>
                        )}
                    </div>
                )}

                {/* PAYPAL */}
                {pricing?.paypalCurrency && pricing?.paypalAmount && (
                    <PayPalScriptProvider
                        options={{
                            clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
                            currency: pricing.paypalCurrency, // ✅ FIXED
                        }}
                    >
                        <PayPalButtons
                            createOrder={createOrder}
                            onApprove={onApprove}
                            style={{ layout: "vertical" }}
                        />
                    </PayPalScriptProvider>
                )}

                <p className="text-xs text-center text-gray-500">
                    Payments are securely processed via PayPal.
                </p>
            </form>
        </main>
    );
};

export default RegisterPage;