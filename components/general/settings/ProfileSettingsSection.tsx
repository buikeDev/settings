"use client";

import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";

interface ProfileData {
  fullName: string;
  email: string;
  phone: string;
  role: string;
  language: string;
  country: string;
  timezone: string;
}

interface ProfileSettingsSectionProps {
  profileData: ProfileData;
  onEditClick: () => void;
}

export default function ProfileSettingsSection({
  profileData,
  onEditClick
}: ProfileSettingsSectionProps) {
  return (
    <div className="border rounded-lg p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Profile Settings
        </h2>
        <Button variant="outline" size="sm" onClick={onEditClick}>
          <Edit className="h-4 w-4 mr-2" />
          Edit profile
        </Button>
      </div>
      <p className="text-sm text-muted-foreground">
        Set platform-wide preferences like branding, default timezone, language, and notification behavior.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mt-4">
        <ProfileItem label="Full name" value={profileData.fullName} />
        <ProfileItem label="Email address" value={profileData.email} />
        <ProfileItem label="Phone number" value={profileData.phone} />
        <ProfileItem label="Role" value={profileData.role} />
        <ProfileItem label="Language" value={profileData.language} />
        <ProfileItem label="Country" value={profileData.country} />
        <ProfileItem label="Timezone" value={profileData.timezone} />
      </div>
    </div>
  );
}

function ProfileItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-1">
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
}