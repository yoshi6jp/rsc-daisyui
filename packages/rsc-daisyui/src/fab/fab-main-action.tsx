import { classed } from "../classed.config";
import { Button } from "../button";

export const FabMainAction = classed("div", "fab-main-action");
FabMainAction.displayName = "FabMainAction";

export const FabMainActionButton = classed(Button, "fab-main-action", {
  defaultVariants: { shape: "circle" },
});
FabMainActionButton.displayName = "FabMainActionButton";
