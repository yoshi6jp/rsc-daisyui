import { classed } from "../classed.config";
import { configWithThemeFn } from "../config";
import {
  BottomNavigationItem,
  BottomNavigationLabel,
} from "./bottom-navigation-item";

export const BottomNavigation = classed(
  "div",
  "btm-nav",
  configWithThemeFn({
    size: {
      xs: "btm-nav-xs",
      sm: "btm-nav-sm",
      md: "btm-nav-md",
      lg: "btm-nav-lg",
    },
  })
);
BottomNavigation.displayName = "BottomNavigation";

export default Object.assign(BottomNavigation, {
  Item: BottomNavigationItem,
  Label: BottomNavigationLabel,
});
