import { classed } from "../classed.config";
import { configWithThemeFn } from "../config";

export const Skeleton = classed(
  "div",
  "skeleton",
  configWithThemeFn({
    text: {
      true: "skeleton-text",
    },
  })
);
Skeleton.displayName = "Skeleton";
