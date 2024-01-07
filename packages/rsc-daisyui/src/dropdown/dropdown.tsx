import { type ComponentProps, deriveClassed } from "@tw-classed/react";
import { classed } from "../classed.config";
import { configWithThemeFn } from "../config";
import { MenuItem } from "../menu/menu-item";
import { DropdownButton } from "./dropdown-button";
import { DropdownMenu } from "./dropdown-menu";
import { DropdownCard } from "./dropdown-card";

const commonVariants = {
  horizontal: {
    left: "dropdown-left",
    right: "dropdown-right",
  },
  vertical: {
    top: "dropdown-top",
    bottom: "dropdown-bottom",
  },
  hover: {
    true: "dropdown-hover",
  },
  end: {
    true: "dropdown-end",
  },
};

export const DropdownBase = classed(
  "div",
  "dropdown",
  configWithThemeFn({
    ...commonVariants,
    open: {
      true: "dropdown-open",
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

const Dropdown = deriveClassed<typeof DropdownDetails, DropdownProps>(
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

export default Object.assign(Dropdown, {
  Button: DropdownButton,
  Menu: DropdownMenu,
  Item: MenuItem,
  Card: DropdownCard,
});
