"use client";
import { useState } from "react";
import OrdersTable from "./components/OrdersTable";
import OrderDetailsPanel from "./components/OrderDetailsPanel";
import OrdersPageFilterBar from "./components/OrderPageFilterBar";
import OrdersFilterBar from "./components/OrdersFilterBar";
import sampleOrders from "./data/orders.json";

export default function OrdersPage() {
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const [activeStatus, setActiveStatus] = useState("All Orders");

  const filteredOrders =
    activeStatus === "All Orders"
      ? sampleOrders
      : sampleOrders.filter(
          (order) => order.status.toLowerCase() === activeStatus.toLowerCase()
        );

  return (
    <div className="grid gap-4 p-4">
      <OrdersPageFilterBar />

      <OrdersFilterBar
        activeStatus={activeStatus}
        setActiveStatus={setActiveStatus}
        orders={sampleOrders}
      />

      <OrdersTable
        orders={filteredOrders} 
        onSelectOrder={setSelectedOrderId}
        selectedOrderId={selectedOrderId}
      />

      {selectedOrderId && (
        <OrderDetailsPanel
          selectedOrderId={selectedOrderId}
          onClose={() => setSelectedOrderId(null)}
        />
      )}
    </div>
  );
}
