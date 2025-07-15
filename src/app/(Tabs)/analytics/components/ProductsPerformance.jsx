import products from "../data/productsPerformance.json";

export default function ProductsPerformance() {
  return (
    <div className="bg-white rounded-xl shadow p-6 overflow-x-auto">
      <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
        <h2 className="text-md font-semibold text-gray-700">Product Performance</h2>
        <button className="text-sm cursor-pointer text-[var(--color-theme)]">
          Export Data
        </button>
      </div>

      <table className="min-w-[700px] w-full text-sm text-left">
        <thead className="text-xs text-gray-500 border-b border-gray-200">
          <tr>
            <th className="py-3">Product</th>
            <th>Views</th>
            <th>Conversion Rate</th>
            <th>Revenue</th>
            <th>Avg. Rating</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, i) => (
            <tr key={i} className="border-b border-gray-200">
              <td className="py-4 flex items-center gap-2 min-w-[150px]">
                <span className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <img src={product.icon} alt="" className="w-4 h-4" />
                </span>
                <span className="text-gray-700 font-medium truncate">{product.name}</span>
              </td>
              <td className="py-4 pr-5 font-medium whitespace-nowrap">
                {product.views.toLocaleString()}
              </td>
              <td className="py-4 text-green-600 whitespace-nowrap">
                {product.conversionRate}%{" "}
                <span className="text-xs text-green-500">↑ {product.delta}%</span>
              </td>
              <td className="py-4 font-semibold whitespace-nowrap">
                ${product.revenue.toLocaleString()}
              </td>
              <td className="py-4 flex items-center gap-1 whitespace-nowrap">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <span key={idx}>
                    {idx < Math.floor(product.rating) ? (
                      <span className="text-yellow-400">★</span>
                    ) : (
                      <span className="text-gray-300">★</span>
                    )}
                  </span>
                ))}
                <span className="ml-1 text-gray-600">{product.rating.toFixed(1)}</span>
              </td>
              <td className="py-4 whitespace-nowrap">
                <button className="text-sm text-[var(--color-theme)] cursor-pointer">
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
