import type { FC, ComponentProps } from "react";
import { classed } from "../classed.config";
import { configWithThemeFn } from "../config";
import { CountdownItem } from "./countdown-item";

export const Countdown = classed("span", "countdown", configWithThemeFn({}));
Countdown.displayName = "Countdown";

export default Object.assign(Countdown, {
  Item: CountdownItem as FC<ComponentProps<typeof CountdownItem>>,
});
