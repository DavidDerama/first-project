import DashboardMain from "./components/DashboardMain";
import { StreaksWeekly } from "./components/home/StreaksWeekly";
import { CurrentStreak } from "./components/sidebar/ProductiveDays";
import GoalsStats from "./components/GoalsStats";

export default function Page() {
  return (
    <DashboardMain>
      <GoalsStats />
    </DashboardMain>
  );
}
