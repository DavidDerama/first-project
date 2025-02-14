import { Calendar } from "@/components/ui/calendar";
import { SidebarGroup, SidebarGroupContent } from "@/components/ui/sidebar";

export function DatePicker() {
  return (
    <SidebarGroup className="px-0">
      <SidebarGroupContent>
        <Calendar
          className="[&_[role=gridcell].bg-accent]:bg-accent_custom [&_[role=gridcell].bg-accent]:text-sidebar-primary-foreground [&_[role=gridcell]]:w-[33px] [&_[role=gridcell]]:rounded-full  select-none"
          classNames={{
            months:
              "w-full flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
            month: "w-full",
            head_row: "flex w-full mt-4",
            head_cell:
              "text-muted-foreground rounded-md w-full font-normal text-[0.8rem]",
            row: "flex w-full mt-2",
            cell: "w-full h-9 text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
            day: "h-8 w-9 p-0 font-normal aria-selected:opacity-100 hover:bg-accent hover:text-accent-foreground rounded-full mx-auto flex items-center justify-center",
            day_outside: "text-muted-foreground opacity-80",
          }}
        />
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
