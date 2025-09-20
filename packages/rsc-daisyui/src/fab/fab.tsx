import { classed } from "../classed.config";
import { configWithThemeFn } from "../config";
import { FabButton } from "./fab-button";
import { FabClose } from "./fab-close";
import { FabMainAction, FabMainActionButton } from "./fab-main-action";

export const Fab = classed(
  "div",
  "fab",
  configWithThemeFn({
    flower: {
      true: "fab-flower",
    },
  })
);
Fab.displayName = "Fab";
export default Object.assign(Fab, {
  Button: FabButton,
  MainAction: FabMainAction,
  MainActionButton: FabMainActionButton,
  Close: FabClose,
});
