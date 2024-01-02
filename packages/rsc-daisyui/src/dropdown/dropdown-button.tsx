import type { ComponentProps } from "react";
import { classed, deriveClassed } from "@tw-classed/react";
import { buttonConfig } from "../button/button";

const DropdownButtonBase = classed("summary", {
  ...buttonConfig,
  base: "btn m-1",
});
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
