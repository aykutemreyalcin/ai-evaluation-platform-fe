import type { Dataset, DatasetSummary, SystemSummary } from '../api/types'
export const systems: SystemSummary[] = [{ id: 'ata-rag', displayName: 'ATA RAG', status: 'CONFIGURED' }, { id: 'internship-coordinator', displayName: 'Internship Coordinator', status: 'CONFIGURED' }]
export const datasets: DatasetSummary[] = [{ id: 'ata-rag-golden-v1', system: 'ata-rag', version: 'v1', caseCount: 100, immutable: true, createdAt: '2026-09-20T00:00:00Z' }, { id: 'internship-golden-v1', system: 'internship-coordinator', version: 'v1', caseCount: 50, immutable: true, createdAt: '2026-09-20T00:00:00Z' }]
export const datasetDetails: Dataset[] = datasets.map(dataset => ({ ...dataset, cases: [{ id: `${dataset.system}-001`, metadata: { category: 'synthetic', containsPii: false } }] }))
