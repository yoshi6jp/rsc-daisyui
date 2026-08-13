import React, { forwardRef } from "react";
import type { ComponentProps } from "@tw-classed/react";
import { classed } from "../classed.config";
import { configWithThemeFn } from "../config";
import { TooltipContent } from "./tooltip-content";

type TooltipElement = React.ElementType;

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
      neutral: "tooltip-neutral",
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

export type TooltipProps = Omit<ComponentProps<typeof TooltipBase>, "as"> & {
  as?: TooltipElement | (string & {});
  render?: React.ReactNode;
  tip: string;
};

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  ({ children, render, tip, as, ...rest }, ref) => (
    <TooltipBase {...(rest as any)} as={as as any} data-tip={tip} ref={ref}>
      {render ?? children}
    </TooltipBase>
  ),
);

export default Object.assign(Tooltip, { Content: TooltipContent });
