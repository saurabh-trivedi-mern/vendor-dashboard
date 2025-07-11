import BestSellingProducts from './components/BestSellingProducts'
import RecentOrders from './components/RecentOrders'
import CustomerLocations from './components/CustomerLocations'
import InventoryStatus from './components/InventoryStatus'
import DashboardPageCards from './components/DashboardPageCards'
import DashboardFilterBar from './components/DashboardFilterBar'

export default function DashboardPage() {
  return (
    <div className="grid gap-6 p-4">
      <DashboardFilterBar />
      <DashboardPageCards />

      <div className="bg-white h-60 rounded-xl shadow-sm p-4">Sales Trend</div> 
      {/* Sales Trend Chart Wll Be Here */}

      <div className="grid grid-cols-2 gap-6">
        <BestSellingProducts />
        <RecentOrders />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <CustomerLocations />
        <InventoryStatus />
      </div>
    </div>
  )
}
