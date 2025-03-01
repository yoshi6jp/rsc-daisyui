import { classed } from "../classed.config";
import { configWithThemeFn } from "../config";

export const Progress = classed(
  "progress",
  "progress",
  configWithThemeFn({
    color: {
      neutral: "progress-neutral",
      primary: "progress-primary",
      secondary: "progress-secondary",
      accent: "progress-accent",
      info: "progress-info",
      success: "progress-success",
      warning: "progress-warning",
      error: "progress-error",
    },
  })
);
Progress.displayName = "Progress";
