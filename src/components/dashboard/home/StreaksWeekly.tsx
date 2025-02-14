"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, Rectangle, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { browser: "first", visitors: 7, fill: "var(--color-first)" },
  { browser: "second", visitors: 3, fill: "var(--color-second)" },
  { browser: "third", visitors: 4, fill: "var(--color-third)" },
  { browser: "fourth", visitors: 6, fill: "var(--color-fourth)" },
];

const chartConfig = {
  visitors: {
    label: "Streaks in a week:",
  },
  first: {
    label: "Week 1",
    color: "hsl(var(--chart-1))",
  },
  second: {
    label: "Week 2",
    color: "hsl(var(--chart-2))",
  },
  third: {
    label: "Week 3",
    color: "hsl(var(--chart-3))",
  },
  fourth: {
    label: "Week 4",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig;

export function StreaksWeekly() {
  return (
    <Card className="flex-grow basis-[180px]">
      <CardHeader>
        <CardTitle>Productive Days Weekly</CardTitle>
        <CardDescription>January 2025</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="browser"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <ChartTooltip
              cursor={true}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey="visitors"
              strokeWidth={2}
              radius={8}
              activeIndex={2}
              activeBar={({ ...props }) => {
                return (
                  <Rectangle
                    {...props}
                    fillOpacity={0.8}
                    stroke={props.payload.fill}
                    strokeDasharray={4}
                    strokeDashoffset={4}
                  />
                );
              }}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          The goal is to get as many streaks as possible each week. Missing a
          day or two is fine, what matters is overall progress.
        </div>
      </CardFooter>
    </Card>
  );
}
