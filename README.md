# AI Evaluation Platform - Frontend

React 19 + TypeScript + Vite dashboard for evaluation runs, datasets, experiment comparisons, and failed-case investigation.

```bash
cp .env.example .env
npm install
npm run dev
```

The API shapes are deliberately fixed in `../ai-evaluation-platform-be/docs/api-contract.md`. Use MSW or a local mock module while backend endpoints are pending; do not modify backend code from this repository.

Task ownership: Nizamettin owns all frontend tasks. Alvin and Aykut should not add frontend files except when a task explicitly asks them to update an API contract.
