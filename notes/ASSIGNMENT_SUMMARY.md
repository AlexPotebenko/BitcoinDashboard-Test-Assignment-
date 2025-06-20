# Bitcoin Frenzy Dashboard Assignment Summary

## Overview

This project is a Next.js dashboard called "Bitcoin Frenzy". It features a four-region layout: left-side navigation, top ribbon (showing balances and BTC price), right-side action history, and a main content area. The dashboard supports two main screens: Dashboard and User Cabinet.

## Features & Requirements

- **Navigation:**
  - Left menu for switching between /dashboard and /user-cabinet
  - Default route is /dashboard
- **Top Ribbon:**
  - Shows current USD balance, BTC balance, and BTC price
- **History Panel:**
  - Shows all user actions (deposit, withdraw, buy, sell, price changes) with timestamps, newest first
- **Pages:**
  - **Dashboard (Main Page):**
    - Buy and sell Bitcoin functionality in a single unified interface
    - BTC price diagram/visualization for tracking price changes and making informed buy/sell decisions
    - Deposit/withdraw actions support any user-specified amount, initial balance $200
    - Prevent negative balances or price, show user-friendly errors
    - When making a deal (buy/sell), a dialog appears with a deal data form
    - Deal data form fields are pre-populated with values from the user's dealing settings
  - **User Cabinet:**
    - Dedicated page for user personalization data
    - Displays user profile information (e.g., name, email, avatar)
    - Allows editing of personal details and viewing account-related actions
- **State Management:**
  - Centralized Redux Toolkit store for balances, price, and history
  - All actions update state and append to history
- **Error Handling:**
  - Prevent negative balances or price, show user-friendly errors
- **Tech Stack:**
  - Next.js (hosted on Vercel) for the frontend
  - React, Redux Toolkit, TypeScript, Tailwind CSS
  - shadcn/ui components for rapid UI development
  - Supabase (free tier) for database, real-time WebSocket updates, and authentication (including free Google OAuth integration)
  - PostgreSQL as the database, accessed via a popular ORM (e.g., Prisma) for advanced server-side queries and migrations
  - You can use both: Supabase client for real-time and direct operations, and an ORM for advanced backend logic
- **Assets:**
  - SVGs and icons for branding and PWA support
- **Build Output:**
  - Deliver both source code and production build folders

## Real-Time Price & Deal Confirmation

- The dashboard uses WebSockets to receive live BTC price updates, ensuring the displayed price is always current without page reloads.
- When a user initiates a buy or sell, the backend validates the order against the latest price.
- If the price has changed beyond an accepted delta (user-configurable threshold) since the user started the action, the app prompts the user to confirm or reject the new price before completing the deal.
- This approach simulates real trading platforms, where price slippage and confirmation are common.

## History Section Real-Time Updates

- The history section is updated immediately after each deal (buy, sell, deposit, withdraw, or price change) is initiated, showing the deal as "in progress".
- When the backend confirms or rejects the deal, the history entry is updated to reflect the final status: success or rejected, along with the result and timestamp.
- This is achieved using a Redux middleware that listens for deal actions (initiated, success, rejected) and dispatches actions to add or update entries in the history slice.
- This ensures the history panel always reflects the latest actions and their statuses, regardless of their origin (UI, WebSocket, etc.), and keeps the logic decoupled from UI components.

## Implementation Notes

- Use strict TypeScript typing for all state and props
- Follow provided design and color guidelines
- Use next-sitemap for SEO (sitemap.xml, robots.txt)
- Add meta tags and manifest for PWA and social sharing

---

For more details, see the full assignment PDF in this folder.
