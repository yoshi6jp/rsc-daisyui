import { classed } from "@tw-classed/react";
import { configWithThemeFn } from "../config";
import { textColorVariant } from "../color";

export const loadingConfig = {
  ...configWithThemeFn({
    size: {
      lg: "loading-lg",
      md: "loading-md",
      sm: "loading-sm",
      xs: "loading-xs",
    },
    variant: {
      spinner: "loading-spinner",
      dots: "loading-dots",
      ring: "loading-ring",
      ball: "loading-ball",
      bars: "loading-bars",
      infinity: "loading-infinity",
    },
    ...textColorVariant,
  }),
  base: "loading",
};

export const Loading = classed("span", loadingConfig);