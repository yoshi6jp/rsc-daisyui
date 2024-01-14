import { classed } from "../classed.config";
import { Button } from "../button";

export const DropdownButton = classed("summary", "m-1", Button, {
  defaultProps: {
    role: "button",
    tabIndex: 0,
  },
});
DropdownButton.displayName = "DropdownButton";
