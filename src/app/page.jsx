import LoginCard from './components/LoginCard'
import { FaChartLine } from "react-icons/fa6";
import { FaShieldAlt } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { AiFillShop } from "react-icons/ai";


export default function HomePage() {

  return (
    <div className="min-h-scree flex items-center justify-center">
      <div className="bg-white shadow-lg flex w-full overflow-hidden min-h-screen">

        {/* Left Panel */}
        <div className="w-1/2 bg-gradient-to-br from-[#10B981] to-[#03835a] p-10 text-white hidden md:flex flex-col justify-center relative">
          <div className="absolute bottom-6 left-20 w-12 h-12 bg-white/10 rounded-full"></div> {/* Bottom Circle */}
          <div className="absolute top-10 right-15 w-18 h-18 bg-white/10 rounded-full"></div>   {/* Top Circle */}

          <div className="text-center flex flex-col items-start pl-10">
            <div className="flex flex-col items-center">
              <div className="backdrop-blur-md bg-white/30 p-4 text-4xl mb-1 w-fit rounded-[50%]"><AiFillShop size={25} /></div>
              <h2 className="text-3xl font-bold mb-4">Vendor Portal</h2>
              <p className="mb-8 text-md opacity-90 max-w-80">
                Join thousands of successful vendors and grow your business with our comprehensive platform.
              </p>

              <ul className="space-y-4 text-left text-sm">
                <li className="flex items-center gap-2">
                  <span className="backdrop-blur-md bg-white/30 p-4 rounded-lg"><FaChartLine size={20} /></span>
                  <p><strong>Analytics Dashboard</strong>
                  <br />
                  <span className="text-gray-200">Track your sales and performance</span></p>
                </li>
                <li className="flex items-center gap-2">
                  <span className="backdrop-blur-md bg-white/30 p-4 rounded-lg"><FaShieldAlt size={20} /></span>
                  <p><strong>Secure Payments</strong>
                  <br />
                  <span className="text-gray-200">Safe and reliable transactions</span></p>
                </li>
                <li className="flex items-center gap-2">
                  <span className="backdrop-blur-md bg-white/30 p-4 rounded-lg"><IoIosPeople size={20} /></span>
                  <p><strong>Customer Support</strong>
                  <br />
                  <span className="text-gray-200">24/7 dedicated support team</span></p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-1/2">
          <div className="min-h-screen bg-gradient-to-r from-[#10B981] to-[#F9FAFB] flex items-center justify-center">
            <LoginCard />
          </div>
        </div>

      </div>
    </div>
  )
}
