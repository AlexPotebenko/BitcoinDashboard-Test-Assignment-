// User Profile API functions

import { delay } from "../../utils";
import { UserProfile, StorageKeys } from "./types";

export const getUserProfile = async (): Promise<UserProfile> => {
  await delay(300);
  const data = localStorage.getItem(StorageKeys.USER_PROFILE);
  if (!data) throw new Error("User profile not found");
  return JSON.parse(data);
};

export const updateUserProfile = async (
  profile: Partial<UserProfile>
): Promise<UserProfile> => {
  await delay(500);
  const currentData = localStorage.getItem(StorageKeys.USER_PROFILE);
  if (!currentData) throw new Error("User profile not found");

  const current = JSON.parse(currentData);

  const mockResponse =
    Math.random() < 0.1
      ? {
          error: true,
          status: 500,
          data: { message: "Random server error. Please try again later." },
        }
      : { error: false, updated: { ...current, ...profile } };

  if (mockResponse.error) {
    throw { status: mockResponse.status, data: mockResponse.data };
  }

  const updated = mockResponse.updated;
  localStorage.setItem(StorageKeys.USER_PROFILE, JSON.stringify(updated));
  return updated;
};
