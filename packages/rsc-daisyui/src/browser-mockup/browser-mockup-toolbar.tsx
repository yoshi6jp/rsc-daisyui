import { type ComponentProps, deriveClassed } from "@tw-classed/react";
import { classed } from "../classed.config";
import { Input } from "../input";

export const BrowserMockupToolbarBase = classed(
  "div",
  "mockup-browser-toolbar"
);
type BrowserMockupToolbarProps = ComponentProps<typeof Input>;
export const BrowserMockupToolbar = deriveClassed<
  typeof BrowserMockupToolbarBase,
  BrowserMockupToolbarProps
>(({ children, ...rest }, ref) => {
  return (
    <BrowserMockupToolbarBase ref={ref}>
      <Input as="div" {...rest}>
        {children}
      </Input>
    </BrowserMockupToolbarBase>
  );
});
BrowserMockupToolbar.displayName = "BrowserMockupToolbar";
