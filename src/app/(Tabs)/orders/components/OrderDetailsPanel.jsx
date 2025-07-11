"use client";
import { useEffect, useState } from "react";
import detailedOrders from "../data/orders.json";
import { FiX } from "react-icons/fi";
import Image from "next/image";
import { FaCheck, FaShuttleVan } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";

export default function OrderDetailsPanel({ selectedOrderId, onClose }) {
  const [order, setOrder] = useState(null);

  const statusStyles = {
    Delivered: "bg-green-100 text-green-700",
    Shipped: "bg-blue-100 text-blue-700",
    Processing: "bg-yellow-100 text-yellow-700",
    Pending: "bg-purple-100 text-purple-700",
  };

  useEffect(() => {
    const foundOrder = detailedOrders.find((o) => o.id === selectedOrderId);
    setOrder(foundOrder);
  }, [selectedOrderId]);

  if (!order) return null;

  return (
    <div className="fixed top-0 right-0 h-full w-[400px] z-50 bg-white shadow-lg overflow-y-auto transition-all duration-300 border-l border-gray-200 hide-scrollbar">

      <div className="flex justify-between p-4">
        <h1 className="text-black text-md font-medium">Order Details</h1>
        <button onClick={onClose} className="text-gray-500 hover:text-black text-xl">
          <FiX />
        </button>
      </div>  

      <div className="flex justify-between items-start p-4 border-b border-gray-200">
        <div>
          <p className="text-sm text-gray-500">Order ID</p> 
          <p className="text-xl font-semibold">{order.id}</p>
        </div>
        <div>
          <p className={`px-3 py-1 text-sm rounded-2xl ${statusStyles[order.status]}`}>{order.status}</p>
        </div>
      </div>

      <div className="space-y-6 text-sm">
        
        {/* Customer Info */}
        <div className="px-4 pt-4 ">
          <h3 className="text-black text-md font-medium mb-4">Customer Information</h3>
          <div className="flex gap-4">
            <Image src={order.userAvatar} alt="User Avatar" className="rounded-[50%]" width={55} height={50} />
            <div>
                <p className="text-black text-md font-medium">{order.customer}</p>
                <p className="text-gray-600">{order.email}</p>
                <p className="text-gray-600">{order.phone}</p>
            </div>
          </div>
        </div>

        {/* Shipping & Billing */}
        <div className="flex gap-5 px-4 pb-8 items-center border-b border-gray-200">
          <div className="w-40">
            <h3 className="font-medium pb-2 text-black text-md">Shipping Address</h3>
            <p className="text-gray-500">{order.shipping}</p>
          </div>
          <div className="w-40">
            <h3 className="font-medium pb-2 text-black text-md">Billing Address</h3>
            <p className="text-gray-500">{order.billing}</p>
          </div>
        </div>

        {/* Product Info */}
        <div className="px-4 pb-6 border-b-1 border-gray-200">
          <h3 className="text-black text-md font-medium mb-4">Order Items</h3>
          <div className="flex gap-4 items-center">
            <div className="w-18 h-20 bg-gray-100 rounded-md flex items-center justify-center text-2xl text-gray-500">
                <Image src={order.product.image} alt="User Avatar" className="rounded-[50%]" width={55} height={50} />
            </div>
            <div className="w-[60%]">
                <div className="pb-2">
                    <p className="text-black text-lg font-medium">{order.product.name}</p>
                    <p className="text-gray-600">SKU: {order.product.sku}</p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-gray-600">{order.product.qty} x ${order.product.price}</p>
                    <p className="text-black text-lg">${order.product.price}</p>
                </div>
            </div>
          </div>
        </div>

        {/* Payment Summary */}
        <div className="px-5 py-2 pb-4 border-b-1 border-gray-200">
          <h3 className="font-medium text-md text-black mb-3">Payment Information</h3>
          <div>
            <div className="flex justify-between pb-1">
                <p className="text-gray-600">Subtotal</p>
                <p>${order.subtotal}</p>
            </div>
            <div className="flex justify-between pb-1">
                <p className="text-gray-600">Shipping</p>
                <p>${order.shippingCost}</p>
            </div>
            <div className="flex justify-between pb-3 border-b-1 border-gray-200">
                <p className="text-gray-600">Tax</p>
                <p>${order.tax}</p>
            </div>
            <div className="flex justify-between pt-2 text-black text-lg font-medium">
                <p>Total</p>
                <p>${order.total}</p>
            </div>
          </div>
          <p className="mt-2 text-sm text-gray-500">Paid using card ending in {order.card}</p>
        </div>

        {/* Order Timeline */}
        <div className="px-5 border-b-1 border-gray-200 pb-4">
          <h3 className="font-medium text-md text-black mb-3">Order Timeline</h3>
          <div className="space-y-2">
            {order.timeline.map((step, i) => (
              <div key={i}>
                <div className="flex gap-4 pb-2">
                    <div className={`p-3 text-lg rounded-[50%] ${
                        step.status === "done"
                            ? "bg-green-100 text-green-700"
                            : step.status === "current"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-gray-100 text-gray-500"
                    }`}>{step.status === "done" ? <FaCheck /> : step.status === "current" ? <MdOutlineAccessTime /> : <FaShuttleVan />}</div>
                    <div>
                        <p className="font-medium">{step.label}</p>
                        {step.time && <p className="text-xs text-gray-500">{step.time}</p>}
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="px-5 pb-5 flex flex-col gap-5">
            <button className={`bg-[var(--color-theme)] px-5 py-3 text-white text-lg rounded-lg cursor-pointer`}>Generate Shipping Label</button>
            <button className="px-5 py-3 text-black text-lg border-2 border-gray-300 rounded-lg cursor-pointer">Update Order Status</button>
        </div>
      </div>
    </div>
  );
}
