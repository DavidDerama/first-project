"use client";
import React, { useState } from "react";
import DashboardMain from "@/components/dashboard/DashboardMain";
import CreateGoal from "@/components/dashboard/dream/CreateGoal";
import { GoalFormType, GoalWithDailyHabitsType } from "@/lib/schema";
import { generateDailyHabits } from "@/actions";
import DisplayGoal from "@/components/dashboard/dream/DisplayGoal";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function page() {
  const [goal, setGoal] = useState<GoalWithDailyHabitsType | null>(null);

  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: async (formData: GoalFormType) => {
      const { generatedGoal } = await generateDailyHabits(formData);
      setGoal(generatedGoal);
    },
    onSuccess: () => {
      toast.success("Goal generated");
    },
    onError: () => {
      toast.error("Server error");
    },
  });

  function clearAll() {
    setGoal(null);
  }

  return (
    <DashboardMain>
      <div className="flex flex-col gap-10">
        {goal ? (
          <DisplayGoal data={goal} clearAll={clearAll} />
        ) : (
          <CreateGoal onSubmit={mutate} isPending={isPending} />
        )}
      </div>
    </DashboardMain>
  );
}
