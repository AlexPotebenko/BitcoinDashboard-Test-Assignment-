<!--
  .github/copilot-instructions.md
  Global Copilot behavioral guidelines for code quality, commits, and documentation.
-->

Apply to all generated files and content:

- **Be concise**: prefer focused solutions over verbose implementations
- **DRY (Don't Repeat Yourself)**: eliminate duplication across files and functions
- **No boilerplate**: ensure every line of code or text serves a clear purpose
- **Start simple**: implement the minimal viable solution first, then enhance
- **Extract repetition**: create reusable abstractions for recurring patterns

## Contents

- Quality Attributes
- Universal Code Quality Rules
- Code Generation Patterns
- Documentation Strategy
- Technology-Specific Guidelines

---

## Quality Attributes

Prioritize in this order:

1. Correctness (ensure accuracy and avoid errors)
2. Readability (use clear, self-explanatory names and simple structure)
3. Maintainability (organize code for easy updates and reuse)
4. Consistency (adhere to established style, formatting, and tone)

---

## Universal Code Quality Rules

Apply to all generated files and content:

- **Be concise**: prefer focused solutions over verbose implementations
- **DRY (Don’t Repeat Yourself)**: eliminate duplication across files and functions
- **No boilerplate**: ensure every line of code or text serves a clear purpose
- **Start simple**: implement the minimal viable solution first, then enhance
- **Extract repetition**: create reusable abstractions for recurring patterns

---

## Code Generation Patterns

### Component Architecture

- Extract large components into focused subcomponents
- Use composition over inheritance
- Keep components under 200 lines when possible
- Separate UI logic from business logic

### API and Data Flow

- Implement proper error handling and loading states
- Follow established API and state-management patterns
- Use standard loading states: `idle`, `loading`, `error`, `success`
- Handle real-time updates according to the data source

### Testing Strategy

- Write unit tests for utility functions and API logic
- Mock external dependencies appropriately
- Test both success and error scenarios
- Maintain coverage for critical business logic

---

## Documentation Strategy

- Always consult `README.md` before creating or modifying files
- Keep `copilot-instructions.md` focused on behavioral guidelines
- Avoid project-specific content; direct readers to the README
- Use actionable examples with clear do’s and don’ts
- Include anti-patterns marked with ❌ for contrast

---

## Technology-Specific Guidelines

- Place tech-specific rules in `.github/copilot-instructions-[technology].md`
- Use filenames like `copilot-instructions-ts.md`, `copilot-instructions-react.md`, etc.
- Discover available guides via:
- Always consult the relevant guide for the specific technology or purpose

```bash
ls ./.github | grep "copilot-instructions-"
```
