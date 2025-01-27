import type { FC, ComponentProps } from "react";
import { classed } from "../classed.config";
import { configWithThemeFn } from "../config";
import { TimelineEnd } from "./timeline-end";
import { TimelineMiddle } from "./timeline-middle";
import { TimelineStart } from "./timeline-start";

export const Timeline = classed(
  "ul",
  "timeline",
  configWithThemeFn({
    horizontal: {
      true: "timeline-horizontal",
    },
    vertical: {
      true: "timeline-vertical",
    },
    compact: {
      true: "timeline-compact",
    },
    snapIcon: {
      true: "timeline-snap-icon",
    },
  })
);
Timeline.displayName = "Timeline";

export default Object.assign(Timeline, {
  Start: TimelineStart,
  Middle: TimelineMiddle as FC<ComponentProps<typeof TimelineMiddle>>,
  End: TimelineEnd,
});
