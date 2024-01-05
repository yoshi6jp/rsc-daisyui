import { classed } from "../classed.config";
import { menuConfig } from "../menu/menu";

export const DropdownMenu = classed("ul", {
  ...menuConfig,
  base: "p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box",
});
