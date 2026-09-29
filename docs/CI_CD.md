# CI/CD quality gate

Every pull request that changes the React application, dependency lockfile, Dockerfile, nginx configuration, or workflow configuration runs the **Frontend quality gate**.

The pipeline uses Node 22 with `npm ci`, then runs ESLint, Vitest, and the production Vite build. It uploads the resulting `dist/` directory as a release-ready artifact, builds the production nginx image, starts it, and requires `/health` to respond successfully. The same workflow runs after merges to `main`, which is the branch deployed by Coolify.
