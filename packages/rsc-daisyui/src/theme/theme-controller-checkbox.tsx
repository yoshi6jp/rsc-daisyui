import { type ComponentProps, deriveClassed } from "@tw-classed/react";
import { classed } from "../classed.config";
import { Checkbox } from "../checkbox";
import type { ThemeTypeWithDefault } from "./constants";

export const ThemeControllerCheckboxBase = classed(
  "input",
  "theme-controller",
  Checkbox
);
export type ThemeControllerCheckboxProps = Omit<
  ComponentProps<typeof ThemeControllerCheckboxBase>,
  "type"
> & {
  value: ThemeTypeWithDefault;
};
export const ThemeControllerCheckbox = deriveClassed<
  typeof ThemeControllerCheckboxBase,
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
