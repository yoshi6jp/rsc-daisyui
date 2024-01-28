import { classed } from "../classed.config";

export const TimelineEnd = classed("div", "timeline-end", {
  variants: {
    box: {
      true: "timeline-box",
    },
  },
  defaultVariants: {
    box: true,
  },
});
TimelineEnd.displayName = "TimelineEnd";
