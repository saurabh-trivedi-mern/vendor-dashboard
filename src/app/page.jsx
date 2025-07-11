import LoginCard from './components/LoginCard'

export default function HomePage() {

  return (
    <div className="min-h-scree flex items-center justify-center">
      <div className="bg-white shadow-lg flex w-full overflow-hidden min-h-screen">

        {/* Left Panel */}
        <div className="w-1/2 bg-gradient-to-br from-green-500 to-green-700 p-10 text-white hidden md:flex flex-col justify-center relative">
          <div className="absolute bottom-6 left-6 w-16 h-16 bg-white/10 rounded-full"></div>
          <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-full"></div>

          <div className="text-center flex flex-col items-center">
            <div className="text-4xl mb-2 bg-white p-2 w-fit rounded-[50%]">🛍️</div>
            <h2 className="text-2xl font-bold mb-4">Vendor Portal</h2>
            <p className="mb-8 text-md opacity-90 max-w-80">
              Join thousands of successful vendors and grow your business with our comprehensive platform.
            </p>

            <ul className="space-y-4 text-left text-sm">
              <li className="flex items-start gap-2">
                📊 <p><strong>Analytics Dashboard</strong><br /><span className="text-gray-200">Track your sales and performance</span></p>
              </li>
              <li className="flex items-start gap-2">
                💳 <p><strong>Secure Payments</strong><br /><span className="text-gray-200">Safe and reliable transactions</span></p>
              </li>
              <li className="flex items-start gap-2">
                ☎️ <p><strong>Customer Support</strong><br /><span className="text-gray-200">24/7 dedicated support team</span></p>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-1/2">
          <div className="min-h-screen bg-gradient-to-r from-green-400 to-green-200 flex items-center justify-center">
            <LoginCard />
          </div>
        </div>

      </div>
    </div>
  )
}
