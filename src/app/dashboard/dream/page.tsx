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

  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: async (formData: GoalFormType) => {
      setGoal(null);
      const { generatedGoal } = await generateDailyHabits(formData);
      setGoal(generatedGoal);
    },
  });

  return (
    <DashboardMain>
      <div className="flex flex-col gap-10">
        {!isSuccess && <CreateGoal onSubmit={mutate} isPending={isPending} />}
        {goal && <DisplayGoal data={goal} />}
      </div>
    </DashboardMain>
  );
}
