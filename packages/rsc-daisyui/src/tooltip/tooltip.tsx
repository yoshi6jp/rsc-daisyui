import { type ComponentProps, deriveClassed } from "@tw-classed/react";
import { classed } from "../classed.config";
import { configWithThemeFn } from "../config";

export const TooltipBase = classed("div", {
  ...configWithThemeFn({
    disabled: {
      false: "tooltip",
    },
    open: {
      true: "tooltip-open",
    },
    position: {
      top: "tooltip-top",
      bottom: "tooltip-bottom",
      left: "tooltip-left",
      right: "tooltip-right",
    },
    color: {
      primary: "tooltip-primary",
      secondary: "tooltip-secondary",
      accent: "tooltip-accent",
      info: "tooltip-info",
      success: "tooltip-success",
      warning: "tooltip-warning",
      error: "tooltip-error",
    },
  }),
  defaultVariants: {
    disabled: false,
  },
});

export type TooltipProps = ComponentProps<typeof TooltipBase> & {
  tip: string;
};

export const Tooltip = deriveClassed<typeof TooltipBase, TooltipProps>(
  ({ children, tip, ...rest }, ref) => (
    <TooltipBase {...rest} data-tip={tip} ref={ref}>
      {children}
    </TooltipBase>
  )
);
