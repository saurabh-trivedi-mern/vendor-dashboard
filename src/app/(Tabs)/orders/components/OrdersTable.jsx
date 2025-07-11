"use client";
import { useState } from "react";
import { FiEye, FiPrinter, FiMoreVertical } from "react-icons/fi";

const statusStyles = {
  Delivered: "bg-green-100 text-green-700",
  Shipped: "bg-blue-100 text-blue-700",
  Processing: "bg-yellow-100 text-yellow-700",
  Pending: "bg-purple-100 text-purple-700",
};

export default function OrdersTable({ orders, onSelectOrder, selectedOrderId }) {
  const [selectedId, setSelectedId] = useState(null);

  const toggleSelection = (id) => {
    if (selectedId === id) {
      setSelectedId(null);
      onSelectOrder(null);
    } else {
      setSelectedId(id);
      onSelectOrder(id);
    }
  };

  return (
    <div className="relative">
      <div className="bg-white rounded-md shadow overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="text-left text-sm text-gray-600 border-b-1 border-gray-200">
              <th className="px-4 py-3">
                <input type="checkbox" className="accent-[var(--color-theme)]" disabled />
              </th>
              <th className="px-4 py-3">Order ID</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Customer</th>
              <th className="px-4 py-3">Product</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700">
            {orders.map((order) => (
              <tr
                key={order.id}
                className={`border-b-1 border-gray-200 ${
                  selectedId === order.id ? "bg-green-50" : ""
                }`}
              >
                <td className="px-4 py-3">
                  <input
                    type="checkbox"
                    checked={selectedId === order.id}
                    onChange={() => toggleSelection(order.id)}
                    className="accent-[var(--color-theme)] cursor-pointer"
                  />
                </td>
                <td className="px-4 py-3 font-medium">{order.id}</td>
                <td className="px-4 py-3">{order.date}</td>
                <td className="px-4 py-3 flex items-center gap-2">
                  <img
                    src={order.userAvatar}
                    alt={order.customer}
                    className="w-7 h-7 rounded-full"
                  />
                  {order.customer}
                </td>
                <td className="px-4 py-3">{order.product.name}</td>
                <td className="px-4 py-3 font-semibold">
                  ${order.product.price.toFixed(2)}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`text-xs px-3 py-1 rounded-full font-medium ${statusStyles[order.status]}`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3 text-gray-500">
                    <FiEye className="cursor-pointer hover:text-black" />
                    <FiPrinter className="cursor-pointer hover:text-black" />
                    <FiMoreVertical className="cursor-pointer hover:text-black" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-between items-center p-4 text-sm text-gray-500">
          <span>Showing {orders.length} results</span>
          <div className="flex gap-1 items-center">
            <button className="px-2 py-1 rounded border border-gray-300">&lt;</button>
            <button className="px-3 py-1 rounded border border-gray-300">1</button>
            <button className="px-3 py-1 rounded border border-gray-300">2</button>
            <button className="px-3 py-1 rounded border border-gray-300">3</button>
            <button className="px-2 py-1 rounded border border-gray-300">&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
}
