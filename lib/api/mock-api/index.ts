// Main API exports - centralized export point

// Export types
export * from "./types";

// Export individual API functions
export { getUserProfile, updateUserProfile } from "./userProfile";
export { getLoginHistory, addLoginHistoryEntry } from "./loginHistory";
export {
  getNotificationSettings,
  updateNotificationSettings,
} from "./notificationSettings";
export { getAccountStatus, updateAccountUsage } from "./accountStatus";

// Export utilities and services
export { initializeLocalStorage } from "./storage";
export { MockRealTimeService, mockRealTimeService } from "./realTimeService";

// Create combined API object for convenience
import { getAccountStatus, updateAccountUsage } from "./accountStatus";
import { addLoginHistoryEntry, getLoginHistory } from "./loginHistory";
import {
  getNotificationSettings,
  updateNotificationSettings,
} from "./notificationSettings";
import { getUserProfile, updateUserProfile } from "./userProfile";

const mockApi = {
  getUserProfile,
  updateUserProfile,
  getLoginHistory,
  addLoginHistoryEntry,
  getNotificationSettings,
  updateNotificationSettings,
  getAccountStatus,
  updateAccountUsage,
};

export { mockApi };
