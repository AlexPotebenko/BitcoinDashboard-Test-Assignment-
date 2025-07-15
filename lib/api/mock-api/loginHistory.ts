// Login History API functions

import { delay } from "../../utils";
import { LoginHistoryEntry, StorageKeys } from "./types";

export const getLoginHistory = async (): Promise<LoginHistoryEntry[]> => {
  await delay(200);
  const data = localStorage.getItem(StorageKeys.LOGIN_HISTORY);
  if (!data) return [];
  return JSON.parse(data);
};

export const addLoginHistoryEntry = async (
  entry: Omit<LoginHistoryEntry, "id">
): Promise<LoginHistoryEntry> => {
  await delay(300);
  const newEntry = { ...entry, id: `login-${Date.now()}` };
  const currentData = localStorage.getItem(StorageKeys.LOGIN_HISTORY);
  const history = currentData ? JSON.parse(currentData) : [];

  // Keep only last 10 entries
  const updatedHistory = [newEntry, ...history].slice(0, 10);
  localStorage.setItem(
    StorageKeys.LOGIN_HISTORY,
    JSON.stringify(updatedHistory)
  );
  return newEntry;
};
