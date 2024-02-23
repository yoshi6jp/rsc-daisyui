import { classed } from "../classed.config";
import { configWithThemeFn, VanillaDefaultVariants } from "../config";
import { BrowserMockupToolbar } from "./browser-mockup-toolbar";

export const BrowserMockup = classed("div", "mockup-browser", {
  ...configWithThemeFn({ vanilla: { false: "border" } }),
  ...VanillaDefaultVariants,
});
BrowserMockup.displayName = "BrowserMockup";

const BrowserMockupContent = classed("div", "flex justify-center px-4 py-16");
BrowserMockupContent.displayName = "BrowserMockupContent";

export default Object.assign(BrowserMockup, {
  Toolbar: BrowserMockupToolbar,
  Content: BrowserMockupContent,
});
