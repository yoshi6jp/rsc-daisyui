import type { ComponentProps } from "react";
import { deriveClassed } from "@tw-classed/react";
import { classed } from "../classed.config";
import { configWithThemeFn } from "../config";

export const BreadcrumbsBase = classed(
  "div",
  "breadcrumbs text-sm",
  configWithThemeFn({})
);
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
Breadcrumbs.displayName = "Breadcrumbs";
