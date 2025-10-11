import {
  type ComponentProps,
  deriveClassed,
  type DerivedComponentType,
} from "@tw-classed/react";
import { classed } from "../classed.config";
import { Button } from "../button";

const DrawerButtonBase = classed("label", "drawer-button", Button, {
  defaultProps: {
    role: "button",
  },
});
type DrawerButtonProps = ComponentProps<typeof DrawerButtonBase> & {
  drawerId: string;
};
export const DrawerButton: DerivedComponentType<
  typeof DrawerButtonBase,
  DrawerButtonProps
> = deriveClassed<typeof DrawerButtonBase, DrawerButtonProps>(
  ({ drawerId, ...rest }, ref) => {
    return <DrawerButtonBase {...rest} ref={ref} htmlFor={drawerId} />;
  }
);
DrawerButton.displayName = "DrawerButton";
