
import { FaDownload } from 'react-icons/fa'

export default function OrdersPageFilterBar() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
      <div className="flex items-center gap-3 flex-wrap">

        <select className="border border-gray-300 bg-white px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-0 cursor-pointer">
          <option>May 1, 2023 – May 31, 2023</option>
          <option>June 1, 2023 – June, 2023</option>
        </select>

        <select className="border border-gray-300 bg-white px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-0 cursor-pointer">
          <option value="all-products">All Products</option>
          <option value="smartphones">Smartphones</option>
        </select>
      </div>

      <button className="flex items-center gap-2 text-white px-4 py-2 rounded-md  transition text-sm shadow cursor-pointer" style={{backgroundColor: 'var(--color-theme)'}}>
        <FaDownload className="h-4 w-4" />
        Export Report
      </button>

    </div>
  )
}
