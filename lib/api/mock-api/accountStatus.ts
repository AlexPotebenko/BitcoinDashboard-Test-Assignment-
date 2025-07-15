// Account Status API functions

import { delay } from "../../utils";
import { AccountStatus, StorageKeys } from "./types";

export const getAccountStatus = async (): Promise<AccountStatus> => {
  await delay(250);
  const data = localStorage.getItem(StorageKeys.ACCOUNT_STATUS);
  if (!data) throw new Error("Account status not found");
  return JSON.parse(data);
};

export const updateAccountUsage = async (
  usage: Partial<AccountStatus["usage"]>
): Promise<AccountStatus> => {
  await delay(300);
  const currentData = localStorage.getItem(StorageKeys.ACCOUNT_STATUS);
  if (!currentData) throw new Error("Account status not found");

  const current = JSON.parse(currentData);
  const updated = {
    ...current,
    usage: { ...current.usage, ...usage },
  };
  localStorage.setItem(StorageKeys.ACCOUNT_STATUS, JSON.stringify(updated));
  return updated;
};
