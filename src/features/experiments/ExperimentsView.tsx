import { useState } from 'react'
import { StatusBadge, DataTable } from '../../components/Ui'

const experiments = [
  { id: 'exp-001', system: 'ata-rag', dataset: 'ata-rag-golden-v1', status: 'PASSED' as const, correctness: '94%' },
  { id: 'exp-002', system: 'internship-coordinator', dataset: 'internship-golden-v1', status: 'FAILED' as const, correctness: '76%' },
  { id: 'exp-003', system: 'ata-rag', dataset: 'ata-rag-golden-v1', status: 'PASSED' as const, correctness: '91%' },
  { id: 'exp-004', system: 'internship-coordinator', dataset: 'internship-golden-v1', status: 'PASSED' as const, correctness: '89%' },
  { id: 'exp-005', system: 'ata-rag', dataset: 'ata-rag-golden-v1', status: 'RUNNING' as const, correctness: '—' },
  { id: 'exp-006', system: 'internship-coordinator', dataset: 'internship-golden-v1', status: 'PASSED' as const, correctness: '93%' },
  { id: 'exp-007', system: 'ata-rag', dataset: 'ata-rag-golden-v1', status: 'FAILED' as const, correctness: '84%' },
  { id: 'exp-008', system: 'internship-coordinator', dataset: 'internship-golden-v1', status: 'PASSED' as const, correctness: '90%' },
]

export function ExperimentsView() {
  const [selected, setSelected] = useState(experiments[0].id)
  const experiment = experiments.find(item => item.id === selected)
  return <><button onClick={() => setSelected('exp-002')}>Show regression</button><DataTable><thead><tr><th>Experiment</th><th>System</th><th>Dataset</th><th>Quality</th><th>Status</th></tr></thead><tbody>{experiments.map(item => <tr key={item.id}><td>{item.id}</td><td>{item.system}</td><td>{item.dataset}</td><td>{item.correctness}</td><td><StatusBadge status={item.status} /></td></tr>)}</tbody></DataTable>{experiment?.status === 'FAILED' && <section className="regression"><h2>Regression detected</h2><p>Answer correctness declined below the configured threshold. Inspect failed cases before deployment.</p></section>}</>
}
