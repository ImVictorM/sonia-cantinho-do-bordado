import type { BusinessHourRange } from "../types/business";
import type { Phone } from "../types/contact";
import type { ClockTime } from "../types/time";

export function toDisplayPhone({ areaCode, number }: Phone) {
  return `(${areaCode}) ${number.slice(0, 5)}-${number.slice(5)}`;
}

function to24HourClock(time: ClockTime) {
  switch (time.period) {
    case "AM":
      return time.hour === 12 ? 0 : time.hour;
    case "PM":
      return time.hour >= 1 && time.hour < 12 ? time.hour + 12 : time.hour;
  }
}
export function toDisplayBusinessHours(hours: BusinessHourRange) {
  return `Das ${to24HourClock(hours.start)} às ${to24HourClock(hours.end)}`;
}
