import { classed } from "../classed.config";

export const TimelineStart = classed("div", "timeline-start", {
  variants: {
    box: {
      true: "timeline-box",
    },
  },
});
TimelineStart.displayName = "TimelineStart";
