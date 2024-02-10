import { type ComponentProps, deriveClassed } from "@tw-classed/react";
import { classed } from "../classed.config";

export const RangeMeasureBase = classed(
  "div",
  "w-full flex justify-between text-xs px-2"
);
export type RangeMeasureProps = ComponentProps<typeof RangeMeasureBase> & {
  count: number;
};
export const RangeMeasure = deriveClassed<
  typeof RangeMeasureBase,
  RangeMeasureProps
>(({ count, ...rest }, ref) => {
  const length = Math.min(Math.max(2, Math.ceil(count)), 101);
  return (
    <RangeMeasureBase {...rest} ref={ref}>
      {Array.from({ length }).map((_, idx) => (
        <span key={idx}>|</span>
      ))}
    </RangeMeasureBase>
  );
});
RangeMeasure.displayName = "RangeMeasure";
