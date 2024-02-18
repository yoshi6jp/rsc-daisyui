import { classed } from "../classed.config";
import { configWithThemeFn } from "../config";
import { HeroContent } from "./hero-content";
import { HeroOverlay } from "./hero-overlay";

export const Hero = classed("div", "hero", configWithThemeFn({}));
Hero.displayName = "Hero";

export default Object.assign(Hero, {
  Content: HeroContent,
  Overlay: HeroOverlay,
});
