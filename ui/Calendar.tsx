"use client";

import * as React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { DayPicker } from "react-day-picker";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={className && className + " p-3"}
      classNames={{
        months:
          "text-black dark:text-white flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4 text-black dark:text-white",
        caption: "flex justify-between pl-2 relative items-center mt-1.5",
        caption_label: "text-md font-bold",
        nav: "space-x-1 flex items-center",
        nav_button:
          "bg-transparent !p-2 transform-x-[8px] rounded-md opacity-60 hover:opacity-100 hover:bg-neutral-900 hover:dark:bg-neutral-600 hover:bg-opacity-10",
        nav_button_previous: "",
        nav_button_next: "",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-neutral-500 rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-neutral-200/50 [&:has([aria-selected])]:bg-neutral-200 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: "h-9 w-9 p-0  transition-all rounded-md flex justify-center items-center font-normal aria-selected:opacity-100",
        day_range_end:
          "dark:text-black text-black dark:bg-neutral-200 bg-neutral-300 rounded-none rounded-r-md",
        day_range_start:
          "day-range-start dark:text-black text-black dark:bg-neutral-200 bg-neutral-300 rounded-none rounded-l-md",
        day_range_middle:
          "!bg-neutral-600 dark:!bg-neutral-400 rounded-none day-range-middle",
        day_selected:
          "bg-neutral-800 dark:bg-neutral-200 rounded-md text-white dark:text-black hover:bg-opacity-95 hover:dark:bg-neutral-300 cursor-pointer focus:bg-neutral-900 focus:text-neutral-200",
        day_today:
          "border rounded-md border-neutral-600 dark:border-neutral-500",
        day_outside:
          "day-outside rounded-md text-neutral-500 opacity-50 aria-selected:bg-neutral-200/50 aria-selected:text-neutral-500 aria-selected:opacity-30",
        day_disabled: "rounded-md text-neutral-500 opacity-50",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: () => <FaChevronLeft className="h-4 w-4" />,
        IconRight: () => <FaChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  );
}

export default Calendar;
