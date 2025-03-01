import {
  type ComponentProps,
  deriveClassed,
  type DerivedComponentType,
} from "@tw-classed/react";
import { classed } from "../classed.config";
import { Input } from "../input";

export const BrowserMockupToolbarBase = classed(
  "div",
  "mockup-browser-toolbar"
);
type BrowserMockupToolbarProps = ComponentProps<typeof Input>;
export const BrowserMockupToolbar: DerivedComponentType<
  typeof BrowserMockupToolbarBase,
  BrowserMockupToolbarProps
> = deriveClassed<typeof BrowserMockupToolbarBase, BrowserMockupToolbarProps>(
  ({ children, ...rest }) => {
    return (
      <BrowserMockupToolbarBase>
        <Input as="div" {...rest}>
          {children}
        </Input>
      </BrowserMockupToolbarBase>
    );
  }
);
BrowserMockupToolbar.displayName = "BrowserMockupToolbar";
