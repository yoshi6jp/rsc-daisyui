import { type ComponentProps, deriveClassed } from "@tw-classed/react";
import { classed } from "../classed.config";
import { Button } from "../button";

const DropdownButtonBase = classed("summary", "m-1", Button);
export type DropdownButtonProps = ComponentProps<typeof DropdownButtonBase>;

export const DropdownButton = deriveClassed<
  typeof DropdownButtonBase,
  DropdownButtonProps
>(({ children, ...rest }, ref) => {
  return (
    <DropdownButtonBase ref={ref} role="button" tabIndex={0} {...rest}>
      {children}
    </DropdownButtonBase>
  );
});
