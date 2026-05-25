import type { ClockTime } from "./time";

export type Brand = {
  name: string;
  tagline: string;
};

export type BusinessHourRange = {
  start: ClockTime;
  end: ClockTime;
};

export type WeeklyBusinessHours = {
  weekdays: BusinessHourRange;
  weekends: {
    saturday: BusinessHourRange | null;
    sunday: BusinessHourRange | null;
  };
};
