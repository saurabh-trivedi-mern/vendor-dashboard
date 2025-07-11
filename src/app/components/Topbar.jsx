"use client";
import { FiSearch } from "react-icons/fi";
import { FaBell } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function Topbar() {
  const pathname = usePathname().split("/");
  let heading;

  if (pathname.includes("dashboard")) {
    heading = "Vendor Dashboard";
  } else if (pathname.includes("orders")) {
    heading = "Orders";
  } else if (pathname.includes("products")) {
    heading = "Product Management";
  } else if (pathname.includes("payouts")) {
    heading = "Payouts";
  } else if (pathname.includes("analytics")) {
    heading = "Product Analytics";
  } else if (pathname.includes("support")) {
    heading = "Support & Help Center";
  } else if (pathname.includes("settings")) {
    heading = "Store Settings";
  }

  const notificationCount = 3; 

  return (
    <div className="flex justify-between items-center px-6 py-4 shadow-sm bg-white sticky top-0 z-10">
      <h1 className="text-xl font-semibold">{heading}</h1>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 bg-gray-200 px-4 py-2 rounded-3xl text-md cursor-pointer">
          <FiSearch className="text-gray-600" />
          <input
            type="text"
            placeholder="Search..."
            className="outline-none cursor-pointer bg-transparent"
          />
        </div>

        {/* Notification Bell with Badge */}
        <div className="relative">
          <FaBell className="text-gray-600 text-2xl cursor-pointer" />
          {notificationCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full">
              {notificationCount}
            </span>
          )}
        </div>

        {/* Avatar */}
        <img
          src="/avatar.png"
          alt="avatar"
          className="w-8 h-8 rounded-full border-2 cursor-pointer"
          style={{ borderColor: "var(--color-theme)" }}
        />
      </div>
    </div>
  );
}
