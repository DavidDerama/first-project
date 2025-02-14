import { GoalWithDailyHabitsType } from "@/lib/schema";
import Image from "next/image";
import React from "react";

type DisplayGoalProps = {
  data: GoalWithDailyHabitsType;
};

export default function DisplayGoal({ data }: DisplayGoalProps) {
  const { title, habits, block_websites } = data;

  const displayDailyHabits = habits.map(({ title, id }) => {
    return (
      <div key={id}>
        <p className="text-light_paragraph dark:text-dark_heading">{title}</p>
      </div>
    );
  });

  const displayBlockedWebsites = block_websites.map(({ url, id }) => {
    return (
      <li
        className="text-accent_custom flex gap-2 py-3 px-3 border rounded-lg items-center"
        key={id}
      >
        <div className="flex justify-center items-center">
          <Image
            src={`https://www.google.com/s2/favicons?domain=${url}&sz=64`}
            alt="Favicon"
            height={25}
            width={25}
          />
        </div>
        <p>{url}</p>
      </li>
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
    </section>
  );
}
