export default function EscrowStatusTable({ orders }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm font-semibold text-gray-700">Escrow Status</h2>
        <div className="flex gap-2">
          <label className="text-gray-500">View : </label>
          <select className="text-sm border border-gray-300 bg-gray-100 rounded px-2 py-1 outline-0 focus:outline-none focus:ring-0">
             <option>All Orders</option>
          </select>
        </div>
      </div>

      <table className="w-full text-sm text-left">
        <thead className="text-xs text-gray-500 uppercase border-b border-[#E5E7EB]">
          <tr>
            <th className="p-3">Order ID</th>
            <th className="p-3">Customer</th>
            <th className="p-3">Amount</th>
            <th className="p-3">Status</th>
            <th className="p-3">Release Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-b border-[#E5E7EB]">
              <td className="p-3 text-md max-w-6">#{order.id}</td>
              <td className="p-3 flex items-center gap-2 text-md max-w-12">
                <img src={order.avatar} className="min-w-6 h-6 rounded-full" />
                {order.customer}
              </td>
              <td className="p-3 text-md font-medium">${order.amount}</td>
              <td className="p-3">
                <span className={`text-xs px-2 py-1 rounded-full ${
                  order.status === 'Released'
                    ? 'bg-green-100 text-green-700'
                    : order.status.includes('Pending')
                    ? 'bg-yellow-100 text-yellow-700'
                    : 'bg-blue-100 text-blue-700'
                }`}>
                  {order.status}
                </span>
              </td>
              <td className="p-3 text-gray-500">{order.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
