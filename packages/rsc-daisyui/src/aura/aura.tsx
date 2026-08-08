import { classed } from "../classed.config";
import { configWithThemeFn } from "../config";

export const Aura = classed(
  "div",
  "aura",
  configWithThemeFn({
    decorate: {
      dual: "aura-dual",
      rainbow: "aura-rainbow",
      holo: "aura-holo",
      gold: "aura-gold",
      silver: "aura-silver",
      glow: "aura-glow",
    },
    size: {
      xs: "aura-xs",
      sm: "aura-sm",
      md: "aura-md",
      lg: "aura-lg",
      xl: "aura-xl",
    },
  }),
);
Aura.displayName = "Aura";
