
import methods from './data/methods.json'
import escrow from './data/escrow.json'
import transactions from './data/transactions.json'

import PayoutsFilterBar from "./components/PayoutsFilterBar";
import PayoutPageCards from "./components/PayoutsPageCards";
import PayoutMethods from './components/PayoutMethods'
import EscrowStatusTable from './components/EscrowStatusTable'
import TransactionHistory from './components/TransactionHistory'

export default function PayoutsPage() {
  return (
    <div className="p-6 space-y-6">
      <PayoutsFilterBar />
      <PayoutPageCards />

      <div className="flex gap-5">
        <PayoutMethods methods={methods} />
        <EscrowStatusTable orders={escrow} />
      </div>

      <TransactionHistory transactions={transactions} />
    </div>
  )
}

