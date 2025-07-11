export default function ConversionFunnel() {
  const funnelData = [
    {
      label: "Product Views",
      value: "8,492",
      percentage: "100%",
    },
    {
      label: "Add to Cart",
      value: "1,254",
      percentage: "14.8%",
    },
    {
      label: "Checkout Started",
      value: "528",
      percentage: "6.2%",
    },
    {
      label: "Purchased",
      value: "412",
      percentage: "4.8%",
    },
  ];

  return (
    <section className="bg-white rounded-xl shadow p-6 mb-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Product Conversion Funnel</h2>
        <div className="flex gap-3">
          <button className="text-sm text-gray-500 hover:text-gray-700">#Filter</button>
          <button className="text-sm text-gray-500 hover:text-gray-700">[ ]Expand</button>
        </div>
      </div>
      <div className="h-50 border-b-1 border-gray-300 flex items-center justify-center text-gray-400 text-sm">
        (Chart Placeholder)
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4 mt-4">
        {funnelData.map((step, idx) => (
          <div key={idx} className="flex items-center">
            <div className="text-center">
              <div className="text- text-gray-500">{step.label}</div>  
              <div className="text-lg font-bold">{step.value}</div>
              <div className="text-xs text-gray-400">{step.percentage}</div>
            </div>
            {idx < funnelData.length - 1 && (
              <div className="ml-30 text-gray-300 text-3xl">
                <p>-----→</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
