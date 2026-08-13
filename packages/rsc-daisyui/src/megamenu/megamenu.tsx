import type { ComponentProps } from "@tw-classed/react";
import { classed } from "../classed.config";
import { configWithThemeFn } from "../config";

export const MegamenuBase = classed(
  "div",
  "megamenu",
  configWithThemeFn({
    wide: {
      true: "megamenu-wide",
    },
    full: {
      true: "megamenu-full",
    },
    vertical: {
      true: "megamenu-vertical",
    },
    size: {
      xs: "megamenu-xs",
      sm: "megamenu-sm",
      md: "megamenu-md",
      lg: "megamenu-lg",
      xl: "megamenu-xl",
    },
  }),
);

type MegamenuProps = ComponentProps<typeof MegamenuBase>;

// Simple wrapper component
export const Megamenu = ({ children, ...rest }: MegamenuProps) => {
  return (
    <MegamenuBase {...rest}>
      <span className="megamenu-active" />
      {children}
    </MegamenuBase>
  );
};

Megamenu.displayName = "Megamenu";
