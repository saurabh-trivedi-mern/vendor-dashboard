import { FaWallet, FaClock, FaChartLine, FaInfoCircle } from 'react-icons/fa'

const cards = [
  {
    title: 'Available Balance',
    amount: '$3,842.50',
    subtitle: 'Available for withdrawal',
    icon: <FaWallet className="text-green-600" />,
    iconBg: 'bg-green-100',
    button: 'Withdraw Funds',
    buttonClass: 'text-white',
  },
  {
    title: 'Pending Balance',
    amount: '$1,250.75',
    subtitle: 'Funds in escrow (will be released in 7–14 days)',
    icon: <FaClock className="text-yellow-600" />,
    iconBg: 'bg-yellow-100',
    alert: {
      icon: <FaInfoCircle size={30} className="text-yellow-700" />,
      text: 'Funds are held in escrow until the order is confirmed as delivered and the return period has expired.',
    },
  },
  {
    title: 'Lifetime Earnings',
    amount: '$24,568.30',
    subtitle: 'Total earnings since you joined',
    icon: <FaChartLine className="text-blue-600" />,
    iconBg: 'bg-blue-100',
    extra: {
      thisMonth: '$3,254.00',
      lastMonth: '$2,842.75',
    },
  },
]

export default function PayoutPageCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow relative">

          <div className={`absolute top-4 right-4 p-2 rounded-full ${card.iconBg}`}>
            {card.icon}
          </div>

          <h2 className="text-sm font-medium text-gray-500">{card.title}</h2>
          <p className="text-2xl font-bold text-gray-800 mt-3 mb-2">{card.amount}</p>
          <p className="text-sm text-gray-500 mb-4">{card.subtitle}</p>

          {card.button && (
            <button className={`${card.buttonClass} text-sm px-4 py-2 rounded min-w-full cursor-pointer`} style={{backgroundColor: 'var(--color-theme)'}} >
              {card.button}
            </button>
          )}

          {card.alert && (
            <div className="bg-yellow-50 border border-yellow-300 text-yellow-800 text-sm p-3 rounded flex items-start gap-2">
              {card.alert.icon}
              <span>{card.alert.text}</span>
            </div>
          )}

          {card.extra && (
            <div className="flex justify-between text-sm">
              <div>
                <p className="text-gray-500">This Month</p>
                <p className="font-semibold">{card.extra.thisMonth}</p>
              </div>
              <div>
                <p className="text-gray-500">Last Month</p>
                <p className="font-semibold">{card.extra.lastMonth}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
