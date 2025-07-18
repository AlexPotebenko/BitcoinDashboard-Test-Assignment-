import Image from "next/image";
import { UserProfile } from "@/lib/api/mock-api/index";
import { getPlanColor } from "../utils/formatters";

interface ProfileSectionProps {
  profile: UserProfile | undefined;
}

export const ProfileSection = ({ profile }: ProfileSectionProps) => {
  return (
    <section className="bg-card rounded-adaptive-lg shadow-sm p-4 flex items-center gap-4 border border-border-default">
      <Image
        src="/android-chrome-192x192.png"
        alt="User Avatar"
        width={64}
        height={64}
        className="rounded-full border-2 border-gray-200 dark:border-gray-600"
      />
      <div>
        <div className="font-semibold text-card-foreground">{profile?.name}</div>
        <div className="text-muted-foreground text-sm">{profile?.email}</div>
        <div
          className={`inline-block px-2 py-1 rounded text-xs font-medium mt-1 ${getPlanColor(
            profile?.accountType || "Basic"
          )}`}
        >
          {profile?.accountType} Account
        </div>
      </div>
    </section>
  );
};
