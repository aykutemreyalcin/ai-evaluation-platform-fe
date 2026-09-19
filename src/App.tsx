import { Navigate, Route, Routes } from 'react-router-dom'
import { AppShell } from './layout/AppShell'
import { DashboardPage, DatasetsPage, ExperimentsPage, FailedCasesPage, NotFoundPage } from './pages/Pages'
export default function App() { return <Routes><Route element={<AppShell />}><Route index element={<DashboardPage />} /><Route path="datasets" element={<DatasetsPage />} /><Route path="experiments" element={<ExperimentsPage />} /><Route path="experiments/:id" element={<ExperimentsPage />} /><Route path="failed-cases" element={<FailedCasesPage />} /><Route path="404" element={<NotFoundPage />} /><Route path="*" element={<Navigate to="/404" replace />} /></Route></Routes> }
