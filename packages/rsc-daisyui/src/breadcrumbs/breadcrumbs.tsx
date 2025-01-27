import {
  deriveClassed,
  type ComponentProps,
  type DerivedComponentType,
} from "@tw-classed/react";
import { classed } from "../classed.config";
import { configWithThemeFn, VanillaDefaultVariants } from "../config";

export const BreadcrumbsBase = classed("div", "breadcrumbs", {
  ...configWithThemeFn({
    vanilla: {
      false: "text-sm",
    },
  }),
  ...VanillaDefaultVariants,
});
type BreadcrumbsProps = ComponentProps<typeof BreadcrumbsBase>;
export const Breadcrumbs: DerivedComponentType<
  typeof BreadcrumbsBase,
  BreadcrumbsProps
> = deriveClassed<typeof BreadcrumbsBase, BreadcrumbsProps>(
  ({ children, ...rest }, ref) => {
    return (
      <BreadcrumbsBase {...rest} ref={ref}>
        <ul>{children}</ul>
      </BreadcrumbsBase>
    );
  }
);
Breadcrumbs.displayName = "Breadcrumbs";
