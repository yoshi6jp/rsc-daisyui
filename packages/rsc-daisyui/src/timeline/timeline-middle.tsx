import { type ComponentProps, deriveClassed } from "@tw-classed/react";
import { classed } from "../classed.config";

export const TimelineMiddleBase = classed("div", "timeline-middle");

export type TimelineMiddleProps = ComponentProps<typeof TimelineMiddleBase>;
export const TimelineMiddle = deriveClassed<
  typeof TimelineMiddleBase,
  TimelineMiddleProps
>(({ children, ...rest }, ref) => (
  <TimelineMiddleBase {...rest} ref={ref}>
    {children ? (
      children
    ) : (
      <svg
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          fillRule="evenodd"
        />
      </svg>
    )}
  </TimelineMiddleBase>
));
TimelineMiddle.displayName = "TimelineMiddle";
