import React, { forwardRef } from "react";
import type { ComponentProps } from "@tw-classed/react";
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
  }),
);
export const DropdownDetails = classed(
  "details",
  "dropdown",
  configWithThemeFn(commonVariants),
);

type DropdownBaseProps = Omit<ComponentProps<typeof DropdownBase>, "as">;
export type DropdownProps = Omit<
  ComponentProps<typeof DropdownDetails>,
  "as"
> & {
  as?: "details" | "div" | (string & {});
  open?: boolean;
};

export const Dropdown = forwardRef<HTMLElement, DropdownProps>(
  ({ children, open, as, ...rest }, ref) => {
    const useDetails = as === "details" || as === undefined;
    if (useDetails) {
      return (
        <DropdownDetails
          {...(rest as any)}
          as={as ?? ("details" as any)}
          open={open}
          ref={ref as React.ForwardedRef<HTMLDetailsElement>}
        >
          {children}
        </DropdownDetails>
      );
    }
    return (
      <DropdownBase
        {...(rest as any)}
        as={as as any}
        open={open}
        ref={ref as unknown as React.ForwardedRef<HTMLDivElement>}
      >
        {children}
      </DropdownBase>
    );
  },
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
