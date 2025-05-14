"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Save } from "lucide-react";
import { toast } from "sonner";

interface UsageCreditSectionProps {
  creditValue: number;
  onCreditChange: (value: number) => void;
}

export default function UsageCreditSection({
  creditValue,
  onCreditChange
}: UsageCreditSectionProps) {
  const [hasPendingChanges, setHasPendingChanges] = useState(false);
  const [tempCreditValue, setTempCreditValue] = useState(creditValue);
  
  const handleCreditChange = (value: string) => {
    const numValue = parseInt(value, 10);
    setTempCreditValue(numValue);
    setHasPendingChanges(numValue !== creditValue);
  };
  
  const handleSave = () => {
    onCreditChange(tempCreditValue);
    setHasPendingChanges(false);
    toast.success("Usage credits updated successfully");
  };
  
  return (
    <div className="border rounded-lg p-6 space-y-4">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
        Usage Credit Settings
      </h2>
      <p className="text-sm text-muted-foreground">
        Set the number of usage credits available to free users. 
        This determines how many times they can access AI before requiring an upgrade.
      </p>
      
      <div className="flex items-end gap-4 mt-4">
        <div className="space-y-2 w-full max-w-xs">
          <p className="text-sm font-medium">Usage credit</p>
          <Select 
            value={tempCreditValue.toString()} 
            onValueChange={handleCreditChange}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select credit amount" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">5 credits</SelectItem>
              <SelectItem value="10">10 credits</SelectItem>
              <SelectItem value="15">15 credits</SelectItem>
              <SelectItem value="20">20 credits</SelectItem>
              <SelectItem value="25">25 credits</SelectItem>
              <SelectItem value="30">30 credits</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <Button 
          onClick={handleSave} 
          disabled={!hasPendingChanges}
          className="mb-0.5 transition-all duration-200"
        >
          <Save className="h-4 w-4 mr-2" />
          Save
        </Button>
      </div>
    </div>
  );
}