import { useState } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

const SignUp = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [showOTPForm, setShowOTPForm] = useState(false);
    const [otp, setOtp] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post(
                "https://backend-health-connect.vercel.app/auth/signup",
                { name, username, email, password },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            alert("Signup successful! Please check your email for the OTP.");
            setShowOTPForm(true);
        } catch (error) {
            const errorMessage =
                error.response?.data?.message || error.response?.data || "Signup failed.";
            alert("Signup failed: " + errorMessage);
            setName("");
            setUsername("");
            setEmail("");
            setPassword("");
        } finally {
            setLoading(false);
        }
    };

    const handleVerifyEmail = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await axios.post(
                "https://backend-health-connect.vercel.app/auth/verify-email",
                { email, verification_code: otp },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            alert("Email verified! You can now log in.");
            navigate("/signin");
        } catch (error) {
            alert("Invalid OTP. Please try again.");
            setOtp("");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen">
            {/* Left animation */}
            <div className="hidden md:block md:w-1/2 h-screen">
                <DotLottieReact
                    src="https://lottie.host/8dbad48b-e2c1-4c52-8d48-4549fe8f72da/oyPr0MO3N8.lottie"
                    loop
                    autoplay
                />
            </div>

            {/* Right form */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-12 bg-white mt-8">
                <div className="w-full max-w-lg text-center bg-white p-8 rounded-lg shadow-xl">
                    <div className="mb-8">
                        <h1 className="text-4xl font-bold text-gray-800 mb-2">
                            Welcome to HealthConnect
                        </h1>
                        <p className="text-gray-600">
                            {showOTPForm
                                ? "Please enter your OTP to verify your account."
                                : "Create your account and start your healthcare journey."}
                        </p>
                    </div>

                    {!showOTPForm ? (
                        <form className="space-y-4 shadow-lg p-10" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Full Name"
                                autoComplete="name"
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-red-500 placeholder-gray-500"
                            />
                            <input
                                type="text"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Username"
                                autoComplete="username"
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-red-500 placeholder-gray-500"
                            />
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                                autoComplete="email"
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-red-500 placeholder-gray-500"
                            />
                            <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                autoComplete="new-password"
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-red-500 placeholder-gray-500"
                            />
                            <button
                                type="submit"
                                disabled={!name || !username || !email || !password || loading}
                                className="w-full py-3 px-6 py-2 rounded-xl font-semibold text-white shadow-md transition-all duration-300 bg-[linear-gradient(90deg,_rgba(36,0,9,1)_0%,_rgba(121,9,13,1)_77%,_rgba(214,69,69,1)_94%)] hover:shadow-[0_0_20px_4px_rgba(214,69,69,0.5)] disabled:opacity-50"
                            >
                                {loading ? "Signing Up..." : "Sign Up"}
                            </button>
                        </form>
                    ) : (
                        <form className="space-y-4 shadow-lg p-10" onSubmit={handleVerifyEmail}>
                            <input
                                type="text"
                                name="otp"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                placeholder="Enter OTP"
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-red-500 placeholder-gray-500"
                            />
                            <button
                                type="submit"
                                disabled={!otp || loading}
                                className="w-full py-3 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition duration-300 disabled:opacity-50"
                            >
                                {loading ? "Verifying..." : "Verify OTP"}
                            </button>
                        </form>
                    )}

                    <p className="mt-6 text-gray-600">
                        Already have an account?{" "}
                        <Link to="/signin" className="text-red-500 hover:underline font-medium">
                            Log In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
