import { classed } from "../classed.config";
import { configWithThemeFn } from "../config";
import { FieldsetLabel } from "./fieldset-label";
import { FieldsetLegend } from "./fieldset-legend";

export const Fieldset = classed("fieldset", "fieldset", configWithThemeFn({}));
Fieldset.displayName = "Fieldset";

export default Object.assign(Fieldset, {
  Label: FieldsetLabel,
  Legend: FieldsetLegend,
});
