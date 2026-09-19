import type { ReactNode } from 'react'
export function MetricCard({ label, value }: { label: string; value: ReactNode }) { return <section className="card"><small>{label}</small><strong>{value}</strong></section> }
export function StatusBadge({ status }: { status: 'RUNNING' | 'PASSED' | 'FAILED' }) { return <span className={`status ${status.toLowerCase()}`}>{status}</span> }
export function LoadingState() { return <p>Loading evaluation data…</p> }
export function EmptyState({ text = 'No results yet.' }: { text?: string }) { return <p className="empty">{text}</p> }
export function ErrorState({ text }: { text: string }) { return <p role="alert">{text}</p> }
export function DataTable({ children }: { children: ReactNode }) { return <div className="table-wrap"><table>{children}</table></div> }
