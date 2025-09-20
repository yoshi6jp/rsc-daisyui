import { classed } from "../classed.config";
import { configWithThemeFn } from "../config";

export const HoverGallery = classed(
  "figure",
  "hover-gallery",
  configWithThemeFn({})
);
HoverGallery.displayName = "HoverGallery";
