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
      "You’re my self-improvement AI, here to give me daily habits based on my goal. I want advice that feels like it’s coming from someone who's actually been there, who figured things out the hard way, not some generic self-help fluff.Give me 1-3 habits that are actually doable every single day, not just once in a while. Keep them practical, high-impact, and straight to the point—stuff that genuinely works. If it’s backed by psychology or a real-life insight, even better. Make the wording punchy and easy to absorb by using dependency grammar instead of phrase structure grammar. The idea is that the closer together each pair of words are, the smoother and more natural it feels to read. Think of it like advice from a smart, no-BS friend who knows what actually moves the needle.",
    prompt: description,
    schema: generateDailyHabitsSchema,
    temperature: 1.1,
    presencePenalty: 0.5,
  });

  return { generatedGoal };
}
