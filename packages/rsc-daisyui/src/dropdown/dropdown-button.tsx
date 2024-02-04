import { classed } from "../classed.config";
import { Avatar } from "../avatar";
import { Button } from "../button";
import { VanillaDefaultVariants } from "../config";

export const DropdownButton = classed(
  "summary",
  {
    variants: {
      vanilla: { false: "m-1" },
    },
    ...VanillaDefaultVariants,
  },
  Button,
  {
    defaultProps: {
      role: "button",
      tabIndex: 0,
    },
  }
);
DropdownButton.displayName = "DropdownButton";

export const DropdownAvatar = classed(
  "summary",
  {
    defaultProps: {
      role: "button",
      tabIndex: 0,
    },
  },
  Button,
  Avatar
);
