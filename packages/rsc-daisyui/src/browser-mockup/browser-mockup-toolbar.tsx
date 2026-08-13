import { forwardRef } from "react";
import type { ComponentProps } from "@tw-classed/react";
import { classed } from "../classed.config";

export type BrowserMockupToolbarComponent = React.ForwardRefExoticComponent<
  BrowserMockupToolbarProps & React.RefAttributes<HTMLDivElement>
>;

export const BrowserMockupToolbarBase = classed(
  "div",
  "mockup-browser-toolbar",
);
type BrowserMockupToolbarProps = ComponentProps<
  typeof BrowserMockupToolbarBase
>;
export const BrowserMockupToolbar: BrowserMockupToolbarComponent = forwardRef<
  HTMLDivElement,
  BrowserMockupToolbarProps
>(({ children, ...rest }, ref) => {
  return (
    <BrowserMockupToolbarBase ref={ref} {...rest}>
      {children}
    </BrowserMockupToolbarBase>
  );
});
BrowserMockupToolbar.displayName = "BrowserMockupToolbar";
