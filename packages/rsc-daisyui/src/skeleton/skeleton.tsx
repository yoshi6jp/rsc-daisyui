import { classed } from "../classed.config";
import { configWithThemeFn } from "../config";

export const Skeleton = classed("div", "skeleton", configWithThemeFn({}));
Skeleton.displayName = "Skeleton";
