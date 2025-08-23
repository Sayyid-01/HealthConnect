import { useEffect, useState } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const SignIn = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post(
                "https://backend-health-connect.vercel.app/auth/login",
                new URLSearchParams({ username, password }),
                {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                }
            );

            const result = response.data;
            console.log("Login response:", result);
            console.log("Access Token:", result.access_token);

            localStorage.setItem("token", result.access_token);
            localStorage.setItem("token_type", result.token_type);
            localStorage.setItem("username", result.username);

            navigate("/");
            window.location.reload();
        } catch (error) {
            const errorMessage = error.response?.data?.message || "An error occurred. Please try again.";
            alert("Login failed: " + errorMessage);
            setUsername("");
            setPassword("");
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
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">Welcome to HealthConnect</h1>
                    <p className="text-gray-600 mb-6">Sign in to access your account and health records</p>

                    <form className="space-y-4 shadow-lg p-10" onSubmit={handleSubmit}>
                        {/* Username */}
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            autoComplete="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-red-500 placeholder-gray-500"
                        />

                        {/* Password with eye toggle */}
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Password"
                                autoComplete="current-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-red-500 placeholder-gray-500"
                            />
                            <FontAwesomeIcon
                                icon={showPassword ? faEyeSlash : faEye}
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3 disabled:opacity-50 px-6 rounded-xl font-semibold text-white shadow-md transition-all duration-300 bg-[linear-gradient(90deg,_rgba(36,0,9,1)_0%,_rgba(121,9,13,1)_77%,_rgba(214,69,69,1)_94%)] hover:shadow-[0_0_20px_4px_rgba(214,69,69,0.5)]"
                        >
                            {loading ? "Signing In..." : "Sign In"}
                        </button>
                    </form>

                    <p className="mt-6 text-gray-600">
                        Don't have an account?{" "}
                        <Link to="/signup" className="text-red-500 hover:underline font-medium">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
