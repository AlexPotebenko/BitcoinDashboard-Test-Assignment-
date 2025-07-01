# Mid-Term Strategy: Interactive Client with Mock Backend

## Goal
Transform the static prototype into an interactive application with full functionality, using Next.js API routes as a mock backend. This phase adds state management, real-time updates, and proper data flow while remaining deployable on Vercel without external dependencies.

## Scope
- **Interactive UI with full functionality**
- Mock API service using local functions that simulate real API behavior
- State management with Redux Toolkit using RTK Query
- Simulated real-time updates with fake WebSocket connections
- All CRUD operations working with localStorage persistence
- Realistic API delays and error scenarios for testing

## Implementation Steps

1. **Mock API Service (Local Functions)**
   - Create mock API functions that simulate real API behavior:
     - `mockUserAPI` - GET/PUT user profile data
     - `mockBalancesAPI` - GET current USD/BTC balances
     - `mockBtcPriceAPI` - GET current BTC price (with periodic updates)
     - `mockDealsAPI` - POST buy/sell transactions
     - `mockTransactionsAPI` - POST deposit/withdraw operations
     - `mockHistoryAPI` - GET all user actions and price changes
     - `mockAuthAPI` - GET user login sessions
     - `mockSettingsAPI` - GET/PUT notification preferences
   - Use localStorage for data persistence across sessions
   - Implement realistic delays (100-500ms) and error scenarios
   - Return Promise-based responses that match real API structure

2. **State Management (Redux Toolkit)**
   - Create slices for:
     - `userSlice` - profile data, account status, settings
     - `balanceSlice` - USD and BTC balances
     - `priceSlice` - current BTC price and price history
     - `historySlice` - all transactions and actions
     - `dealsSlice` - active and completed deals
   - Implement RTK Query for API calls and caching
   - Add middleware for real-time price updates

3. **Interactive Dashboard**
   - **Buy/Sell Bitcoin:**
     - Form validation and error handling
     - Price slippage detection and confirmation dialog
     - Real-time balance updates after transactions
   - **Deposit/Withdraw:**
     - Amount validation (prevent negative balances)
     - Instant balance updates
     - Transaction history recording
   - **BTC Price Chart:**
     - Live price updates (simulated with intervals)
     - Interactive chart with price history
   - **Deal Confirmation Dialog:**
     - Pre-filled from user settings
     - Real-time price validation
     - Success/error feedback

4. **Interactive User Cabinet**
   - **Profile Management:**
     - Editable form with validation
     - Avatar upload (base64 storage)
     - Persistent data updates
   - **Account Status:**
     - Plan upgrade/downgrade functionality
     - Feature comparison (free vs premium)
   - **Login History:**
     - Real login session tracking
     - Device/browser detection
   - **Settings:**
     - Notification preferences with persistence
     - Deal settings (default amounts, price delta)

5. **Real-Time Features**
   - **Price Updates:**
     - Simulated WebSocket using setInterval and custom event emitters
     - Price change notifications through fake WebSocket events
     - Automatic chart updates via Redux middleware
   - **History Updates:**
     - Instant transaction recording with simulated processing delays
     - Real-time status updates (pending → completed) after timeout
     - Push notifications for completed deals using browser Notification API

6. **Enhanced UI/UX**
   - Loading states for all operations (with realistic delays)
   - Success/error toast notifications
   - Form validation with real-time feedback
   - Responsive design improvements
   - Accessibility enhancements

7. **Data Persistence & Simulation**
   - Use browser localStorage for all data persistence
   - Simulate network delays and error conditions
   - Mock WebSocket connections using custom event system
   - Realistic error scenarios (network failures, insufficient funds, etc.)

## Technical Implementation

### Mock API Service Structure
```
lib/
├── mockApi/
│   ├── userApi.ts        # User profile & settings
│   ├── tradingApi.ts     # Balances, deals, transactions
│   ├── priceApi.ts       # BTC price with live updates
│   ├── historyApi.ts     # Transaction history
│   ├── authApi.ts        # Login sessions
│   └── index.ts          # Export all mock APIs
├── mockWebSocket/
│   ├── priceUpdater.ts   # Simulated price WebSocket
│   ├── dealNotifier.ts   # Deal completion notifications
│   └── index.ts          # WebSocket event system
└── storage/
    ├── localStorage.ts   # LocalStorage utilities
    └── mockData.ts       # Initial seed data
```

### Redux Store Structure (with RTK Query)
```
store/
├── slices/
│   ├── userSlice.ts
│   ├── balanceSlice.ts
│   ├── priceSlice.ts
│   ├── historySlice.ts
│   └── dealsSlice.ts
├── api/
│   ├── apiSlice.ts       # RTK Query with mock endpoints
│   └── mockBaseQuery.ts  # Custom base query for local functions
├── middleware/
│   ├── priceUpdater.ts   # Real-time price updates
│   └── dealProcessor.ts  # Deal status updates
└── store.ts
```

### Mock API Implementation Example
```typescript
// lib/mockApi/tradingApi.ts
export const mockTradingApi = {
  async getBalances(): Promise<{usd: number, btc: number}> {
    await delay(200); // Simulate network delay
    const balances = localStorage.getItem('balances');
    return balances ? JSON.parse(balances) : { usd: 200, btc: 0 };
  },
  
  async executeDeal(deal: Deal): Promise<DealResult> {
    await delay(500); // Simulate processing time
    // Simulate 5% chance of failure
    if (Math.random() < 0.05) {
      throw new Error('Deal execution failed');
    }
    // Update balances and return result
    return { success: true, dealId: generateId() };
  }
};
```

## Mock Data Strategy
- Pre-populated user profiles and settings in localStorage
- Realistic BTC price fluctuations (±2-5% changes) with automatic updates
- Sample transaction history with timestamps
- Simulated login sessions with device detection
- Error scenarios for testing (insufficient funds, network timeouts, validation errors)
- Configurable delays and failure rates for different scenarios

## Real-Time Simulation
- **Price Updates**: Custom event emitter that updates every 5-30 seconds
- **WebSocket Simulation**: Event-driven system that mimics WebSocket behavior
- **Deal Processing**: Asynchronous workflows with realistic timing
- **Push Notifications**: Browser Notification API for deal completions

## Deliverable
- Fully interactive Bitcoin Frenzy Dashboard
- All features working with realistic simulated API behavior
- Complete state management with RTK Query integration
- Real-time updates using simulated WebSocket connections
- Data persistence across browser sessions via localStorage
- Ready for seamless migration to real API endpoints

## Success Criteria
- Users can perform all trading operations
- Real-time price updates work smoothly
- All forms validate and provide feedback
- Data persists across browser sessions
- No broken functionality or dead-end flows

---

This interactive prototype will demonstrate the complete user experience and serve as the foundation for real backend integration.
