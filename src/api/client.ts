import { datasetDetails, datasets, systems } from '../mocks/data'
import type { Dataset, DatasetSummary, SystemSummary } from './types'
const useMocks = import.meta.env.VITE_USE_MOCKS !== 'false'
async function request<T>(path: string, fallback: T): Promise<T> { if (useMocks) return fallback; const response = await fetch(`${import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8080/api'}${path}`); if (!response.ok) throw new Error(`API request failed: ${response.status}`); return response.json() as Promise<T> }
export const api = { systems: () => request<SystemSummary[]>('/systems', systems), datasets: () => request<DatasetSummary[]>('/datasets', datasets), dataset: (id: string) => request<Dataset>(`/datasets/${id}`, datasetDetails.find(item => item.id === id) ?? datasetDetails[0]) }
