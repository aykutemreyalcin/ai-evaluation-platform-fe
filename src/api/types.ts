export type SystemSummary = { id: 'ata-rag' | 'internship-coordinator'; displayName: string; status: string }
export type DatasetSummary = { id: string; system: SystemSummary['id']; version: string; caseCount: number; immutable: boolean; createdAt: string }
export type Dataset = DatasetSummary & { cases: Array<{ id: string; metadata: Record<string, unknown> }> }
