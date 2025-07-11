"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";

type NotificationType = {
  id: string;
  title: string;
  description: string;
  enabled: boolean;
};

export default function NotificationsSection() {
  const [notifications, setNotifications] = useState<NotificationType[]>([
    {
      id: "new-users",
      title: "Be notified when new users join the platform",
      description: "Stay updated on platform growth with alerts every time a new candidate or mentor registers.",
      enabled: true
    },
    {
      id: "job-engagement",
      title: "Track job engagement across the platform",
      description: "Receive notifications when candidates apply for jobs to monitor activity and success rates",
      enabled: false
    },
    {
      id: "user-documents",
      title: "Get updates when users generate documents",
      description: "Keep tabs on platform usage with notifications for resume and cover letter creations",
      enabled: false
    },
    {
      id: "mentorship-sessions",
      title: "Be alerted when mentorship sessions are scheduled",
      description: "Monitor how often mentors are being booked and how users are engaging with the mentorship feature.",
      enabled: true
    },
    {
      id: "payment-failures",
      title: "Stay informed on new purchases and payment failures",
      description: "Receive alerts for successful payments, plan upgrades, or billing issues.",
      enabled: false
    },
    {
      id: "user-feedback",
      title: "Receive alerts when feedback or inquiries are submitted",
      description: "Keep communication channels open and respond quickly to user feedback",
      enabled: true
    },
    {
      id: "critical-issues",
      title: "Get critical alerts for any issues on the platform",
      description: "Be the first to know when there's a system failure or unusual activity",
      enabled: true
    }
  ]);
  
  const handleToggleChange = (id: string, checked: boolean) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id ? { ...notification, enabled: checked } : notification
      )
    );
    
    const notification = notifications.find(n => n.id === id);
    if (notification) {
      toast.success(`${checked ? 'Enabled' : 'Disabled'}: ${notification.title}`);
    }
  };
  
  return (
    <div className="border rounded-lg p-6 space-y-4">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
        Notification Settings
      </h2>
      <p className="text-sm text-muted-foreground">
        Manage email alerts for key platform activities like email alerts, payments & billing issues.
      </p>
      
      <div className="space-y-6 mt-4">
        {notifications.map((notification) => (
          <div 
            key={notification.id} 
            className="flex items-start justify-between"
          >
            <div className="space-y-1">
              <p className="font-medium">{notification.title}</p>
              <p className="text-sm text-muted-foreground">{notification.description}</p>
            </div>
            <Switch 
              checked={notification.enabled}
              onCheckedChange={(checked) => handleToggleChange(notification.id, checked)}
              className="mt-1 data-[state=checked]:bg-primary"
            />
          </div>
        ))}
      </div>
    </div>
  );
}