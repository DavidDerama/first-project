"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { GoalFormType, goalFormSchema } from "@/lib/schema";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

type GoalFormProps = {
  onSubmit: (formdata: GoalFormType) => void;
  isPending: boolean;
};

export function GoalForm({ onSubmit, isPending }: GoalFormProps) {
  const form = useForm<GoalFormType>({
    resolver: zodResolver(goalFormSchema),
    defaultValues: {
      description: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Describe your dream self, and we’ll suggest daily habits to get you started. The more details, the better!"
                  {...field}
                  className="resize-none h-80"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending}>
          {isPending ? "Generating..." : "Generate daily habits"}
        </Button>
      </form>
    </Form>
  );
}
