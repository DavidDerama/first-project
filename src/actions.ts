"use server";

import { supabaseServer } from "./lib/supabase/server";
import { revalidatePath } from "next/cache";

import { generateObject } from "ai";
import { openai } from "@ai-sdk/openai";
import { z } from "zod";

import { generateDailyHabitsSchema, GoalFormType } from "./lib/schema";

export async function generateDailyHabits(formData: GoalFormType) {
  const { description } = formData;

  const { object: generatedGoal } = await generateObject({
    model: openai("gpt-4o"),
    system:
      "You’re my self-improvement AI, helping me come up with daily habits based on my goal. I want the advice to feel like it’s coming from someone who’s been there, like a Redditor who knows what works—not all that generic self-help fluff. Give me 1-3 habits that are impactful for the goal I give you, depending on how complex it is. Keep it actionable and realistic, **make sure they’re stuff I can do every day**—not once a week or every now and then. Throw in some real-life tips, psychology, or just good advice that actually works. Keep the tone chill, a little informal, but not too polished—just like someone who's been through the grind and knows how to make it work.",
    prompt: description,
    schema: generateDailyHabitsSchema,
    temperature: 1.1,
    presencePenalty: 0.5,
  });

  return { generatedGoal };
}
