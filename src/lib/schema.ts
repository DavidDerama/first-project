import { z } from "zod";

export const goalFormSchema = z.object({
  description: z
    .string()
    .min(5, "Description must be at least 5 characters long."),
});

export const generateDailyHabitsSchema = z.object({
  title: z
    .string()
    .describe(
      "A short, clear goal based on the user's description of their dream self. Maximum 8 words. Avoid multiple goals—focus on one specific outcome. Do not use 'and' or 'or'."
    ),
  habits: z.array(
    z.object({
      id: z.string().uuid(),
      title: z
        .string()
        .describe(
          "A concise, actionable daily habit that directly supports the goal. It must be practical and repeatable every day, not weekly or sporadically."
        ),
    })
  ),
  block_websites: z.array(
    z.object({
      id: z.string().uuid(),
      url: z
        .string()
        .describe(
          "Only recommend blocking 5-10 websites (by hostname and top-level domain, no pathnames or slashes) if and only if the user explicitly or implicitly states they waste time on them or if the problem they describe is directly tied to these sites. Do not assume or suggest generic distractions like social media unless the user specifically mentions them as an issue."
        ),
    })
  ),
});

export type GoalFormType = z.infer<typeof goalFormSchema>;

export type GoalWithDailyHabitsType = z.infer<typeof generateDailyHabitsSchema>;
