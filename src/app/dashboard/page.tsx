import DashboardMain from "./components/DashboardMain";
import { CurrentStreak } from "./components/home/CurrentStreak";
import { StreaksMonthly } from "./components/home/StreaksMonthly";

export default function Page() {
  return (
    <DashboardMain>
      <h2 className="text-4xl">Good Evening!</h2>
      <div className="flex gap-2 mt-8">
        <StreaksMonthly />
        <CurrentStreak />
      </div>
    </DashboardMain>
  );
}
