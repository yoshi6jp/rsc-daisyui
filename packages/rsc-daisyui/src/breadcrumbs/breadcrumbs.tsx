import type { ComponentProps } from "react";
import { classed, deriveClassed } from "@tw-classed/react";
import { configWithThemeFn } from "../config";

export const breadcrumbsConfig = {
  ...configWithThemeFn({}),
  base: "breadcrumbs text-sm",
};

export const BreadcrumbsBase = classed("div", breadcrumbsConfig);
export type BreadcrumbsProps = ComponentProps<typeof BreadcrumbsBase>;
export const Breadcrumbs = deriveClassed<typeof BreadcrumbsBase>(
  ({ children, ...rest }, ref) => {
    return (
      <BreadcrumbsBase {...rest} ref={ref}>
        <ul>{children}</ul>
      </BreadcrumbsBase>
    );
  }
);
