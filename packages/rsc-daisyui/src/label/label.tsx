import { classed } from "../classed.config";
import { configWithThemeFn } from "../config";

export const Label = classed("span", "label", configWithThemeFn({}));

Label.displayName = "Label";
export const FloatingLabel = classed(
  "label",
  "floating-label",
  configWithThemeFn({})
);
FloatingLabel.displayName = "FloatingLabel";

export default Object.assign(Label, {
  Floating: FloatingLabel,
});
