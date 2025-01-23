import { Bot, ChartArea, Clock, Sparkles, Users } from "lucide-react";
import React, { JSX } from "react";

type Feature = {
  id: number;
  name: string;
  description: string;
  icon: JSX.Element;
};

const iconSize = 30;

const FeaturesData: Feature[] = [
  {
    id: 1,
    name: "Easy to Use",
    description:
      "Unlike other habit trackers with complex systems and steep learning curves, our website is built for simplicity.",
    icon: <Sparkles size={iconSize} />,
  },
  {
    id: 2,
    name: "Time Management",
    description:
      "By blocking websites at bedtime and showing your completed tasks, you feel accomplished and excited for the next day, making sleeping early easier.",
    icon: <Clock size={iconSize} />,
  },
  {
    id: 3,
    name: "Habit Tracking",
    description:
      "Forget the fake rewards and empty progress on your screen. Complete tasks, level up; miss them, level down.",
    icon: <ChartArea size={iconSize} />,
  },
  {
    id: 4,
    name: "AI Assistance",
    description:
      "Our AI recommends daily tasks and blocks websites based on your goals. For example, if your goal is to be financially responsible, it may recommend blocking gambling sites to help you stay on track.",
    icon: <Bot size={iconSize} />,
  },
  {
    id: 5,
    name: "Community",
    description:
      "Meet others on the same journey! Share your progress, ask for advice, and get valuable feedback as you work towards your goals.",
    icon: <Users size={iconSize} />,
  },
];

export default function Features() {
  return (
    <div>
      <div className="mt-8 flex flex-wrap gap-2">
        {FeaturesData.map((feature) => {
          return (
            <div
              key={feature.id}
              className="flex-grow basis-[350px] border-2 dark:border-dark_input_border rounded-lg p-4 bg-white/95 dark:bg-dark_input_bg"
            >
              <div
                className="mb-2 w-fit rounded-lg bg-accent_custom p-1 text-center text-light
              "
              >
                {feature.icon}
              </div>
              <p className="text-lg mb-1 font-semibold w-full ">
                {feature.name}
              </p>
              <p className="font-regular w-full ">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
