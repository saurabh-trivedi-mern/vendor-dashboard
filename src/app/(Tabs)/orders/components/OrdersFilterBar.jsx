const statuses = ["All Orders", "Pending", "Processing", "Shipped", "Delivered"];

export default function OrdersFilterBar({ activeStatus, setActiveStatus, orders }) {
  const countByStatus = (status) => {
    if (status === "All Orders") return orders.length;
    return orders.filter((o) => o.status.toLowerCase() === status.toLowerCase()).length;
  };

  return (
    <div className="flex items-center gap-5 border-b-2 border-gray-200 overflow-x-auto">
      {statuses.map((status) => (
        <button
          key={status}
          onClick={() => setActiveStatus(status)}
          className={`flex items-center cursor-pointer gap-2 p-2 text-sm whitespace-nowrap border-b-3 transition-all duration-200 ${
            activeStatus === status
              ? "text-[var(--color-theme)] border-[var(--color-theme)] font-semibold"
              : "text-gray-500 border-transparent hover:text-[var(--color-theme)]"
          }`}
        >
          {status}
          <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-0.5 rounded-full">
            {countByStatus(status)}
          </span>
        </button>
      ))}
    </div>
  );
}
