import { classed } from "../classed.config";

export const DrawerOverlay = classed("label", "drawer-overlay", {
  defaultProps: {
    "aria-label": "close sidebar",
  },
});
DrawerOverlay.displayName = "DrawerOverlay";
