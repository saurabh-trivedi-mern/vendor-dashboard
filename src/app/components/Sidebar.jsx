'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CiShop } from "react-icons/ci";
import { FaChartLine, FaCartShopping, FaMoneyBillWave } from "react-icons/fa6";
import { FaBox, FaChartPie } from "react-icons/fa";
import { BiSupport } from "react-icons/bi"
import { IoMdSettings } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import Image from 'next/image';

const menu = [
  { name: 'Dashboard', icon: <FaChartLine />, href: '/dashboard' },
  { name: 'Products', icon: <FaBox />, href: '/products' },
  { name: 'Orders', icon: <FaCartShopping />, href: '/orders' },
  { name: 'Payouts', icon: <FaMoneyBillWave />, href: '/payouts' },
  { name: 'Analytics', icon: <FaChartPie />, href: '/analytics' },
  { name: 'Support', icon: <BiSupport />, href: '/support' },
  { name: 'Settings', icon: <IoMdSettings />, href: '/settings' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="h-screen w-64 bg-white border-r-2 border-r-[#E5E7EB] shadow-lg flex flex-col justify-between fixed top-0 left-0 z-50">
      <div>
        <div className="flex items-center gap-2 p-4 text-xl font-semibold border-b border-[#E5E7EB]">
          <span className="text-[var(--color-theme)] text-3xl"><CiShop/></span> Vendor Panel
        </div>
        <nav className="mt-4 flex flex-col gap-1">
          {menu.map((item) => {
            const isActive = pathname.startsWith(item.href)
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 py-4 px-6 text-xl transition-all duration-200 
                  ${isActive ? 'bg-[var(--color-theme-light)] text-black border-l-[4px] border-[var(--color-theme)]' : 'text-gray-500'}
                  hover:bg-[var(--color-theme-light)] hover:text-black hover:border-l-[4px] hover:border-[var(--color-theme)]`}
              >
                <span className={`${isActive ? 'text-[var(--color-theme)]' : 'text-gray-500'}`}>{item.icon}</span>
                {item.name}
              </Link>
            )
          })}
        </nav>
      </div>

      <div className="p-4 border-t-1 border-gray-200 flex justify-between items-center">
        <div className="flex gap-5  items-center">
          <Image src="/avatar.png" alt="avatar" className="rounded-full object-cover" width={20} height={20} />
          <div className="text-sm">
            <div className="font-medium">TechGear Shop</div>
            <div className="text-gray-500 text-xs">Verified Vendor</div>
          </div>
        </div>
        <div className="cursor-pointer text-xl">
          <FiLogOut />
        </div>
      </div>
    </aside>
  )
}
