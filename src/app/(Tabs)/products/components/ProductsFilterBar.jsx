'use client'

import { FaDownload } from 'react-icons/fa'

export default function ProductsFilterBar() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 mb-2">

        <div className="flex gap-3">
            <button className="flex items-center gap-2 text-white px-4 py-2 rounded-md  transition text-sm shadow cursor-pointer" style={{backgroundColor: 'var(--color-theme)'}}>
              + Add New Product
            </button>
            <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-md  transition text-sm shadow cursor-pointer">
              <FaDownload className="h-4 w-4" />
              Import Products
            </button>
        </div>

        <div className="flex gap-3">
            <select className="border border-gray-300 bg-white px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-0">
              <option value="filter">Filter</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
            <select className="border border-gray-300 bg-white px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-0">
              <option value="all-categories">All Categories</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
            <select className="border border-gray-300 bg-white px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-0">
              <option value="newest">Sort By : Newest</option>
              <option value="oldest">Sort By : Oldest</option>
            </select>
        </div>

    </div>
  )
}
