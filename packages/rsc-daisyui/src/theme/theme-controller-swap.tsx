import { type ComponentProps, deriveClassed } from "@tw-classed/react";
import { SwapBase } from "../swap/swap";
import type { ThemeType } from "./constants";

export type ThemeControllerSwapProps = Omit<
  ComponentProps<typeof SwapBase>,
  "value" | "active"
> & {
  value: ThemeType;
};

export const ThemeControllerSwap = deriveClassed<
  typeof SwapBase,
  ThemeControllerSwapProps
>(({ children, value, ...args }, ref) => {
  return (
    <SwapBase {...args} ref={ref}>
      <input className="theme-controller" type="checkbox" value={value} />
      {children}
    </SwapBase>
  );
});
