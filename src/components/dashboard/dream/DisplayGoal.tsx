import { GoalWithDailyHabitsType } from "@/lib/schema";
import React from "react";

type DisplayGoalProps = {
  data: GoalWithDailyHabitsType;
};

export default function DisplayGoal({ data }: DisplayGoalProps) {
  const { title, habits, block_websites } = data;

  const displayDailyHabits = habits.map(({ title }) => {
    return (
      <div>
        <p className="font-bold">{title}</p>
      </div>
    );
  });

  const displayBlockedWebsites = block_websites.map(({ url }) => {
    return (
      <div className="text-accent_custom">
        <p>{url}</p>
      </div>
    );
  });

  return (
    <section>
      <div>
        <h3 className="text-2xl font-bold mb-8">{title}</h3>
        <div className="flex flex-col gap-6">
          <div>
            <h4 className="text-xl font-bold mb-3">Daily Habits</h4>
            {displayDailyHabits}
          </div>
          <div>
            <h4 className="text-xl font-bold mb-3">
              We recommend blocking these websites
            </h4>
            {displayBlockedWebsites}
          </div>
        </div>
      </div>
    </section>
  );
}
