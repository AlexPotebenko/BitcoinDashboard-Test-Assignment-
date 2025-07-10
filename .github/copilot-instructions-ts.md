# TypeScript Guidelines

Essential TypeScript patterns for this Next.js dashboard project.

## Type Definition Strategy

### Inline vs Interface Decision

```typescript
// ✅ Inline: Simple function params (≤3 props)
function updateRecord({ id, name }: { id: string; name: string }) {
  return api.update(id, { name });
}

// ✅ Interface: Complex/reusable types (≥4 props or shared)
interface DataRecord {
  id: string;
  name: string;
  value: number;
  timestamp: string;
  status: "active" | "inactive" | "pending";
}

// ❌ Don't create interfaces for one-time simple types
interface SimpleProps { text: string; }
function Button(props: SimpleProps) { ... }

// ✅ Use inline for simple one-off types
function Button({ text }: { text: string }) { ... }
```

## API Response Patterns

```typescript
// ✅ Consistent API response pattern
interface ApiResponse<T> {
  data: T;
  success: boolean;
  error?: string;
}

// ✅ Discriminated unions for error handling
type ApiResult<T> = 
  | { success: true; data: T }
  | { success: false; error: string };

// ✅ Aggregate interfaces for complex data
interface PageData {
  primary: PrimaryData;
  secondary: SecondaryData;
  metadata: MetaInfo[];
}
```

## Type Safety Essentials

```typescript
// ❌ Avoid any
function processData(data: any) { ... }

// ✅ Use unknown with type guards
function processData(data: unknown) {
  if (isValidRecord(data)) {
    // data is now typed as DataRecord
    return data.value;
  }
}

// ✅ Strict type guard for full type safety
function isValidRecord(data: unknown): data is DataRecord {
  return typeof data === 'object' && 
         data !== null && 
         'id' in data && 'value' in data;
}

// ✅ Simpler approach with optional chaining
function getNestedValue(data: unknown) {
  return (data as any)?.value?.id || null;
}

// ✅ Generic constraints for repository pattern
interface Repository<T extends { id: string }> {
  findById(id: string): Promise<T | null>;
  save(entity: T): Promise<T>;
}
```

## Import Optimization

```typescript
// ✅ Type-only imports
import type { DataRecord, ApiResponse } from './types';
import { fetchData } from './api';

// ✅ Const assertions for config values
const appViews = ["main", "settings", "help"] as const;
type AppView = typeof appViews[number];
```
