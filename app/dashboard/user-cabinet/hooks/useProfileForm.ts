import { useState, useEffect } from "react";
import { UserProfile } from "@/lib/api/mock-api/index";
import { useAppDispatch } from "@/lib/store/hooks";
import { useUpdateUserProfileMutation } from "@/lib/store/userApi";
import { setIsEditing, showNotification } from "@/lib/store/userSlice";

export const useProfileForm = (
  profile: UserProfile | undefined,
  isEditing: boolean
) => {
  const dispatch = useAppDispatch();
  const [editForm, setEditForm] = useState<Partial<UserProfile>>({});
  const [updateProfile, { isLoading: updateProfileLoading }] =
    useUpdateUserProfileMutation();

  useEffect(() => {
    if (profile) {
      setEditForm(profile);
    }
  }, [profile]);

  const handleEditToggle = () => {
    dispatch(setIsEditing(!isEditing));
    if (!isEditing) {
      setEditForm(profile || {});
    }
  };

  const handleSaveProfile = async () => {
    try {
      await updateProfile(editForm).unwrap();
      dispatch(setIsEditing(false));
      dispatch(
        showNotification({
          type: "success",
          message: "Profile updated successfully!",
        })
      );
    } catch {
      // derive message from error shape
      const errMsg = "Failed to update profile. Please try again.";
      dispatch(showNotification({ type: "error", message: errMsg }));
    }
  };

  const handleCancel = () => {
    dispatch(setIsEditing(false));
    setEditForm(profile || {});
  };

  return {
    editForm,
    setEditForm,
    updateProfileLoading,
    handleEditToggle,
    handleSaveProfile,
    handleCancel,
  };
};
