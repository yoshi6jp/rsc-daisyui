import { type ComponentProps, deriveClassed } from "@tw-classed/react";
import { classed } from "../classed.config";
import { Toggle } from "../toggle/toggle";
import type { ThemeTypeWithDefault } from "./constants";
import { ThemeControllerCheckbox } from "./theme-controller-checkbox";
import { ThemeControllerRadio } from "./theme-controller-radio";
import { ThemeControllerSwap } from "./theme-controller-swap";
import { ThemeControllerButton } from "./theme-controller-button";

export const ThemeControllerBase = classed("input", Toggle, "theme-controller");
export type ThemeControllerProps = Omit<
  ComponentProps<typeof ThemeControllerBase>,
  "type"
> & {
  value: ThemeTypeWithDefault;
};
export const ThemeController = deriveClassed<
  typeof ThemeControllerBase,
  ThemeControllerProps
>(({ value, ...rest }, ref) => {
  return (
    <ThemeControllerBase ref={ref} value={value} {...rest} type="checkbox" />
  );
});
ThemeController.displayName = "ThemeController";

export default Object.assign(ThemeController, {
  Checkbox: ThemeControllerCheckbox,
  Radio: ThemeControllerRadio,
  Swap: ThemeControllerSwap,
  Button: ThemeControllerButton,
});
