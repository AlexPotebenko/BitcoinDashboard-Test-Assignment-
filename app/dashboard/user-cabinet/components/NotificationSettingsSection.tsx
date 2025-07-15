import { useState, useEffect } from "react";
import { LoadingState } from "@/components/ui/loading";
import { NotificationSettings } from "@/lib/api/mock-api/index";
import { useAppDispatch } from "@/lib/store/hooks";
import { useUpdateNotificationSettingsMutation } from "@/lib/store/userApi";
import { showNotification } from "@/lib/store/userSlice";

interface NotificationSettingsSectionProps {
  notificationSettings: NotificationSettings | undefined;
}

export const NotificationSettingsSection = ({
  notificationSettings,
}: NotificationSettingsSectionProps) => {
  const dispatch = useAppDispatch();
  const [updateNotificationSettings, { isLoading: updateSettingsLoading }] =
    useUpdateNotificationSettingsMutation();
  const [tempNotificationSettings, setTempNotificationSettings] = useState<
    Partial<NotificationSettings>
  >({});

  useEffect(() => {
    if (notificationSettings) {
      setTempNotificationSettings(notificationSettings);
    }
  }, [notificationSettings]);

  const handleNotificationSettingChange = async (
    setting: string,
    value: boolean
  ) => {
    const newSettings = { ...tempNotificationSettings, [setting]: value };
    setTempNotificationSettings(newSettings);

    try {
      await updateNotificationSettings({ [setting]: value }).unwrap();
      dispatch(
        showNotification({
          type: "success",
          message: "Notification settings updated!",
        })
      );
    } catch {
      setTempNotificationSettings(notificationSettings || {});
      dispatch(
        showNotification({
          type: "error",
          message: "Failed to update notification settings.",
        })
      );
    }
  };

  const settings = [
    { key: "emailNotifications", label: "Email notifications" },
    { key: "priceAlerts", label: "Price alerts" },
    { key: "productUpdates", label: "Product updates" },
    { key: "securityAlerts", label: "Security alerts" },
  ];

  return (
    <section className="bg-white rounded shadow p-4">
      <h2 className="font-semibold mb-2">Notification Settings</h2>
      {updateSettingsLoading && (
        <div className="mb-2">
          <LoadingState message="Updating settings..." size="sm" />
        </div>
      )}
      <div className="flex flex-col gap-3">
        {settings.map(({ key, label }) => (
          <label key={key} className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={
                tempNotificationSettings[key as keyof NotificationSettings] ||
                false
              }
              onChange={(e) =>
                handleNotificationSettingChange(key, e.target.checked)
              }
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span>{label}</span>
          </label>
        ))}
      </div>
    </section>
  );
};
