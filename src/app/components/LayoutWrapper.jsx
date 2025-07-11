"use client";

import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const noLayoutRoutes = ["/"]; 

  const isPlainPage = noLayoutRoutes.includes(pathname);

  if (isPlainPage) {
    return <>{children}</>;
  }

  return (
    <div className="flex flex-row min-h-screen bg-gray-50">
      <div>
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col pl-64">
        <Topbar />
        <div>{children}</div>
      </div>
    </div>
  );
}
