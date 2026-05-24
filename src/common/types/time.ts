export type Meridiem = "AM" | "PM";

export type ClockTime = {
  hour: number;
  period: Meridiem;
};
