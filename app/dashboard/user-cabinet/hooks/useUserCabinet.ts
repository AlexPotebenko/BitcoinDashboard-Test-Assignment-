import { useEffect } from "react";
import {
  initializeLocalStorage,
  mockRealTimeService,
  LoginHistoryEntry,
  AccountStatus,
} from "@/lib/api/mock-api/index";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import {
  useGetUserProfileQuery,
  useGetLoginHistoryQuery,
  useGetNotificationSettingsQuery,
  useGetAccountStatusQuery,
} from "@/lib/store/userApi";
import {
  setProfile,
  setLoginHistory,
  addLoginHistoryEntry,
  setAccountStatus,
  hideNotification,
  showNotification,
} from "@/lib/store/userSlice";

export const useUserCabinet = () => {
  const dispatch = useAppDispatch();
  const userState = useAppSelector((state) => state.user);

  // Initialize localStorage on component mount
  useEffect(() => {
    initializeLocalStorage();
  }, []);

  // RTK Query hooks
  const queries = {
    profile: useGetUserProfileQuery(),
    loginHistory: useGetLoginHistoryQuery(),
    notificationSettings: useGetNotificationSettingsQuery(),
    accountStatus: useGetAccountStatusQuery(),
  };

  // Update Redux state when data loads
  useEffect(() => {
    if (queries.profile.data) {
      dispatch(setProfile(queries.profile.data));
    }
  }, [queries.profile.data, dispatch]);

  useEffect(() => {
    if (queries.loginHistory.data) {
      dispatch(setLoginHistory(queries.loginHistory.data));
    }
  }, [dispatch, queries.loginHistory.data]);

  useEffect(() => {
    if (queries.accountStatus.data) {
      dispatch(setAccountStatus(queries.accountStatus.data));
    }
  }, [dispatch, queries.accountStatus.data]);

  // Real-time event handlers
  useEffect(() => {
    const handleLoginHistoryUpdate = (newEntry: LoginHistoryEntry) => {
      dispatch(addLoginHistoryEntry(newEntry));
      dispatch(
        showNotification({
          type: "info",
          message: `New login detected: ${newEntry.browser} on ${newEntry.os}`,
        })
      );
    };

    const handleAccountStatusUpdate = (newStatus: AccountStatus) => {
      dispatch(setAccountStatus(newStatus));
    };

    mockRealTimeService.subscribe(
      "loginHistoryUpdate",
      handleLoginHistoryUpdate
    );
    mockRealTimeService.subscribe(
      "accountStatusUpdate",
      handleAccountStatusUpdate
    );

    mockRealTimeService.startLoginHistorySimulation();
    mockRealTimeService.startAccountStatusSimulation();

    return () => {
      mockRealTimeService.unsubscribe(
        "loginHistoryUpdate",
        handleLoginHistoryUpdate
      );
      mockRealTimeService.unsubscribe(
        "accountStatusUpdate",
        handleAccountStatusUpdate
      );
      mockRealTimeService.stopSimulation();
    };
  }, [dispatch]);

  // Auto-hide notifications
  useEffect(() => {
    if (userState.notifications?.show) {
      const timer = setTimeout(() => {
        dispatch(hideNotification());
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [userState.notifications, dispatch]);

  const isLoading = Object.values(queries).some((query) => query.isLoading);
  const hasError = Object.values(queries).some((query) => query.error);

  return {
    userState,
    queries,
    isLoading,
    hasError,
    dispatch,
  };
};
