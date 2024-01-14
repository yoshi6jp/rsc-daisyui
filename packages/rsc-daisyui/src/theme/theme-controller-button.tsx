import { type ComponentProps, deriveClassed } from "@tw-classed/react";
import { classed } from "../classed.config";
import { Button } from "../button";
import type { ThemeType } from "./constants";

export const ThemeControllerButtonBase = classed(
  "input",
  "theme-controller",
  Button,
  { defaultProps: { name: "theme-buttons" } }
);
export type ThemeControllerButtonProps = Omit<
  ComponentProps<typeof ThemeControllerButtonBase>,
  "type"
> & {
  value: ThemeType;
};
export const ThemeControllerButton = deriveClassed<
  typeof ThemeControllerButtonBase,
  ThemeControllerButtonProps
>(({ value, ...rest }, ref) => {
  return (
    <ThemeControllerButtonBase ref={ref} value={value} {...rest} type="radio" />
  );
});
ThemeControllerButton.displayName = "ThemeControllerButton";
