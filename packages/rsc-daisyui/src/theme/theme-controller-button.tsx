import { forwardRef } from "react";
import type { ComponentProps } from "@tw-classed/react";
import { classed } from "../classed.config";
import { Button } from "../button";
import type { ThemeTypeWithDefault } from "./constants";

export const ThemeControllerButtonBase = classed(
  "input",
  "theme-controller",
  Button,
  { defaultProps: { name: "theme-buttons" } },
);
export type ThemeControllerButtonProps = Omit<
  ComponentProps<typeof ThemeControllerButtonBase>,
  "type"
> & {
  type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
  value: ThemeTypeWithDefault;
};
export const ThemeControllerButton = forwardRef<
  HTMLInputElement,
  ThemeControllerButtonProps
>(({ value, ...rest }, ref) => {
  return (
    <ThemeControllerButtonBase ref={ref} value={value} {...rest} type="radio" />
  );
});
ThemeControllerButton.displayName = "ThemeControllerButton";
