"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { GoalFormType, goalFormSchema } from "@/lib/schema";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { LoaderCircle, MoveRight } from "lucide-react";
import { twMerge } from "tailwind-merge";

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
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 flex flex-col border-2 border-input rounded-md pb-4"
      >
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Describe your dream self, and we’ll suggest daily habits to get you started. The more details, the better!"
                  {...field}
                  className="resize-none h-40"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      form.handleSubmit(onSubmit)();
                      console.log("TEST");
                    }
                  }}
                  disabled={isPending}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={isPending}
          className=" rounded-full bg-black text-light ml-auto mr-3 hover:bg-black hover:text-light hover:opacity-65"
        >
          {isPending ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={"animate-spin"}
            >
              <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            </svg>
          ) : (
            <MoveRight size={30} />
          )}
        </Button>
      </form>
    </Form>
  );
}
