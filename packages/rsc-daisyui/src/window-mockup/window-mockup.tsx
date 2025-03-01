import { classed } from "../classed.config";
import { configWithThemeFn } from "../config";

export const WindowMockup = classed(
  "div",
  "mockup-window",
  configWithThemeFn({})
);
WindowMockup.displayName = "WindowMockup";

const WindowMockupContent = classed("div", "grid place-content-center h-80");
WindowMockupContent.displayName = "WindowMockupContent";

export default Object.assign(WindowMockup, {
  Content: WindowMockupContent,
});
