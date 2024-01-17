import { classed } from "../classed.config";
import { configWithThemeFn, VanillaDefaultVariants } from "../config";

export const Label = classed("label", "label", {
  ...configWithThemeFn({ vanilla: { false: "cursor-pointer" } }),
  ...VanillaDefaultVariants,
});
Label.displayName = "Label";
export const LabelText = classed("span", "label-text");
LabelText.displayName = "LabelText";
export const LabelTextAlt = classed("span", "label-text-alt");
LabelTextAlt.displayName = "LabelTextAlt";

export default Object.assign(Label, {
  Text: LabelText,
  TextAlt: LabelTextAlt,
});
