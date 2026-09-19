import { NavLink, Outlet } from 'react-router-dom'
const links = [['/', 'Overview'], ['/datasets', 'Datasets'], ['/experiments', 'Experiments'], ['/failed-cases', 'Failed cases']] as const
export function AppShell() { return <div className="shell"><aside><strong>AI Evaluation</strong><nav>{links.map(([to, label]) => <NavLink key={to} to={to} end={to === '/'}>{label}</NavLink>)}</nav></aside><div className="content"><header><span>Evaluation dashboard</span><span className="backend">Backend status: pending</span></header><Outlet /></div></div> }
