"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { useRouter } from "next/navigation";

type SaveGoalProps = {
  clearAll: () => void;
};

export default function saveGoal({ clearAll }: SaveGoalProps) {
  const router = useRouter();

  async function saveGoalToDatabase() {
    // router.refresh();
  }

  return (
    <div className="flex gap-3 mt-5">
      <Button onClick={clearAll}>Clear all</Button>
      <Button
        className="bg-accent_custom hover:bg-accent_custom text-light hover:text-light hover:opacity-65"
        onClick={saveGoalToDatabase}
      >
        Save Changes
      </Button>
    </div>
  );
}
