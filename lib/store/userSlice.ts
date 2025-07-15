import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  UserProfile,
  LoginHistoryEntry,
  AccountStatus,
} from "@/lib/api/mock-api/index";

export interface UserState {
  profile: UserProfile | null;
  loginHistory: LoginHistoryEntry[];
  accountStatus: AccountStatus | null;
  isEditing: boolean;
  notifications: {
    show: boolean;
    type: "success" | "error" | "info";
    message: string;
  } | null;
}

const initialState: UserState = {
  profile: null,
  loginHistory: [],
  accountStatus: null,
  isEditing: false,
  notifications: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<UserProfile>) => {
      state.profile = action.payload;
    },
    setLoginHistory: (state, action: PayloadAction<LoginHistoryEntry[]>) => {
      state.loginHistory = action.payload;
    },
    addLoginHistoryEntry: (state, action: PayloadAction<LoginHistoryEntry>) => {
      state.loginHistory.unshift(action.payload);
      // Keep only last 10 entries
      if (state.loginHistory.length > 10) {
        state.loginHistory = state.loginHistory.slice(0, 10);
      }
    },
    setAccountStatus: (state, action: PayloadAction<AccountStatus>) => {
      state.accountStatus = action.payload;
    },
    setIsEditing: (state, action: PayloadAction<boolean>) => {
      state.isEditing = action.payload;
    },
    showNotification: (
      state,
      action: PayloadAction<{
        type: "success" | "error" | "info";
        message: string;
      }>
    ) => {
      state.notifications = {
        show: true,
        ...action.payload,
      };
    },
    hideNotification: (state) => {
      state.notifications = null;
    },
  },
});

export const {
  setProfile,
  setLoginHistory,
  addLoginHistoryEntry,
  setAccountStatus,
  setIsEditing,
  showNotification,
  hideNotification,
} = userSlice.actions;

export default userSlice.reducer;
