import { type ComponentProps, deriveClassed } from "@tw-classed/react";
import { classed } from "../classed.config";

const CountdownItemBase = classed("span");
type CountdownItemProps = Omit<
  ComponentProps<typeof CountdownItemBase>,
  "children"
> & {
  value: number;
};
export const CountdownItem = deriveClassed<
  typeof CountdownItemBase,
  CountdownItemProps
>(({ value, ...rest }, ref) => {
  const countdownValue = Math.min(99, Math.max(0, value));
  const countdownStyle: Record<string, number> = {
    ["--value"]: countdownValue,
  };
  return <CountdownItemBase {...rest} ref={ref} style={countdownStyle} />;
});
CountdownItem.displayName = "CountdownItem";
