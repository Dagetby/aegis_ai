import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import IntegrationsPage from './pages/IntegrationsPage'
import FindingsListPage from './pages/FindingsListPage'
import FindingDetailPage from './pages/FindingDetailPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/integrations" element={<IntegrationsPage />} />
        <Route path="/findings" element={<FindingsListPage />} />
        <Route path="/findings/:id" element={<FindingDetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}
