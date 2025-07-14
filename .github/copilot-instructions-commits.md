<!--
  .github/copilot-instructions-commits.md
  Git commit message guidelines and best practices for consistent version history.
-->

# Git Commit Guidelines

## Conventional Commits Format

### Standard Format

- **Format**: `type(scope): description`
- **Types**: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`
- **Rules**:
  - Use imperative mood, start with lowercase, no trailing period
  - Keep under 50 characters when possible

### Commit Types

- **`feat`**: New feature or functionality
- **`fix`**: Bug fix or error correction
- **`docs`**: Documentation changes only
- **`style`**: Code formatting, whitespace, or style changes (no logic changes)
- **`refactor`**: Code restructuring without changing functionality
- **`test`**: Adding or modifying tests
- **`chore`**: Maintenance tasks, dependency updates, build changes

### Scope Guidelines

- Use component or module names for scope (e.g., `auth`, `ui`, `api`)
- Keep scopes consistent across the project
- Omit scope if change affects multiple areas broadly

## Staged Files Focus

- Base commit messages only on staged changes (`git diff --staged`)
- Describe what changed and why, not how
- Focus on the business impact or problem solved
- Use present tense, imperative mood

## Message Examples

### Good Examples ✅

```
feat(auth): add JWT token authentication
fix(ui): resolve mobile navigation overflow
docs(readme): update installation instructions
style(components): format with Prettier
refactor(api): extract user service logic
test(auth): add login flow unit tests
chore(deps): update dependencies to latest versions
feat(dashboard): implement Bitcoin price chart
fix(api): handle network timeout errors
refactor(hooks): consolidate user cabinet logic
```

### Bad Examples ❌

```
Update stuff
Fixed bug
Added new feature
WIP
Refactoring
Changed some files
Updated code
```

## Multi-line Commits

For complex changes, use the body and footer:

```
feat(dashboard): add real-time Bitcoin price updates

- Implement WebSocket connection for live data
- Add price change indicators and animations
- Include 24h high/low price display

Closes #123
```

## Best Practices

### Do ✅

- Write clear, descriptive commit messages
- Use consistent formatting and types
- Focus on the "what" and "why" of changes
- Keep commits atomic (one logical change per commit)
- Reference issue numbers when applicable

### Don't ❌

- Use vague or generic messages
- Commit multiple unrelated changes together
- Include implementation details in the message
- Use past tense ("added" instead of "add")
- Exceed 50 characters for the subject line

## Common Patterns

### Feature Development

```
feat(component): add new component
test(component): add unit tests for new component
docs(component): add component documentation
```

### Bug Fixes

```
fix(bug): resolve specific issue description
test(bug): add regression test for bug fix
```

### Refactoring

```
refactor(module): extract reusable logic
refactor(module): improve code organization
refactor(module): optimize performance
```

### Maintenance

```
chore(deps): update package dependencies
chore(build): configure new build tool
chore(lint): fix linting issues
```
