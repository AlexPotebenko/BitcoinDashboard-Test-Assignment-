# GitHub Copilot Repository Instructions

These guidelines fit within the 90 KB limit. One idea per line keeps the token count low so Copilot can parse the file efficiently.

## Priority Matrix

1. Correctness – zero runtime or TypeScript errors
2. Security – prevent XSS, CSRF, data leaks, race conditions
3. Accessibility – WCAG 2.2 AA, keyboard and screen‑reader friendly
4. Performance – avoid unnecessary re‑renders and extra network requests
5. Readability – expressive identifiers, one idea per function
6. Maintainability – single responsibility, shared utilities, tests

## Project Context

- App: Bitcoin trading dashboard
- Pages: `/dashboard` (price chart, updates) and `/wallet` (buy, sell, deposit, withdraw)
- Stack: Next.js 14 (App Router, Server Components), TypeScript 5+, Redux Toolkit with RTK Query, Tailwind CSS theme tokens, Radix UI and shadcn/ui, pnpm
- Testing: Vitest (unit), Playwright (E2E), MSW (mock APIs)
- Linting: ESLint (`next/core-web-vitals`) and Prettier

## Universal Code Quality Rules

- Remove dead code and excessive comments
- Apply DRY if code repeats two or more times
- Avoid unnecessary boilerplate
- Start simple, then optimize
- Follow existing file and folder structure
- Keep functions under 75 lines and components under 200 lines
- Prefer pure functions and immutable data

## Commit Guidelines (Conventional Commits)

- `type(scope): description` where type is `feat`, `fix`, `docs`, `style`, `refactor`, `test`, or `chore`
- Subject line ≤ 50 characters, imperative mood, no period at the end
- Use the body for complex changes, bullet points, and issue references

## Next.js Patterns

### Rendering

- Use Server Components by default; add `'use client'` only when interactivity is required
- Keep Client Components lightweight; move heavy logic to the server
- Use `next/image` and `next/dynamic` for optimization

### Data Fetching

- Use RTK Query hooks inside Client Components for live data
- Use `Promise.all` in Server Components for parallel requests
- Prefer server actions for mutations when possible

## Redux Toolkit

- Name slices `domainFeatureSlice`
- Place selectors in `/selectors`; keep them pure
- Use tag‑based cache; invalidate after buy or sell completes
- Use typed hooks `useAppDispatch` and `useAppSelector`

## TypeScript Rules

- Enable `strict` and avoid `any`; use `unknown` with type guards when needed
- Inline types for up to three props; interfaces for four or more props
- Use discriminated unions for API results
- Use type‑only imports and `const` assertions

## UI and UX Guidelines

- Use skeletons to prevent layout shift
- Place spinners to the left of text
- Keep fixed button width when the label changes
- Show a pending state (not optimistic) for money operations
- Use responsive units (`clamp`, `%`, `rem`) instead of fixed pixels
- Always use theme tokens

## Export Patterns

- Group exports or provide a default; avoid many individual exports

## Testing Strategy

- Unit tests: reducers, selectors, helpers with at least 80 percent line coverage
- Component tests: React Testing Library for critical flows
- End‑to‑end tests: Playwright scenarios for buy, sell, deposit, and withdraw

## File Structure Snapshot

```
app/
  dashboard/
    page.tsx        # server component
    Chart.tsx       # client component
  wallet/
    page.tsx
    BuySellForm.tsx
lib/
  api/bitcoin.ts
  hooks/
  selectors/
  utils/
store/
  slices/
  api/
styles/
  globals.css
```

## Styling Conventions

- Tailwind class order: layout, box, typographic, visual, state
- Use `@apply` for repeated classes
- Extend the theme in `tailwind.config.ts`, not inline CSS

## Security Essentials

- Sanitize HTML with DOMPurify before using `dangerouslySetInnerHTML`
- Use CSRF tokens on all POST, PUT, and DELETE requests
- Never log private keys or wallet addresses

## Performance Checklist

- Memoize heavy selectors with `createSelector`
- Use `useMemo`, `useCallback`, and `React.memo` to avoid extra renders
- Debounce search inputs (300 ms) and throttle resize listeners

## Accessibility Checklist

- Ensure all interactive elements are reachable with Tab
- Provide `aria-live` regions for balance updates
- Maintain a color contrast ratio of at least 4.5:1

## API Contract Example

```typescript
interface WalletBalance {
  btc: string; // "0.035"
  fiat: string; // "2100.50"
  timestamp: string;
}
```

## Tooling Commands

```bash
pnpm i          # install dependencies
pnpm dev        # start dev server
pnpm test       # run tests
pnpm lint:fix   # lint and fix issues
pnpm format     # format code
```

## Do Not Generate

- Private keys, seed phrases, or real wallet addresses
- GPL or AGPL code that is not original
- UI text in languages other than English unless requested

## Documentation Voice and Style

- Use active voice and present tense
- Wrap Tailwind classes in backticks
- Provide inline code examples after rules

# End of file
