import DashboardMain from "./components/DashboardMain";
import { StreaksWeekly } from "./components/home/StreaksWeekly";
import { CurrentStreak } from "./components/home/CurrentStreak";

export default function Page() {
  return (
    <DashboardMain>
      <h2 className="text-4xl">Overview</h2>
      <div className="flex gap-2 mt-8 flex-wrap">
        <StreaksWeekly />
        <CurrentStreak />
      </div>
    </DashboardMain>
  );
}
