import React from 'react'

const RegisterPage = () => {
    return (
        <main className='min-h-screen max-h-max flex items-center justify-center'>

            <div className='w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md'>

                <h2 className='text-2xl font-bold text-center text-gray-800'>Webinar Registration</h2>

                <input
                    type="text"
                    placeholder="Full Name"
                    className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                />

                <input
                    type="email"
                    placeholder="Email Address"
                    className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                />

                <input
                    type="tel"
                    placeholder="Phone Number"
                    className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'

                />

                <input
                    type="text"
                    placeholder="City"
                    className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                />

                <select
                    name="occupation"
                    id="occupation"
                    className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                >
                    <option value="" disabled selected>Select Occupation</option>
                    <option value="student">Student</option>
                    <option value="employed">Employed</option>
                    <option value="self-employed">Self-Employed</option>
                    <option value="unemployed">Unemployed</option>
                </select>

                <select
                    name="income"
                    id="income"
                    className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                >
                    <option value="" disabled selected>Select Annual Income</option>
                    <option value="below-20k">Below $20,000</option>
                    <option value="20k-50k">$20,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="above-100k">Above $100,000</option>
                </select>

                <button className='w-full px-4 py-2 font-semibold text-white bg-primary rounded-md hover:bg-primary-dark'>
                    Book My Seat for $7
                </button>

                <div className='text-slate-600'>
                    <p className='text-center text-xs'>
                        Payments are securely processed via PayPal.
                    </p>
                    <p className='text-center text-xs'>
                        By registering, you agree to our Terms of Service and Privacy Policy.
                    </p>
                </div>

            </div>

        </main>
    )
}

export default RegisterPage