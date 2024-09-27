"use client";

import * as React from "react";
import { format, setHours, setMinutes } from "date-fns";
import { Calendar as CalendarIcon, Clock as ClockIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Calendar } from "@/components/ui/Calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/Popover";
import { Input } from "@/components/ui/Input"; // Assuming you have an Input component

interface Props {
  children?: React.ReactNode;
  value?: Date;
  onChange?: (value: Date) => void;
}

const DateAndTimePicker: React.FC<Props> = ({ children, value, onChange }) => {
  const handleDateChange = (date: Date | undefined) => {
    if (!date) return;
    const newDate = value
      ? setHours(setMinutes(date, value.getMinutes()), value.getHours())
      : date;
    onChange?.(newDate);
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const [hours, minutes] = e.target.value.split(":").map(Number);
    if (value) {
      const newDate = setHours(setMinutes(value, minutes), hours);
      onChange?.(newDate);
    }
  };

  const formattedTime = value ? format(value, "HH:mm") : "12:00";

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant={"outline"}
          className={cn(
            "flex w-[280px] justify-start text-left font-normal",
            !value && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {value ? format(value, "PPP") : <span>Pick a date</span>}
          <ClockIcon className="ml-4 mr-2 h-4 w-4" />
          {formattedTime}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar mode="single" selected={value} onSelect={handleDateChange} />
        <div className="p-3">
          <label
            htmlFor="time"
            className="block text-sm font-medium text-gray-700"
          >
            Select Time
          </label>
          <Input
            type="time"
            id="time"
            value={formattedTime}
            onChange={handleTimeChange}
            className="mt-1 w-full flex justify-center"
          />
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default DateAndTimePicker;
