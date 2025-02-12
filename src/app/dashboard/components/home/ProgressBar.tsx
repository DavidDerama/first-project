"use client";

import * as React from "react";

import { Progress } from "@/components/ui/progress";

export function ProgressBar({ value }: { value: number }) {
  return <Progress value={value} className="w-full h-4" />;
}
