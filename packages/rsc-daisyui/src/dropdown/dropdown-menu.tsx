import { classed } from "../classed.config";
import { Menu } from "../menu/menu";

export const DropdownMenu = classed(Menu, "dropdown-content z-1", {});
DropdownMenu.displayName = "DropdownMenu";
