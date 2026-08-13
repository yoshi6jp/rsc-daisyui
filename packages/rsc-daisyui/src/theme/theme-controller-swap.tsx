import { forwardRef } from "react";
import type { ComponentProps } from "@tw-classed/react";
import { Swap } from "../swap";
import type { ThemeTypeWithDefault } from "./constants";

export type ThemeControllerSwapProps = Omit<
  ComponentProps<typeof Swap>,
  "value"
> & {
  active: boolean;
  value: ThemeTypeWithDefault;
};

export const ThemeControllerSwap = forwardRef<
  HTMLLabelElement,
  ThemeControllerSwapProps
>(({ children, active, value, ...args }, ref) => {
  return (
    <Swap {...args} ref={ref}>
      <input
        checked={active}
        className="theme-controller"
        type="checkbox"
        value={value}
      />
      {children}
    </Swap>
  );
});
ThemeControllerSwap.displayName = "ThemeControllerSwap";
