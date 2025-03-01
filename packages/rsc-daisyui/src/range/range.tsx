import { classed } from "../classed.config";
import { configWithThemeFn } from "../config";
import { RangeMeasure } from "./range-measure";

export const Range = classed("input", "range", {
  ...configWithThemeFn({
    color: {
      neutral: "range-neutral",
      primary: "range-primary",
      secondary: "range-secondary",
      accent: "range-accent",
      success: "range-success",
      warning: "range-warning",
      info: "range-info",
      error: "range-error",
    },
    size: {
      xl: "range-xl",
      lg: "range-lg",
      md: "range-md",
      sm: "range-sm",
      xs: "range-xs",
    },
  }),
  defaultProps: {
    type: "range",
  },
});

Range.displayName = "Range";

export default Object.assign(Range, { Measure: RangeMeasure });
