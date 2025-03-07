import type { Variant } from "@tw-classed/core";

export const ThemeList = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
  "dim",
  "nord",
  "sunset",
  "caramellatte",
  "abyss",
  "silk",
] as const;
export type ThemeType = (typeof ThemeList)[number];
export type ThemeTypeWithDefault = ThemeType | "default";
export const ThemeVariants: Variant = ThemeList.reduce(
  (result, item) => ({ ...result, [item]: item }),
  {}
);
