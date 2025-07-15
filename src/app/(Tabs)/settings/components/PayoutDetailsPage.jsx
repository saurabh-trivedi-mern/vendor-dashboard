'use client'
import BankAccountInformationSection from './BankAccountInformationSection'

export default function PayoutDetailsPage() {
  return (
    <div className="max-w-screen mx-auto bg-white shadow-md p-4 md:p-6 rounded-lg space-y-6">

      {/* Header */}
      <div className="flex justify-between items-start flex-wrap gap-4">
        <div>
          <h2 className="text-xl font-semibold">Payout Details</h2>
          <p className="text-sm text-gray-500">
            Manage your payment receiving information for escrow releases and payouts
          </p>
        </div>
        <span className="bg-green-100 text-green-700 px-3 py-1 text-sm rounded-full">
          🟢 Verified
        </span>
      </div>

      {/* Main Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-5 border-b border-gray-300">

        {/* Left Form */}
        <div className="md:col-span-2 space-y-4">
          <BankAccountInformationSection />
        </div>

        {/* Right Status */}
        <div className="space-y-4">
          <div className="p-6 flex flex-col gap-2 rounded-lg border bg-[var(--color-theme-light)] border-[var(--color-theme)]">
            <h3 className="font-semibold mb-4">✅ Current Setup</h3>

            <div>
              <span className="text-gray-500">Payout Method</span><br />
              <span>📱 UPI Transfer</span>
            </div>

            <div>
              <span className="text-gray-500">Status</span><br />
              <span className="text-green-700">🟢 Verified</span>
            </div>

            <div>
              <span className="text-gray-500">Last Updated</span><br />
              <span className="text-black text-lg">December 10, 2024</span>
            </div>

            <div>
              <span className="text-gray-500">Next Scheduled Payout</span><br />
              <span className="text-black text-lg">📅 December 22, 2024</span>
            </div>

            <div className="p-4 bg-white rounded-lg border border-[var(--color-theme)]">
              <p className="text-sm text-gray-500">Available Balance</p>
              <div className="flex justify-between items-center mt-2">
                <p className="text-green-700 text-2xl font-bold">$2,847.50</p>
                <a href="#" className="text-xs text-[var(--color-theme)] underline">View Details</a>
              </div>
            </div>
          </div>

          {/* Notice */}
          <div className="bg-blue-50 p-4 border border-blue-200 text-sm rounded-lg">
            <h4 className="font-semibold mb-1 text-blue-700">🔐 Security Notice</h4>
            <p className="text-blue-600">
              Your payment information is encrypted and securely stored. Changes may require verification and could delay next payout.
            </p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="w-full flex flex-wrap justify-between items-center gap-4 mt-6">
        <p className="text-xs text-gray-500">
          🔒 All payment information is encrypted and stored securely
        </p>
        <div className="flex gap-2">
          <button className="px-4 py-2 rounded border text-gray-600 hover:bg-gray-100">
            Cancel Changes
          </button>
          <button className="px-4 py-2 rounded bg-[var(--color-theme)] text-white cursor-pointer">
            💾 Save Payout Details
          </button>
        </div>
      </div>

    </div>
  )
}
