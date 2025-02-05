"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

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
  { month: "January", mobile: 186, desktop: 80 },
  { month: "February", mobile: 305, desktop: 200 },
  { month: "March", mobile: 237, desktop: 120 },
  { month: "April", mobile: 73, desktop: 190 },
  { month: "May", mobile: 209, desktop: 130 },
  { month: "June", mobile: 214, desktop: 140 },
  { month: "June", mobile: 214, desktop: 140 },
];

const chartConfig = {
  desktop: {
    label: "Missed Days",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Streaks",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function StreaksMonthly() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Streaks</CardTitle>
        <CardDescription>January - June 2025</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          The goal is to get as many streaks in a month as possible.
        </div>
      </CardFooter>
    </Card>
  );
}
