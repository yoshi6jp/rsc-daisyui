import { classed } from "../classed.config";
import { configWithThemeFn } from "../config";
import { DockItem, DockLabel } from "./dock-item";

export const Dock = classed(
  "div",
  "dock",
  configWithThemeFn({
    size: {
      xs: "dock-xs",
      sm: "dock-sm",
      md: "dock-md",
      lg: "dock-lg",
      xl: "dock-xl",
    },
  })
);
Dock.displayName = "Dock";

export default Object.assign(Dock, {
  Item: DockItem,
  Label: DockLabel,
});
