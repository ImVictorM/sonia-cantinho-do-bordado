import { weeklyBusinessHours } from "@/common/data/settings";
import type { WithClassName } from "@/common/types/extension";
import { toDisplayBusinessHours } from "@/common/utils/displayUtils";

export default function BusinessHours({ className = "" }: WithClassName) {
  return (
    <div className={`${className} `}>
      <p>{`Seg a sex: ${toDisplayBusinessHours(weeklyBusinessHours.weekdays)}`}</p>

      {weeklyBusinessHours.weekends.saturday && (
        <p>{`Sáb: ${toDisplayBusinessHours(weeklyBusinessHours.weekends.saturday)}`}</p>
      )}
      {weeklyBusinessHours.weekends.sunday && (
        <p>{`Dom: ${toDisplayBusinessHours(weeklyBusinessHours.weekends.sunday)}`}</p>
      )}
    </div>
  );
}
