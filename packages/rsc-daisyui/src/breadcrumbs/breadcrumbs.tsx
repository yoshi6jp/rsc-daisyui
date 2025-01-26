import type { FC } from "react";
import { deriveClassed, type ComponentProps } from "@tw-classed/react";
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
export const Breadcrumbs: FC = deriveClassed<
  typeof BreadcrumbsBase,
  BreadcrumbsProps
>(({ children, ...rest }, ref) => {
  return (
    <BreadcrumbsBase {...rest} ref={ref}>
      <ul>{children}</ul>
    </BreadcrumbsBase>
  );
});
Breadcrumbs.displayName = "Breadcrumbs";
