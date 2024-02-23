import { classed } from "../classed.config";
import { configWithThemeFn } from "../config";
import { PhoneMockupCamera } from "./phone-mockup-camera";
import { PhoneMockupDisplay } from "./phone-mockup-display";

export const PhoneMockup = classed(
  "div",
  "mockup-phone",
  configWithThemeFn({})
);
PhoneMockup.displayName = "PhoneMockup";

export default Object.assign(PhoneMockup, {
  Camera: PhoneMockupCamera,
  Display: PhoneMockupDisplay,
});
