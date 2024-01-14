import { classed } from "../classed.config";
import { configWithThemeFn } from "../config";
import { Button } from "../button";

export const SwapEffectConfig = {
  effect: {
    rotate: "swap-rotate",
    flip: "swap-flip",
  },
};

export const Swap = classed(
  "label",
  "swap",
  configWithThemeFn({
    ...SwapEffectConfig,
    active: {
      true: "swap-active",
    },
  })
);
Swap.displayName = "Swap";
const SwapOn = classed("div", "swap-on");
SwapOn.displayName = "SwapOn";
const SwapOff = classed("div", "swap-off");
SwapOff.displayName = "SwapOff";
const SwapIndeterminate = classed("div", "swap-indeterminate");
SwapIndeterminate.displayName = "SwapIndeterminate";
export const SwapButton = classed("label", Swap, Button);
SwapButton.displayName = "SwapButton";

export default Object.assign(Swap, {
  On: SwapOn,
  Off: SwapOff,
  Indeterminate: SwapIndeterminate,
  Button: SwapButton,
});
