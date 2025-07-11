"use client"
import { useState } from "react";

export default function ProductViewsOverTime() {
  const [activeView, setActiveView] = useState("daily");

  return (
    <div className="bg-white rounded-xl shadow p-6 w-1/2 mb-0">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-md font-semibold">Product Views Over Time</h3>
        <div className="flex gap-2">
          <button
            onClick={() => setActiveView("daily")}
            className={`px-3 py-1 rounded cursor-pointer ${
              activeView === "daily" ? "text-white bg-[var(--color-theme)]" : "text-gray-500 bg-gray-100"
            }`}
          >
            Daily
          </button>
          <button
            onClick={() => setActiveView("weekly")}
            className={`px-3 py-1 rounded cursor-pointer ${
              activeView === "weekly" ? "text-white bg-[var(--color-theme)]" : "text-gray-500 bg-gray-100"
            }`}
          >
            Weekly
          </button>
          <button
            onClick={() => setActiveView("monthly")}
            className={`px-3 py-1 rounded cursor-pointer ${
              activeView === "monthly" ? "text-white bg-[var(--color-theme)]" : "text-gray-500 bg-gray-100"
            }`}
          >
            Monthly
          </button>
        </div>
      </div>
      <div className="h-40 flex items-center justify-center text-gray-400 text-sm">
        Showing: <strong className="ml-1 capitalize">{activeView}</strong> data
      </div>
    </div>
  );
}
