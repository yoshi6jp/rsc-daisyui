import { forwardRef } from "react";
import type { ComponentProps } from "@tw-classed/react";
import { classed } from "../classed.config";
import { Checkbox } from "../checkbox";
import type { ThemeTypeWithDefault } from "./constants";

export const ThemeControllerCheckboxBase = classed(
  "input",
  "theme-controller",
  Checkbox,
);
export type ThemeControllerCheckboxProps = Omit<
  ComponentProps<typeof ThemeControllerCheckboxBase>,
  "type"
> & {
  type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
  value: ThemeTypeWithDefault;
};
export const ThemeControllerCheckbox = forwardRef<
  HTMLInputElement,
  ThemeControllerCheckboxProps
>(({ value, ...rest }, ref) => {
  return (
    <ThemeControllerCheckboxBase
      ref={ref}
      value={value}
      {...rest}
      type="checkbox"
    />
  );
});
ThemeControllerCheckbox.displayName = "ThemeControllerCheckbox";
