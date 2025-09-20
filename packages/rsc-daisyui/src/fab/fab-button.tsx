import { classed } from "../classed.config";
import { Button } from "../button";

export const FabButton = classed("div", Button, {
  defaultProps: {
    role: "button",
    tabIndex: 0,
  },
  defaultVariants: {
    shape: "circle",
  },
});
FabButton.displayName = "FabButton";
