import { classed } from "../classed.config";
import { configWithThemeFn } from "../config";

export const Join = classed(
  "div",
  "join",
  configWithThemeFn({
    vertical: {
      true: "join-vertical",
    },
    horizontal: {
      true: "join-horizontal",
    },
  })
);
Join.displayName = "Join";
