// TODO: Make this file a server component if possible
"use client";

import { LoadingState } from "@/components/ui/loading";
import { Notification } from "@/components/ui/notification";
import { hideNotification } from "@/lib/store/userSlice";
import { AccountStatusSection } from "./components/AccountStatusSection";
import { EditProfileForm } from "./components/EditProfileForm";
import { LoginHistorySection } from "./components/LoginHistorySection";
import { NotificationSettingsSection } from "./components/NotificationSettingsSection";
import { ProfileSection } from "./components/ProfileSection";
import { useProfileForm } from "./hooks/useProfileForm";
import { useUserCabinet } from "./hooks/useUserCabinet";

export default function UserCabinetPage() {
  const { userState, queries, isLoading, hasError, dispatch } =
    useUserCabinet();
  const { isEditing, notifications, loginHistory } = userState;

  const profileForm = useProfileForm(queries.profile.data, isEditing);

  if (isLoading) {
    return <LoadingState message="Loading user cabinet..." />;
  }

  if (hasError) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
          <h2 className="text-destructive font-semibold">Error Loading Profile</h2>
          <p className="text-destructive/80 text-sm mt-1">
            Failed to load user profile. Please refresh the page.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto flex flex-col gap-adaptive-lg">
      {notifications?.show && (
        <Notification
          type={notifications.type}
          message={notifications.message}
          onClose={() => dispatch(hideNotification())}
        />
      )}

      <h1 className="text-2xl font-bold mb-4 text-foreground">User Cabinet</h1>

      <ProfileSection profile={queries.profile.data} />

      <EditProfileForm
        editForm={profileForm.editForm}
        setEditForm={profileForm.setEditForm}
        isEditing={isEditing}
        updateProfileLoading={profileForm.updateProfileLoading}
        onEditToggle={profileForm.handleEditToggle}
        onSave={profileForm.handleSaveProfile}
        onCancel={profileForm.handleCancel}
      />

      <AccountStatusSection accountStatus={queries.accountStatus.data} />

      <LoginHistorySection loginHistory={loginHistory} />

      <NotificationSettingsSection
        notificationSettings={queries.notificationSettings.data}
      />
    </div>
  );
}
