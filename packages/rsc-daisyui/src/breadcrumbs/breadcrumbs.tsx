import { forwardRef } from "react";
import type { ComponentProps } from "@tw-classed/react";
import { classed } from "../classed.config";
import { configWithThemeFn, VanillaDefaultVariants } from "../config";

export type BreadcrumbsComponent = React.ForwardRefExoticComponent<
  BreadcrumbsProps & React.RefAttributes<HTMLDivElement>
>;

export const BreadcrumbsBase = classed("div", "breadcrumbs", {
  ...configWithThemeFn({
    vanilla: {
      false: "text-sm",
    },
  }),
  ...VanillaDefaultVariants,
});
type BreadcrumbsProps = ComponentProps<typeof BreadcrumbsBase>;
export const Breadcrumbs: BreadcrumbsComponent = forwardRef<
  HTMLDivElement,
  BreadcrumbsProps
>(({ children, ...rest }, ref) => {
  return (
    <BreadcrumbsBase {...rest} ref={ref}>
      <ul>{children}</ul>
    </BreadcrumbsBase>
  );
});
Breadcrumbs.displayName = "Breadcrumbs";
