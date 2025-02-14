"use client";
import React, { useState } from "react";
import DashboardMain from "@/components/dashboard/DashboardMain";
import CreateGoal from "@/components/dashboard/dream/CreateGoal";
import { GoalFormType, GoalWithDailyHabitsType } from "@/lib/schema";
import { generateDailyHabits } from "@/actions";
import DisplayGoal from "@/components/dashboard/dream/DisplayGoal";
import { useMutation } from "@tanstack/react-query";

export default function page() {
  const [goal, setGoal] = useState<GoalWithDailyHabitsType | null>(null);

  const { mutate, isPending } = useMutation({
    mutationFn: async (formData: GoalFormType) => {
      const { goals } = await generateDailyHabits(formData);
      setGoal(goals);
    },
  });

  return (
    <DashboardMain>
      <div className="flex flex-col gap-6">
        <CreateGoal onSubmit={mutate} isPending={isPending} />
        {goal && <DisplayGoal data={goal} />}
      </div>
    </DashboardMain>
  );
}
