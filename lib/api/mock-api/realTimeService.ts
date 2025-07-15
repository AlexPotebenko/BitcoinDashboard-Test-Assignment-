// Real-time simulation service

import { getAccountStatus, updateAccountUsage } from './accountStatus';
import { addLoginHistoryEntry } from './loginHistory';
import { EventCallback } from './types';

export class MockRealTimeService {
  private listeners: { [key: string]: EventCallback[] } = {};
  private intervals: { [key: string]: NodeJS.Timeout } = {};

  subscribe<T>(eventType: string, callback: EventCallback<T>) {
    if (!this.listeners[eventType]) {
      this.listeners[eventType] = [];
    }
    this.listeners[eventType].push(callback as EventCallback);
  }

  unsubscribe<T>(eventType: string, callback: EventCallback<T>) {
    if (this.listeners[eventType]) {
      this.listeners[eventType] = this.listeners[eventType].filter(
        (cb) => cb !== (callback as EventCallback)
      );
    }
  }

  private emit<T>(eventType: string, data: T) {
    if (this.listeners[eventType]) {
      this.listeners[eventType].forEach((callback) => callback(data));
    }
  }

  startLoginHistorySimulation() {
    if (this.intervals.loginHistory) return;

    this.intervals.loginHistory = setInterval(async () => {
      // Simulate random login events
      if (Math.random() > 0.7) {
        // 30% chance every interval
        const browsers = ["Chrome", "Firefox", "Safari", "Edge"];
        const oses = ["Windows", "macOS", "Linux", "iOS", "Android"];

        const newEntry = await addLoginHistoryEntry({
          timestamp: new Date().toISOString(),
          browser: browsers[Math.floor(Math.random() * browsers.length)],
          os: oses[Math.floor(Math.random() * oses.length)],
          status: Math.random() > 0.1 ? "Success" : "Failed", // 90% success rate
          ipAddress: `192.168.1.${Math.floor(Math.random() * 255)}`,
        });

        this.emit("loginHistoryUpdate", newEntry);
      }
    }, 10000); // Every 10 seconds
  }

  startAccountStatusSimulation() {
    if (this.intervals.accountStatus) return;

    this.intervals.accountStatus = setInterval(async () => {
      // Simulate deal execution updates
      if (Math.random() > 0.6) {
        // 40% chance every interval
        const currentStatus = await getAccountStatus();
        const newUsage = Math.min(
          currentStatus.usage.dealExecutions +
            Math.floor(Math.random() * 3) +
            1,
          currentStatus.usage.maxDealExecutions
        );

        const updatedStatus = await updateAccountUsage({
          dealExecutions: newUsage,
        });

        this.emit("accountStatusUpdate", updatedStatus);
      }
    }, 8000); // Every 8 seconds
  }

  stopSimulation(eventType?: string) {
    if (eventType && this.intervals[eventType]) {
      clearInterval(this.intervals[eventType]);
      delete this.intervals[eventType];
    } else {
      // Stop all simulations
      Object.values(this.intervals).forEach((interval) =>
        clearInterval(interval)
      );
      this.intervals = {};
    }
  }
}

export const mockRealTimeService = new MockRealTimeService();
