"use client";
import { useState } from "react";
import { Mail, Phone } from "lucide-react";

export default function LoginCard() {
  const [activeTab, setActiveTab] = useState("login");
  const [method, setMethod] = useState("email");

  return (
    <div className="bg-white rounded-xl shadow-md w-full max-w-sm">
      {/* Tab Switch: Login / Register */}
      <div className="flex">
        <button
          className={`flex-1 py-3 text-sm font-medium ${
            activeTab === "login"
              ? "text-green-600 border-b-2 border-green-500"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("login")}
        >
          Login
        </button>
        <button
          className={`flex-1 py-3 text-sm font-medium ${
            activeTab === "register"
              ? "text-green-600 border-b-2 border-green-500"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("register")}
        >
          Register
        </button>
      </div>

      <div className="px-6 pb-6 pt-4">
        {/* Header */}
        <h2 className="text-xl font-bold text-center">Welcome Back</h2>
        <p className="text-sm text-gray-500 text-center mt-1">
          Sign in to your vendor account
        </p>

        {/* Method Toggle (Email / Phone) */}
        <div className="flex bg-gray-100 rounded-md mt-6 overflow-hidden text-sm font-medium">
          <button
            className={`w-1/2 py-2 flex items-center justify-center gap-1 ${
              method === "email"
                ? "bg-white shadow text-black"
                : "text-gray-500"
            }`}
            onClick={() => setMethod("email")}
          >
            <Mail size={16} />
            Email
          </button>
          <button
            className={`w-1/2 py-2 flex items-center justify-center gap-1 ${
              method === "phone"
                ? "bg-white shadow text-black"
                : "text-gray-500"
            }`}
            onClick={() => setMethod("phone")}
          >
            <Phone size={16} />
            Phone
          </button>
        </div>

        {/* Form */}
        <form className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              {method === "email" ? "Email Address" : "Phone Number"}
            </label>
            <input
              type={method === "email" ? "email" : "tel"}
              placeholder={
                method === "email" ? "your@email.com" : "+91 9876543210"
              }
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="text-right">
            <a href="#" className="text-sm text-green-600 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md font-semibold"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          Don’t have an account?{" "}
          <a href="#" className="text-green-600 font-semibold hover:underline">
            Register now
          </a>
        </p>
      </div>
    </div>
  );
}
