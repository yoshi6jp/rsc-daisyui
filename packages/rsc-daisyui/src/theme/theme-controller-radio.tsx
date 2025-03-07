import { type ComponentProps, deriveClassed } from "@tw-classed/react";
import { classed } from "../classed.config";
import { Radio } from "../radio";
import type { ThemeTypeWithDefault } from "./constants";

export const ThemeControllerRadioBase = classed(
  "input",
  "theme-controller",
  Radio,
  {
    defaultProps: {
      name: "theme-buttons",
    },
  }
);
export type ThemeControllerRadioProps = Omit<
  ComponentProps<typeof ThemeControllerRadioBase>,
  "type"
> & {
  value: ThemeTypeWithDefault;
};
export const ThemeControllerRadio = deriveClassed<
  typeof ThemeControllerRadioBase,
  ThemeControllerRadioProps
>(({ value, ...rest }, ref) => {
  return (
    <ThemeControllerRadioBase ref={ref} value={value} {...rest} type="radio" />
  );
});
ThemeControllerRadio.displayName = "ThemeControllerRadio";
