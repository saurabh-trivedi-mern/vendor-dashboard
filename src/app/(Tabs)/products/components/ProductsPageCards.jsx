import { MdCheckCircle, MdError, MdInventory2 } from "react-icons/md";
import { FaStar } from "react-icons/fa";

const items =[
  {
    title: 'Total Products',
    value: '45',
    icon: <MdInventory2 size={20} color="blue" />,
    color: 'bg-blue-200',
    percecent : '↑10%',
    label: '5 new products this month'
  },
  {
    title: 'Active products',
    value: '42',
    icon: <MdCheckCircle size={20} color="green" />,
    color: 'bg-green-200',
    percecent : '↑5%',
    label: 'of total products'
  },
  {
    title: 'Out Of Stock',
    value: '6',
    icon: <MdError size={20} color="red" />,
    color: 'bg-red-200',
    percecent : '↑2%',
    label: '12.5% of total products'
  },
  {
    title: 'Featured Products',
    value: '25',
    icon: <FaStar size={20} color="brown" />,
    color: 'bg-yellow-200',
    percecent : '↑2%',
    label: '16.7% of total products'
  }
]


export default function ProductPageCards() {
  return (
    <div className="flex flex-row items-center justify-between gap-4 flex-wrap">
      {items.map((item, index) => (
        <div key={index} className="bg-white shadow-sm rounded-lg p-6 mb-4 flex items-center gap-4 flex-1 w-full max-h-[160px]">
          <div className="w-full">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-500">{item.title}</h3>
              <div className={`p-3 rounded-full ${item.color} text-white text-xl`}>
                {item.icon}
              </div>
            </div>
            <div className="mt-2 flex flex-col">
              <div className="relative mb-4">
                <p className="text-4xl font-bold">{item.value}<span className="absolute top-8 left-10 text-sm text-green-600">{item.percecent}</span></p>
              </div>
              <p className="text-sm text-gray-500">{item.label}</p>
            </div>
          </div>
        </div>
      ))}
      
    </div>
  )
}
