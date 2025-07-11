'use client'

import { useState } from 'react'
import SettingsTabs from './components/SettingsTabs'
import KYCForm from './components/KYCForm'
import SecuritySettingsPage from './components/SecuritySettingsPage'
import GeneralInfoForm from './components/GeneralInfoForm'
import PayoutDetailsPage from './components/PayoutDetailsPage'

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('General Info')

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Business & KYC':
        return <KYCForm />
      case 'General Info':
        return <GeneralInfoForm />
      case 'Payout Details':
        return <PayoutDetailsPage />
      case 'Security':
        return <SecuritySettingsPage />
      default:
        return null
    }
  }

  return (
    <div className="p-6">
      <SettingsTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {renderTabContent()}
    </div>
  )
}
