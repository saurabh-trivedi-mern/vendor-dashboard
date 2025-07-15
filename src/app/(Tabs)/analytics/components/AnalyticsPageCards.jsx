import { FaEye, FaPercentage, FaTag } from 'react-icons/fa';
import { RiArrowGoBackLine } from 'react-icons/ri';

const items = [
  {
    title: 'Product Views',
    value: '8492',
    icon: <FaEye color="blue" />,
    color: 'bg-blue-200',
    percent: '↑18.2%',
    label: 'Compared to last month',
  },
  {
    title: 'Conversion Rate',
    value: '150',
    icon: <FaPercentage color="green" />,
    color: 'bg-green-200',
    percent: '↑0.5%',
    label: 'Compared to last month',
  },
  {
    title: 'Avg. Order Value',
    value: '$94.32',
    icon: <FaTag color="brown" size={13} />,
    color: 'bg-yellow-200',
    percent: '↑3.1%',
    label: 'Compared to last month',
  },
  {
    title: 'Return Rate',
    value: '1.2%',
    icon: <RiArrowGoBackLine color="red" />,
    color: 'bg-red-200',
    percent: '↑0.3%',
    label: 'Compared to last month',
  },
];

export default function DashboardPageCards() {
  return (
    <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow-sm rounded-lg p-5 flex flex-col justify-between"
        >
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-medium text-gray-500">{item.title}</h3>
            <div className={`p-2 rounded-full ${item.color}`}>
              {item.icon}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-2xl font-bold text-gray-800">{item.value}</p>
            <p className="text-sm text-green-600">{item.percent}</p>
            <p className="text-xs text-gray-400">{item.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
