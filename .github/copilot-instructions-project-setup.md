<!--
  .github/copilot-instructions-project-setup.md
  Project-specific setup and configuration guidelines for development workflow.
-->

# Project Setup and Configuration Guidelines

## Package Manager

This project uses **pnpm** as the package manager. Always use pnpm commands instead of npm or yarn.

```bash
# Install dependencies
pnpm install

# Add new dependencies
pnpm add <package-name>

# Add dev dependencies
pnpm add -D <package-name>

# Run scripts
pnpm run <script-name>
```

## Project Structure Context

- **Next.js 14+**: App Router with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: Redux Toolkit with RTK Query
- **Testing**: Jest for unit tests, Cypress for E2E
- **Package Manager**: pnpm with workspace support
- **Build Tool**: Next.js with TypeScript compilation
