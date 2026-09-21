import { DataTable, EmptyState } from '../../components/Ui'
const failures = [
  { id: 'internship-008', evaluator: 'internship-eligibility-decision', reason: 'Expected eligible decision, received ineligible', trace: undefined },
  { id: 'rag-042', evaluator: 'rag-citation-correctness', reason: 'Citation did not match the expected source', trace: 'https://cloud.langfuse.com' },
  { id: 'rag-057', evaluator: 'rag-answerability', reason: 'Answered an intentionally unanswerable question', trace: 'https://cloud.langfuse.com' },
  { id: 'internship-019', evaluator: 'internship-required-documents', reason: 'Missing agreement was not surfaced', trace: undefined },
  { id: 'rag-089', evaluator: 'rag-groundedness', reason: 'Response included an unsupported policy claim', trace: 'https://cloud.langfuse.com' },
  { id: 'internship-034', evaluator: 'internship-reason-codes', reason: 'Eligibility reason code did not match the golden label', trace: undefined },
  { id: 'rag-103', evaluator: 'rag-citation-correctness', reason: 'Cited source did not support the answer', trace: 'https://cloud.langfuse.com' },
]
export function FailedCasesView() { if (!failures.length) return <EmptyState />; return <DataTable><thead><tr><th>Case</th><th>Evaluator</th><th>Reason</th><th>Trace</th></tr></thead><tbody>{failures.map(item => <tr key={item.id}><td>{item.id}</td><td>{item.evaluator}</td><td>{item.reason}</td><td>{item.trace ? <a href={item.trace} target="_blank" rel="noreferrer">Open Langfuse</a> : 'Unavailable'}</td></tr>)}</tbody></DataTable> }
