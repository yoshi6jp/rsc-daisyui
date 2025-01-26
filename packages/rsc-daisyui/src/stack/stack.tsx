import { classed } from "../classed.config";

export const Stack = classed("div", "stack", {
  variants: {
    direction: {
      top: "stack-top",
      bottom: "stack-bottom",
      start: "stack-start",
      end: "stack-end",
    },
  },
});
Stack.displayName = "Stack";
