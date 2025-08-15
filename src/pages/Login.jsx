import { useState } from "react"

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="max-w-sm mx-auto my-10 bg-white p-6 rounded-2xl shadow-md border">
            <h2 className="text-2xl font-bold mb-6">Login</h2>

            <form className="space-y-4">
                <input
                    type="text"
                    placeholder="Email or username*"
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
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer">
                        <i className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
                    </span>
                </div>
                <label className="flex items-center space-x-2 text-sm">
                    <input type="checkbox" className="h-4 w-4" />
                    <span>Remember me</span>
                </label>
                <button
                    type="submit"
                    className="w-full bg-orange-500 text-white py-2 rounded-full hover:bg-orange-600 transition"
                >
                    Login
                </button>
                <p className="text-sm text-gray-500 text-center mt-2 cursor-pointer hover:underline">
                    Lost your password?
                </p>
            </form>
        </div>
    )
}

export default Login
