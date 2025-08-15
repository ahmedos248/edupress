import { useState } from "react";

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className="max-w-sm mx-auto my-10 bg-white p-6 rounded-2xl shadow-md border">
            <h2 className="text-2xl font-bold mb-6">Register</h2>
            <form className="space-y-4">
                <input
                    type="email"
                    placeholder="Email*"
                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input
                    type="text"
                    placeholder="Username*"
                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <div className="relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password*"
                        className="w-full border rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <span
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer text-lg"
                    >
                        <i className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
                    </span>
                </div>
                <div className="relative">
                    <input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm Password*"
                        className="w-full border rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <span
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer text-lg"
                    >
                        <i className={`fa-solid ${showConfirmPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
                    </span>
                </div>
                <button
                    type="submit"
                    className="w-full bg-orange-500 text-white py-2 rounded-full hover:bg-orange-600 transition"
                >
                    Register
                </button>
            </form>
        </div>
    );
}
