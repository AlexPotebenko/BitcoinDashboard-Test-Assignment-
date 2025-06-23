# Short-Term Strategy: Static Client-Only Prototype

## Goal
Quickly deliver a client-only prototype of the Bitcoin Frenzy Dashboard, focusing on UI/UX and layout, with all components populated by static (hardcoded) data. This will allow for rapid feedback and design iteration before backend integration.

## Scope
- **No backend, no real-time, no database.**
- All data (balances, BTC price, history, user profile) is static and hardcoded in the client.
- Only the client-side (Next.js/React) code is implemented.

## Implementation Steps
1. **Project Structure**
   - Use Next.js pages and/or app directory for routing.
   - Create the following main pages/components:
     - Dashboard (main page)
     - User Cabinet (profile page)
     - Shared layout: left navigation, top ribbon, right history panel, main content area

2. **Components to Implement (with static data):**
   - **Navigation Menu:** Links to /dashboard and /user-cabinet
   - **Top Ribbon:** Shows static USD balance, BTC balance, and BTC price
   - **History Panel:** List of hardcoded actions (buy, sell, deposit, withdraw, price changes)
   - **Dashboard Content:**
     - Buy/sell forms (fields pre-filled with static settings)
     - BTC price chart (use a chart library or placeholder image with static data)
     - Deposit/withdraw forms (accept any amount, but do not update state)
     - Deal dialog (shows static deal data, pre-filled from static settings)
   - **User Cabinet:**
     - Static user profile info (name, email, avatar)
     - Static editable form for user data (fields do not persist changes)
     - Static view of account-related actions and login history (recent logins, device/browser info)
     - Static display of account status (e.g., free or premium plan, which can affect deal speed)
     - Static settings UI for notifications and preferences (no persistence)
     - *Note: This static UI should visually represent both user (personal info) and account (status, security, history) management, but all data is hardcoded and non-interactive for this phase.*

3. **UI Libraries**
   - Use shadcn/ui and Tailwind CSS for rapid UI development and styling.

4. **Routing**
   - Use Next.js routing for /dashboard and /user-cabinet.
   - Default route is /dashboard.

5. **No State Management**
   - No Redux or context needed; all data is static and local to components.

## Deliverable
- A working Next.js app with all UI components and pages, fully populated with static data, ready for design review and feedback.
- No backend, no API calls, no real-time updates.

---

This static prototype will serve as the foundation for future integration with real data and backend services.
