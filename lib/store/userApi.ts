import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  mockApi,
  UserProfile,
  LoginHistoryEntry,
  NotificationSettings,
  AccountStatus,
} from "@/lib/api/mock-api/index";

// Generic async wrapper for consistent error handling
const asyncWrapper = async <T>(apiCall: () => Promise<T>) => {
  try {
    const data = await apiCall();
    return { data };
  } catch (error) {
    return { error: { status: "FETCH_ERROR", error: String(error) } };
  }
};

// Allowed tag types as enum
export enum TagType {
  UserProfile = "UserProfile",
  LoginHistory = "LoginHistory",
  NotificationSettings = "NotificationSettings",
  AccountStatus = "AccountStatus",
}

// Factory for simple query endpoints
const simpleQuery = <T>(fn: () => Promise<T>, tag: TagType) => ({
  queryFn: () => asyncWrapper(fn),
  providesTags: [tag] as const,
});

// Factory for simple mutation endpoints
const simpleMutation = <T, A>(fn: (arg: A) => Promise<T>, tag: TagType) => ({
  queryFn: (arg: A) => asyncWrapper(() => fn(arg)),
  invalidatesTags: [tag] as const,
});

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: Object.values(TagType),
  endpoints: (builder) => ({
    getUserProfile: builder.query<UserProfile, void>(
      simpleQuery(mockApi.getUserProfile, TagType.UserProfile)
    ),
    updateUserProfile: builder.mutation<UserProfile, Partial<UserProfile>>(
      simpleMutation(mockApi.updateUserProfile, TagType.UserProfile)
    ),
    getLoginHistory: builder.query<LoginHistoryEntry[], void>(
      simpleQuery(mockApi.getLoginHistory, TagType.LoginHistory)
    ),
    getNotificationSettings: builder.query<NotificationSettings, void>(
      simpleQuery(mockApi.getNotificationSettings, TagType.NotificationSettings)
    ),
    updateNotificationSettings: builder.mutation<
      NotificationSettings,
      Partial<NotificationSettings>
    >(
      simpleMutation(
        mockApi.updateNotificationSettings,
        TagType.NotificationSettings
      )
    ),
    getAccountStatus: builder.query<AccountStatus, void>(
      simpleQuery(mockApi.getAccountStatus, TagType.AccountStatus)
    ),
  }),
});

export const {
  useGetUserProfileQuery,
  useUpdateUserProfileMutation,
  useGetLoginHistoryQuery,
  useGetNotificationSettingsQuery,
  useUpdateNotificationSettingsMutation,
  useGetAccountStatusQuery,
} = userApi;
