// Type definitions for the mock API

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  accountType: "Basic" | "Premium" | "VIP";
  avatar?: string;
}

export interface LoginHistoryEntry {
  id: string;
  timestamp: string;
  browser: string;
  os: string;
  status: "Success" | "Failed";
  ipAddress?: string;
}

export interface NotificationSettings {
  emailNotifications: boolean;
  priceAlerts: boolean;
  productUpdates: boolean;
  securityAlerts: boolean;
}

export interface AccountStatus {
  plan: "Basic" | "Premium" | "VIP";
  planExpiry?: string;
  features: string[];
  usage: {
    dealExecutions: number;
    maxDealExecutions: number;
  };
}

export enum StorageKeys {
  USER_PROFILE = "user_profile",
  LOGIN_HISTORY = "login_history",
  NOTIFICATION_SETTINGS = "notification_settings",
  ACCOUNT_STATUS = "account_status",
}

export type EventCallback<T = unknown> = (data: T) => void;
