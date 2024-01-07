import { type ComponentProps, deriveClassed } from "@tw-classed/react";
import { classed } from "../classed.config";
import { configWithThemeFn } from "../config";
import { Button } from "../button";

export const SwapBase = classed(
  "label",
  "swap",
  configWithThemeFn({
    effect: {
      rotate: "swap-rotate",
      flip: "swap-flip",
    },
    active: {
      true: "swap-active",
    },
  })
);
const SwapOn = classed("div", "swap-on");
const SwapOff = classed("div", "swap-off");
const SwapIndeterminate = classed("div", "swap-indeterminate");
export const SwapButtonBase = classed("label", SwapBase, Button);

type ICustomProps = {
  checkbox?: boolean;
};
export type SwapProps = ComponentProps<typeof SwapBase> & ICustomProps;

function SwapCheckbox({ checkbox }: ICustomProps): JSX.Element | null {
  if (checkbox === false) {
    return null;
  }
  return <input type="checkbox" />;
}

export const Swap = deriveClassed<typeof SwapBase, SwapProps>(
  ({ checkbox, children, ...args }, ref) => {
    return (
      <SwapBase {...args} ref={ref}>
        <SwapCheckbox checkbox={checkbox} />
        {children}
      </SwapBase>
    );
  }
);
export type SwapButtonProps = ComponentProps<typeof SwapButtonBase> &
  ICustomProps;
export const SwapButton = deriveClassed<typeof SwapButtonBase, SwapButtonProps>(
  ({ checkbox, children, ...args }, ref) => {
    return (
      <SwapButtonBase {...args} ref={ref}>
        <SwapCheckbox checkbox={checkbox} />
        {children}
      </SwapButtonBase>
    );
  }
);
export default Object.assign(Swap, {
  On: SwapOn,
  Off: SwapOff,
  Indeterminate: SwapIndeterminate,
  Button: SwapButton,
});
