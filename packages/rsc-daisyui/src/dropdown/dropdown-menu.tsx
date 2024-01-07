import { classed } from "../classed.config";
import { Menu } from "../menu/menu";

export const DropdownMenu = classed(
  "ul",
  Menu,
  "p-2 shadow  dropdown-content z-[1] bg-base-100"
);
