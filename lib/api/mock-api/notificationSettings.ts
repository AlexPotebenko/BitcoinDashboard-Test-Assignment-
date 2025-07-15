// Notification Settings API functions

import { delay } from "../../utils";
import { NotificationSettings, StorageKeys } from "./types";

export const getNotificationSettings =
  async (): Promise<NotificationSettings> => {
    await delay(200);
    const data = localStorage.getItem(StorageKeys.NOTIFICATION_SETTINGS);
    if (!data) throw new Error("Notification settings not found");
    return JSON.parse(data);
  };

export const updateNotificationSettings = async (
  settings: Partial<NotificationSettings>
): Promise<NotificationSettings> => {
  await delay(400);
  const currentData = localStorage.getItem(StorageKeys.NOTIFICATION_SETTINGS);
  if (!currentData) throw new Error("Notification settings not found");

  const current = JSON.parse(currentData);
  const updated = { ...current, ...settings };
  localStorage.setItem(
    StorageKeys.NOTIFICATION_SETTINGS,
    JSON.stringify(updated)
  );
  return updated;
};
