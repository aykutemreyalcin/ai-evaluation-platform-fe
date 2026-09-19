import { Navigate, Route, Routes } from 'react-router-dom'

function Placeholder({ title }: { title: string }) { return <main><h1>{title}</h1><p>UI module will be added in its assigned task.</p></main> }

export default function App() {
  return <Routes>
    <Route path="/" element={<Placeholder title="AI Evaluation Platform" />} />
    <Route path="/datasets" element={<Placeholder title="Datasets" />} />
    <Route path="/experiments" element={<Placeholder title="Experiments" />} />
    <Route path="/experiments/:id" element={<Placeholder title="Experiment detail" />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
}
