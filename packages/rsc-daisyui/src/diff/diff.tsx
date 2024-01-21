import type { ReactNode } from "react";
import { type ComponentProps, deriveClassed } from "@tw-classed/react";
import { classed } from "../classed.config";
import { configWithThemeFn, VanillaDefaultVariants } from "../config";

export const DiffBase = classed("div", "diff", {
  ...configWithThemeFn({
    vanilla: {
      false: "aspect-[16/9] rounded-btn",
    },
  }),
  ...VanillaDefaultVariants,
});

export type DiffProps = ComponentProps<typeof DiffBase> & {
  secondItem: ReactNode;
};

export const Diff = deriveClassed<typeof DiffBase, DiffProps>(
  ({ children, secondItem, ...rest }, ref) => {
    return (
      <DiffBase {...rest} ref={ref}>
        <div className="diff-item-1">{children}</div>
        <div className="diff-item-2">{secondItem}</div>
        <div className="diff-resizer" />
      </DiffBase>
    );
  }
);
