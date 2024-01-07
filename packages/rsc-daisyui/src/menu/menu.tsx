import { classed } from "../classed.config";
import { configWithThemeFn } from "../config";
import { MenuItem, MenuLi } from "./menu-item";

export const Menu = classed(
  "ul",
  "menu bg-base-200 rounded-box",
  configWithThemeFn({
    vertical: {
      true: "menu-vertical",
    },
    horizontal: {
      true: "menu-horizontal",
    },
    size: {
      lg: "menu-lg",
      md: "menu-md",
      sm: "menu-sm",
      xs: "menu-xs",
    },
  })
);

export default Object.assign(Menu, {
  Li: MenuLi,
  Item: MenuItem,
});
