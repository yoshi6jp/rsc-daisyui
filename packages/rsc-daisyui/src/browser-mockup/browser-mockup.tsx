import { classed } from "../classed.config";
import { configWithThemeFn } from "../config";
import { BrowserMockupToolbar } from "./browser-mockup-toolbar";

export const BrowserMockup = classed(
  "div",
  "mockup-browser",
  configWithThemeFn({})
);
BrowserMockup.displayName = "BrowserMockup";

const BrowserMockupContent = classed("div", "grid place-content-center h-80");
BrowserMockupContent.displayName = "BrowserMockupContent";

export default Object.assign(BrowserMockup, {
  Toolbar: BrowserMockupToolbar,
  Content: BrowserMockupContent,
});
