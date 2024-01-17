import { classed } from "../classed.config";

export const Mask = classed("img", "mask", {
  variants: {
    shape: {
      squircle: "mask-squircle",
      heart: "mask-heart",
      hexagon: "mask-hexagon",
      "hexagon-2": "mask-hexagon-2",
      decagon: "mask-decagon",
      pentagon: "mask-pentagon",
      diamond: "mask-diamond",
      square: "mask-square",
      circle: "mask-circle",
      parallelogram: "mask-parallelogram",
      "parallelogram-2": "mask-parallelogram-2",
      "parallelogram-3": "mask-parallelogram-3",
      "parallelogram-4": "mask-parallelogram-4",
      star: "mask-star",
      "star-2": "mask-star-2",
      triangle: "mask-triangle",
      "triangle-2": "mask-triangle-2",
      "triangle-3": "mask-triangle-3",
      "triangle-4": "mask-triangle-4",
      "half-1": "mask-half-1",
      "half-2": "mask-half-2",
    },
  },
});
Mask.displayName = "Mask";
