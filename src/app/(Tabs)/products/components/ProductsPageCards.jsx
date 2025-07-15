import { MdCheckCircle, MdError, MdInventory2 } from "react-icons/md";
import { FaStar } from "react-icons/fa";

const items = [
  {
    title: 'Total Products',
    value: '45',
    icon: <MdInventory2 size={20} color="blue" />,
    color: 'bg-blue-200',
    percecent: '↑10%',
    label: '5 new products this month'
  },
  {
    title: 'Active Products',
    value: '42',
    icon: <MdCheckCircle size={20} color="green" />,
    color: 'bg-green-200',
    percecent: '↑5%',
    label: 'of total products'
  },
  {
    title: 'Out Of Stock',
    value: '6',
    icon: <MdError size={20} color="red" />,
    color: 'bg-red-200',
    percecent: '↑2%',
    label: '12.5% of total products'
  },
  {
    title: 'Featured Products',
    value: '25',
    icon: <FaStar size={20} color="brown" />,
    color: 'bg-yellow-200',
    percecent: '↑2%',
    label: '16.7% of total products'
  }
]

export default function ProductPageCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map((item, index) => (
        <div 
          key={index} 
          className="bg-white shadow-sm rounded-lg p-5 flex flex-col justify-between h-full"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base md:text-lg font-semibold text-gray-500">{item.title}</h3>
            <div className={`p-3 rounded-full ${item.color} text-white text-xl`}>
              {item.icon}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-baseline gap-2 mb-3">
              <p className="text-2xl md:text-4xl font-bold">{item.value}</p>
              <span className="text-sm text-green-600">{item.percecent}</span>
            </div>
            <p className="text-sm text-gray-500">{item.label}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
