import { title } from "process";
import { z } from "zod";

export const goalFormSchema = z.object({
  title: z.string(),
});

export const generateDailyHabitsSchema = z.object({
  title: z
    .string()
    .describe(
      "A short, clear goal based on the user's description of their dream self. Maximum 8 words. Avoid multiple goals—focus on one specific outcome. Do not use 'and' or 'or'."
    ),
  habits: z.array(
    z.object({
      title: z
        .string()
        .describe(
          "A concise, actionable daily habit that directly supports the goal. It must be practical and repeatable every day, not weekly or sporadically."
        ),
    })
  ),
  block_websites: z.array(
    z.object({
      url: z
        .string()
        .url()
        .describe(
          "Recommend blocking 5-10 popular websites that distract from the user's goal (e.g., gambling sites for financial goals, or social media for productivity). Grab the most recent most popular websites and recommend those."
        ),
    })
  ),
});

export type GoalFormType = z.infer<typeof goalFormSchema>;

export type GoalWithDailyHabitsType = z.infer<typeof generateDailyHabitsSchema>;
