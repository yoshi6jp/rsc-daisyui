import { classed } from "../classed.config";
import { configWithThemeFn, VanillaDefaultVariants } from "../config";

export const WindowMockup = classed("div", "mockup-window", {
  ...configWithThemeFn({ vanilla: { false: "border" } }),
  ...VanillaDefaultVariants,
});
WindowMockup.displayName = "WindowMockup";

const WindowMockupContent = classed("div", "flex justify-center px-4 py-16");
WindowMockupContent.displayName = "BrowserMockupContent";

export default Object.assign(WindowMockup, {
  Content: WindowMockupContent,
});
