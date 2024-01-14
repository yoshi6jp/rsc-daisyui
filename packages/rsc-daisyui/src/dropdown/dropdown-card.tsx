import { classed } from "../classed.config";
import { Card } from "../card/card";

export const DropdownCard = classed(
  "div",
  Card,
  "dropdown-content z-[1] shadow"
);
DropdownCard.displayName = "DropdownCard";
