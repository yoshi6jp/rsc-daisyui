import React from "react";
import { type ComponentProps, deriveClassed } from "@tw-classed/react";
import { classed } from "../classed.config";
import { configWithThemeFn } from "../config";
import { MenuItem } from "../menu/menu-item";
import { DropdownButton, DropdownAvatar } from "./dropdown-button";
import { DropdownMenu } from "./dropdown-menu";
import { DropdownCard } from "./dropdown-card";
import { DropdownPopover, commonVariants } from "./dropdown-popover";

export const DropdownBase = classed(
  "div",
  "dropdown",
  configWithThemeFn({
    ...commonVariants,
    open: {
      true: "dropdown-open",
    },
    hover: {
      true: "dropdown-hover",
    },
  })
);
export const DropdownDetails = classed(
  "details",
  "dropdown",
  configWithThemeFn(commonVariants)
);

type DropdownBaseProps = ComponentProps<typeof DropdownBase>;
export type DropdownProps = ComponentProps<typeof DropdownDetails> & {
  open?: boolean;
};

export const Dropdown = deriveClassed<typeof DropdownDetails, DropdownProps>(
  ({ children, open, ...rest }, ref) => {
    const as = rest.as as unknown as string | undefined;
    if (as === "details" || as === undefined) {
      return (
        <DropdownDetails {...rest} open={open} ref={ref}>
          {children}
        </DropdownDetails>
      );
    }
    return (
      <DropdownBase
        {...(rest as unknown as DropdownBaseProps)}
        open={open}
        ref={ref as unknown as React.ForwardedRef<HTMLDivElement>}
      >
        {children}
      </DropdownBase>
    );
  }
);
Dropdown.displayName = "Dropdown";
export default Object.assign(Dropdown, {
  Button: DropdownButton,
  Menu: DropdownMenu,
  Item: MenuItem,
  Card: DropdownCard,
  Avatar: DropdownAvatar,
  Popover: DropdownPopover,
});
