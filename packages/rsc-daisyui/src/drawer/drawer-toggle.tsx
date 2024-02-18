import { classed } from "../classed.config";

export const DrawerToggle = classed("input", "drawer-toggle", {
  defaultProps: {
    type: "checkbox",
  },
});
DrawerToggle.displayName = "DrawerToggle";
