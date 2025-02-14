import { GoalFormType, GoalWithDailyHabitsType } from "@/lib/schema";
import { GoalForm } from "./GoalForm";

type CreateGoalProps = {
  onSubmit: (formData: GoalFormType) => void;
  isPending: boolean;
};

export default function CreateGoal({ onSubmit, isPending }: CreateGoalProps) {
  return (
    <section>
      <div className="flex justify-center items-center">
        <h2 className="text-4xl font-bold mb-8">My dream self is....</h2>
      </div>
      <GoalForm onSubmit={onSubmit} isPending={isPending} />
    </section>
  );
}
