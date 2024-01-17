import { classed } from "../classed.config";
import { configWithThemeFn, VanillaDefaultVariants } from "../config";
import { NavbarCenter } from "./navbar-center";
import { NavbarEnd } from "./navbar-end";
import { NavbarStart } from "./navbar-start";

export const Navbar = classed("div", "navbar", {
  ...configWithThemeFn({
    vanilla: {
      false: "bg-base-100 shadow-xl rounded-box",
    },
  }),
  ...VanillaDefaultVariants,
});

Navbar.displayName = "Navbar";
export default Object.assign(Navbar, {
  Start: NavbarStart,
  Center: NavbarCenter,
  End: NavbarEnd,
});
