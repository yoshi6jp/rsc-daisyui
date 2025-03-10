import { classed } from "../classed.config";
import { configWithThemeFn } from "../config";

export const Kbd = classed(
  "kbd",
  "kbd",
  configWithThemeFn({
    size: {
      xl: "kbd-xl",
      lg: "kbd-lg",
      md: "kbd-md",
      sm: "kbd-sm",
      xs: "kbd-xs",
    },
  })
);
