import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProgressBar } from "./home/ProgressBar";
import { Dumbbell, GraduationCap, Laptop } from "lucide-react";

const items = [
  {
    title: "Become a better coder",
    progress: 60,
    icon: Laptop,
  },
  {
    title: "Become fit",
    progress: 40,
    icon: Dumbbell,
  },
  {
    title: "Become fluent in Finnish",
    progress: 30,
    icon: GraduationCap,
  },
];

const goalsEl = items.map((item) => {
  return (
    <Card className="flex-grow basis-52">
      <CardHeader>
        <div className="flex flex-col gap-3">
          <item.icon size={30} />
          <CardTitle className="text-xl text-normal text-light_heading dark:text-dark_heading">
            {item.title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="font-bold text-5xl text-light_heading dark:text-dark_heading">
          {item.progress}%
        </p>
      </CardContent>
      <CardFooter>
        <ProgressBar value={item.progress} />
      </CardFooter>
    </Card>
  );
});

export default function GoalsStats() {
  return (
    <section className="py-2 px-3">
      <h2 className="text-4xl font-bold">My Goals</h2>
      <div className="flex gap-2 mt-8 flex-wrap">
        <div className="flex gap-2 w-full flex-wrap">{goalsEl}</div>
      </div>
    </section>
  );
}
