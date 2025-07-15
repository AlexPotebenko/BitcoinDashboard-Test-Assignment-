// LocalStorage initialization and management

import {
  UserProfile,
  LoginHistoryEntry,
  NotificationSettings,
  AccountStatus,
  StorageKeys,
} from "./types";

// Initialize default data if not exists
export const initializeLocalStorage = () => {
  if (!localStorage.getItem(StorageKeys.USER_PROFILE)) {
    const defaultProfile: UserProfile = {
      id: "user-1",
      name: "Jane Doe",
      email: "jane.doe@email.com",
      accountType: "Premium",
    };
    localStorage.setItem(
      StorageKeys.USER_PROFILE,
      JSON.stringify(defaultProfile)
    );
  }

  if (!localStorage.getItem(StorageKeys.LOGIN_HISTORY)) {
    const defaultHistory: LoginHistoryEntry[] = [
      {
        id: "login-1",
        timestamp: "2025-01-14T10:12:00Z",
        browser: "Chrome",
        os: "Windows",
        status: "Success",
        ipAddress: "192.168.1.100",
      },
      {
        id: "login-2",
        timestamp: "2025-01-13T18:45:00Z",
        browser: "Safari",
        os: "iOS",
        status: "Success",
        ipAddress: "192.168.1.101",
      },
      {
        id: "login-3",
        timestamp: "2025-01-12T09:30:00Z",
        browser: "Firefox",
        os: "Linux",
        status: "Success",
        ipAddress: "192.168.1.102",
      },
    ];
    localStorage.setItem(
      StorageKeys.LOGIN_HISTORY,
      JSON.stringify(defaultHistory)
    );
  }

  if (!localStorage.getItem(StorageKeys.NOTIFICATION_SETTINGS)) {
    const defaultSettings: NotificationSettings = {
      emailNotifications: true,
      priceAlerts: true,
      productUpdates: false,
      securityAlerts: true,
    };
    localStorage.setItem(
      StorageKeys.NOTIFICATION_SETTINGS,
      JSON.stringify(defaultSettings)
    );
  }

  if (!localStorage.getItem(StorageKeys.ACCOUNT_STATUS)) {
    const defaultStatus: AccountStatus = {
      plan: "Premium",
      planExpiry: "2025-12-31T23:59:59Z",
      features: [
        "Faster deal execution",
        "Priority support",
        "Advanced analytics",
      ],
      usage: {
        dealExecutions: 85,
        maxDealExecutions: 1000,
      },
    };
    localStorage.setItem(
      StorageKeys.ACCOUNT_STATUS,
      JSON.stringify(defaultStatus)
    );
  }
};
