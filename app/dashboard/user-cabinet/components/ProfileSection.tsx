import Image from "next/image";
import { UserProfile } from "@/lib/api/mock-api/index";
import { getPlanColor } from "../utils/formatters";

interface ProfileSectionProps {
  profile: UserProfile | undefined;
}

export const ProfileSection = ({ profile }: ProfileSectionProps) => {
  return (
    <section className="bg-white rounded shadow p-4 flex items-center gap-4">
      <Image
        src="/android-chrome-192x192.png"
        alt="User Avatar"
        width={64}
        height={64}
        className="rounded-full border"
      />
      <div>
        <div className="font-semibold">{profile?.name}</div>
        <div className="text-gray-500 text-sm">{profile?.email}</div>
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
