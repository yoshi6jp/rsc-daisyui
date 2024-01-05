import { classed } from "../classed.config";
import { configWithThemeFn } from "../config";
import { NavbarCenter } from "./navbar-center";
import { NavbarEnd } from "./navbar-end";
import { NavbarStart } from "./navbar-start";

export const navbarConfig = {
  base: "navbar bg-base-100 shadow-xl rounded-box",
  ...configWithThemeFn({}),
};

export const Navbar = classed("div", navbarConfig);
export default Object.assign(Navbar, {
  Start: NavbarStart,
  Center: NavbarCenter,
  End: NavbarEnd,
});
