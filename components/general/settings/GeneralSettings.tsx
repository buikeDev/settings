"use client";

import { useState } from "react";
import AvatarSection from "./AvatarSection";
import ProfileSettingsSection from "./ProfileSettingsSection";
import UsageCreditSection from "./UsageCreditSection";
import NotificationsSection from "./NotificationsSection";
import EditProfileModal from "./EditProfileModal";

export default function GeneralSettings() {
  const [profileData, setProfileData] = useState({
    fullName: "Samuel Favour",
    email: "samuelfavour120@gmail.com",
    phone: "(+234) 8066518279",
    role: "Super Admin",
    language: "English",
    country: "Nigeria",
    timezone: "GMT+1 (Lagos)",
  });
  
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [creditValue, setCreditValue] = useState(10);
  
  const handleProfileUpdate = (newData: typeof profileData) => {
    setProfileData(newData);
    setIsEditProfileOpen(false);
  };
  
  return (
    <div className="space-y-8">
      <AvatarSection />
      <ProfileSettingsSection 
        profileData={profileData} 
        onEditClick={() => setIsEditProfileOpen(true)}
      />
      <UsageCreditSection 
        creditValue={creditValue}
        onCreditChange={setCreditValue}
      />
      <NotificationsSection />
      
      <EditProfileModal
        isOpen={isEditProfileOpen}
        onClose={() => setIsEditProfileOpen(false)}
        profileData={profileData}
        onSave={handleProfileUpdate}
      />
    </div>
  );
}