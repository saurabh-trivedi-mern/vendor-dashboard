import { FaDollarSign, FaShoppingCart, FaTag } from "react-icons/fa"

const items =[
  {
    title: 'Total Revenue',
    value: '$12,345',
    icon: <FaDollarSign size={20} color="green" />,
    color: 'bg-green-200',
    percecent : '↑10%',
    label: 'Compared to last month'
  },
  {
    title: 'Total Orders',
    value: '150',
    icon: <FaShoppingCart size={20} color="blue" />,
    color: 'bg-blue-200',
    percecent : '↑5%',
    label: 'Compared to last month'
  },
  {
    title: 'Avg. Order Value',
    value: '25',
    icon: <FaTag size={14} color="brown" />,
    color: 'bg-yellow-200',
    percecent : '↑2%',
    label: 'Compared to last month'
  }
]


export default function DashboardPageCards() {
  return (
    <div className="flex flex-row items-center justify-between gap-4 flex-wrap">
      {items.map((item, index) => (
        <div key={index} className="bg-white shadow-sm rounded-lg p-6 mb-4 flex items-center gap-4 flex-1 w-full max-h-[160px]">
          <div className="w-full">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-500">{item.title}</h3>
              <div className={`p-2 rounded-full ${item.color} text-white text-xl`}>
                {item.icon}
              </div>
            </div>
            <div className="mt-2 flex flex-col">
              <div className="relative mb-4">
                <p className="text-xl font-bold">{item.value}</p>
                <span className="absolute top-5 left-18 text-sm text-green-600">{item.percecent}</span>
              </div>
              <p className="text-sm text-gray-500">{item.label}</p>
            </div>
          </div>
        </div>
      ))}
      
    </div>
  )
}
