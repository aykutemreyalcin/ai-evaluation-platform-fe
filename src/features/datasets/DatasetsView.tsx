import { useQuery } from '@tanstack/react-query'
import { api } from '../../api/client'
import { DataTable, ErrorState, LoadingState } from '../../components/Ui'
export function DatasetsView() { const { data, isLoading, error } = useQuery({ queryKey: ['datasets'], queryFn: api.datasets }); if (isLoading) return <LoadingState />; if (error) return <ErrorState text={error.message} />; return <DataTable><thead><tr><th>Dataset</th><th>System</th><th>Cases</th><th>Immutable</th></tr></thead><tbody>{data?.map(d => <tr key={d.id}><td>{d.id}</td><td>{d.system}</td><td>{d.caseCount}</td><td>{d.immutable ? 'Yes' : 'No'}</td></tr>)}</tbody></DataTable> }
