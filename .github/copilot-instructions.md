# GitHub Copilot Commit Instructions

When generating code, please follow these user provided coding instructions. You can ignore an instruction if it contradicts a system message.

## Commit Message Generation

When asked to generate git commit messages, follow these guidelines:

### Format
Use conventional commit format: `type(scope): description`

### Types
- `feat:` - New features or functionality
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code formatting, no logic changes
- `refactor:` - Code restructuring without changing functionality
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks, dependencies, build changes

### Scope (optional)
- Use component/module names: `auth`, `ui`, `api`, `config`
- Keep it short and descriptive

### Description
- Use imperative mood: "add", "fix", "update", not "added", "fixed", "updated"
- Start with lowercase letter
- No period at the end
- Be concise but descriptive

### Examples
```
feat(auth): add JWT token authentication
fix(ui): resolve mobile navigation overflow
docs(readme): update installation instructions
style(components): format with prettier
refactor(api): extract user service logic
test(auth): add login flow unit tests
chore(deps): update dependencies to latest versions
```

### Context Analysis
When generating commit messages, consider:
- File types being changed (components, configs, tests, docs)
- Number of files affected
- Type of changes (additions, modifications, deletions)
- Purpose or feature being implemented

### Staged Files Focus
When user asks to commit staged (indexed) files:
- Create commit message descriptions **only** about the staged files
- Ignore unstaged changes in the working directory
- Use git diff --staged to identify what's actually staged
- Focus the commit message on the specific changes that will be committed

### Preferred Style
- Keep messages under 50 characters when possible
- Be specific about what was changed
- Focus on the "what" and "why", not the "how"

## Documentation Strategy

### Always Consult README Files
Before working with any directory or creating files, **always read the relevant README.md files first**:
- `/README.md` - Project overview and setup

### README-First Approach
- Each major directory has its own README.md explaining purpose and structure
- README files are the authoritative source for directory-specific guidelines
- When creating new directories, always add a README.md to explain their purpose
- Keep README files current - they guide both humans and AI assistants

### Copilot Instructions Strategy
- This file (`.github/copilot-instructions.md`) should contain only **behavioral strategies** and **work approaches**
- Do NOT include project-specific content descriptions - those belong in README files
- Focus on "how to work" rather than "what the project contains"
- When project information is needed, direct users to consult the appropriate README files
- Keep instructions timeless and reusable across different project states
