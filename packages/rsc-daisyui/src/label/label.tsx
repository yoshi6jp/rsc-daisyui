import { classed } from "../classed.config";
import { configWithThemeFn } from "../config";

export const Label = classed(
  "label",
  "label cursor-pointer",
  configWithThemeFn({})
);
export const LabelText = classed("span", "label-text");
export const LabelTextAlt = classed("span", "label-text-alt");

export default Object.assign(Label, {
  Text: LabelText,
  TextAlt: LabelTextAlt,
});
