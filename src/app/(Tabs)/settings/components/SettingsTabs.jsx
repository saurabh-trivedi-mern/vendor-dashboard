'use client'

export default function SettingsTabs({ activeTab, setActiveTab }) {
  const tabs = ['General Info', 'Business & KYC', 'Payout Details', 'Security']

  return (
    <div className="flex flex-wrap bg-white shadow-md mb-6 border-gray-200 rounded-md px-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-4 py-3 text-sm font-medium border-b-2 transition cursor-pointer ${
            activeTab === tab
              ? 'border-[var(--color-theme)] bg-[var(--color-theme-light)] rounded-md text-[var(--color-theme)]'
              : 'border-transparent text-gray-600 hover:text-[var(--color-theme)]'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}
