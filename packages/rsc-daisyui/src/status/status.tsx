import { classed } from "../classed.config";
import { configWithThemeFn } from "../config";

export const Status = classed(
  "span",
  "status",
  configWithThemeFn({
    size: {
      xl: "status-xl",
      lg: "status-lg",
      md: "status-md",
      sm: "status-sm",
      xs: "status-xs",
    },
    color: {
      neutral: "status-neutral",
      primary: "status-primary",
      secondary: "status-secondary",
      accent: "status-accent",
      info: "status-info",
      success: "status-success",
      warning: "status-warning",
      error: "status-error",
    },
  })
);

Status.displayName = "Status";

export default Status;
