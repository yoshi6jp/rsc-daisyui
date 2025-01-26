import type { ReactNode } from "react";
import { type ComponentProps, deriveClassed } from "@tw-classed/react";
import { classed } from "../classed.config";
import { times } from "../utils";

export const RangeMeasureBase = classed(
  "div",
  "flex justify-between px-2.5 mt-2 text-xs"
);
export type RangeMeasureProps = ComponentProps<typeof RangeMeasureBase> & {
  count: number;
  formatter?: (index: number) => ReactNode;
};
export const RangeMeasure = deriveClassed<
  typeof RangeMeasureBase,
  RangeMeasureProps
>(({ count, formatter, ...rest }, ref) => {
  const length = Math.min(Math.max(2, Math.floor(count)), 101);
  return (
    <RangeMeasureBase {...rest} ref={ref}>
      {times(length).map((idx) => (
        <span key={idx}>{formatter ? formatter(idx) : "|"}</span>
      ))}
    </RangeMeasureBase>
  );
});
RangeMeasure.displayName = "RangeMeasure";
