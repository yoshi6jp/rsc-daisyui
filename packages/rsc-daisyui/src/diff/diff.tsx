import type { ReactNode } from "react";
import { type ComponentProps, deriveClassed } from "@tw-classed/react";
import { classed } from "../classed.config";
import { configWithThemeFn, VanillaDefaultVariants } from "../config";

const DiffItem1 = classed("div", "diff-item-1");
DiffItem1.displayName = "DiffItem1";
const DiffItem2 = classed("div", "diff-item-2");
DiffItem2.displayName = "DiffItem2";

export const DiffBase = classed("div", "diff", {
  ...configWithThemeFn({
    vanilla: {
      false: "aspect-[16/9] rounded-btn",
    },
  }),
  ...VanillaDefaultVariants,
});

export type DiffProps = ComponentProps<typeof DiffBase> & {
  secondItem?: ReactNode;
  secondChild?: ReactNode;
};

export const Diff = deriveClassed<typeof DiffBase, DiffProps>(
  ({ children, secondItem, secondChild, ...rest }, ref) => {
    if (secondChild) {
      return (
        <DiffBase {...rest} ref={ref}>
          {children}
          {secondChild}
          <div className="diff-resizer" />
        </DiffBase>
      );
    }
    return (
      <DiffBase {...rest} ref={ref}>
        <DiffItem1>{children}</DiffItem1>
        <DiffItem2>{secondItem}</DiffItem2>
        <div className="diff-resizer" />
      </DiffBase>
    );
  }
);
Diff.displayName = "Diff";
export default Object.assign(Diff, {
  Item1: DiffItem1,
  Item2: DiffItem2,
});
