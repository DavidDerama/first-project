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
      title: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="a good programmer / muscular / disciplined"
                  {...field}
                  className="resize-none h-80"
                />
              </FormControl>
              <FormDescription>
                Describe your dream self, and we'll create daily habits to help
                you achieve it. More details lead to better results!
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">
          {isPending ? "Generating..." : "Generate daily habits"}
        </Button>
      </form>
    </Form>
  );
}
