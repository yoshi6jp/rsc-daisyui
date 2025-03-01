import { classed } from "../classed.config";

export const Step = classed("li", "step", {
  variants: {
    color: {
      neutral: "step-neutral",
      primary: "step-primary",
      secondary: "step-secondary",
      accent: "step-accent",
      info: "step-info",
      success: "step-success",
      warning: "step-warning",
      error: "step-error",
    },
  },
});
Step.displayName = "Step";

export const Icon = classed("span", "step-icon");
Icon.displayName = "StepIcon";
