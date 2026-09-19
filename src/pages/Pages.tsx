import { MetricCard, EmptyState } from '../components/Ui'
import { DatasetsView } from '../features/datasets/DatasetsView'
export function DashboardPage() { return <main><h1>Overview</h1><div className="metrics"><MetricCard label="Systems" value="2" /><MetricCard label="Latest quality" value="—" /><MetricCard label="Open regressions" value="—" /></div></main> }
export function DatasetsPage() { return <main><h1>Datasets</h1><DatasetsView /></main> }
export function ExperimentsPage() { return <main><h1>Experiments</h1><EmptyState text="Experiment data will appear here." /></main> }
export function FailedCasesPage() { return <main><h1>Failed cases</h1><EmptyState /></main> }
export function NotFoundPage() { return <main><h1>Page not found</h1></main> }
