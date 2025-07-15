# User Cabinet Page – Implementation Details

This document describes the technical implementation of the `/dashboard/user-cabinet` page, focusing on data flow, state management, component structure, and real-time features.

## Page Structure

The user cabinet page is composed of several focused React components:

- `ProfileSection` – Displays and edits user profile data.
- `AccountStatusSection` – Shows current plan, usage, and features.
- `LoginHistorySection` – Lists recent login sessions and device info.
- `NotificationSettingsSection` – Manages notification preferences.

All sections are composed in `UserCabinetClient.tsx`, which handles data loading and error states for the entire page.

## Data Fetching & State Management

- **RTK Query** (`lib/store/userApi.ts`) is used for all data fetching and mutations.
- Each section uses the relevant RTK Query hook (e.g., `useGetUserProfileQuery`, `useUpdateUserProfileMutation`).
- Data is cached and automatically updated on mutation or real-time events.
- Optimistic updates are used for notification settings and profile edits.

## Mock API Layer

- All data is served from a mock API (`lib/api/mock-api/`).
- Data is persisted in `localStorage` for session continuity.
- Artificial delays and error simulation are used to mimic real network/API behavior.

## Real-Time Updates

- The mock real-time service emits events for login history and account status changes.
- Components subscribe to these events via custom hooks (see `useUserCabinet.ts`).
- On event, RTK Query endpoints are invalidated to trigger a refetch and update the UI.

## Form Handling & Validation

- Profile editing uses a controlled form (`EditProfileForm.tsx`) with local state and validation logic in `useProfileForm.ts`.
- On submit, the mutation is triggered and the UI reflects loading, success, or error states.
- Cancel restores the last saved profile from the API.

## UI Feedback & Error Handling

- All async actions show loading indicators (`components/ui/loading.tsx`).
- Success and error notifications are shown using the notification system (`components/ui/notification.tsx`).
- Error boundaries and fallback UI are used for critical failures.

## Accessibility & Responsiveness

- All interactive elements have ARIA labels and keyboard navigation support.
- Layout adapts to mobile and desktop via responsive CSS.

## File Structure (User Cabinet Implementation)

```
lib/
├── api/
│   └── mock-api/           # Mock API, types, real-time service
└── store/
    ├── userApi.ts          # RTK Query endpoints
    ├── userSlice.ts        # Redux slice for user state
    ├── hooks.ts            # Typed Redux hooks
    └── ReduxProvider.tsx   # Redux provider

components/
├── ui/
│   ├── loading.tsx         # Loading indicators
│   └── notification.tsx    # Toast notifications
└── dashboard/
    └── ...                 # Shared dashboard components

app/
└── dashboard/user-cabinet/
    ├── page.tsx            # Page entry, loads UserCabinetClient
    ├── components/
    │   ├── ProfileSection.tsx
    │   ├── AccountStatusSection.tsx
    │   ├── LoginHistorySection.tsx
    │   ├── NotificationSettingsSection.tsx
    │   ├── EditProfileForm.tsx
    │   └── UserCabinetClient.tsx
    └── hooks/
        ├── useProfileForm.ts
        └── useUserCabinet.ts
```

## Data Flow (as implemented)

```
User Interaction
      ↓
React Component
      ↓
Redux Action Dispatch / RTK Query Hook
      ↓
RTK Query Endpoint
      ↓
Mock API Function
      ↓
localStorage Update (Mock API)
      ↓
Real-time Event Emission (if applicable)
      ↓
Redux State Update / RTK Query Cache Update
      ↓
UI Re-render
```

## LocalStorage Schema (Mock API)

- `user_profile` – UserProfile object
- `login_history` – LoginHistoryEntry[]
- `notification_settings` – NotificationSettings object
- `account_status` – AccountStatus object
