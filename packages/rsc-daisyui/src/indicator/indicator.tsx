import { classed } from "../classed.config";
import { configWithThemeFn } from "../config";
import { IndicatorItem, IndicatorBadge } from "./indicator-item";

export const Indicator = classed("div", "indicator", configWithThemeFn({}));
Indicator.displayName = "Indicator";

export default Object.assign(Indicator, {
  Item: IndicatorItem,
  Badge: IndicatorBadge,
});
