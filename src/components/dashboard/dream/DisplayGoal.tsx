import { GoalWithDailyHabitsType } from "@/lib/schema";
import React from "react";
import SaveGoal from "./SaveGoal";

type DisplayGoalProps = {
  data: GoalWithDailyHabitsType;
  clearAll: () => void;
};

export default function DisplayGoal({ data, clearAll }: DisplayGoalProps) {
  const { title, habits, block_websites } = data;

  const displayDailyHabits = habits.map(({ title, id, description }) => {
    return (
      <div key={id} className="flex flex-col gap-1">
        <p className="text-light_paragraph dark:text-dark_heading font-bold">
          {title}
        </p>
        <p className="text-light_paragraph dark:text-dark_paragraph">
          {description}
        </p>
      </div>
    );
  });

  const displayBlockedWebsites = block_websites.map(({ url, id }) => {
    return (
      <li
        className="text-accent_custom flex gap-2 py-3 px-3 border rounded-lg items-center"
        key={id}
      >
        <p>{url}</p>
      </li>
    );
  });

  return (
    <section>
      <div>
        <h3 className="text-2xl font-bold mb-6">{title}</h3>
        <div className="flex flex-col gap-6">
          <div>
            <h4 className="text-xl font-bold mb-3">Daily Habits</h4>
            <div className="flex flex-col gap-4 max-w-[450px]">
              {displayDailyHabits}
            </div>
          </div>
          {block_websites.length ? (
            <div>
              <h4 className="text-xl font-bold mb-3">
                We recommend blocking these websites
              </h4>
              <ul className="flex flex-col gap-2 w-1/2">
                {displayBlockedWebsites}
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <SaveGoal clearAll={clearAll} />
    </section>
  );
}
