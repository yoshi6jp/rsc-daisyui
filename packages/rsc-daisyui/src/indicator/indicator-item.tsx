import { classed } from "../classed.config";
import { Badge } from "../badge";
import { Status } from "../status";

export const IndicatorItem = classed("span", "indicator-item", {
  variants: {
    horizontal: {
      start: "indicator-start",
      center: "indicator-center",
      end: "indicator-end",
    },
    vertical: {
      top: "indicator-top",
      middle: "indicator-middle",
      bottom: "indicator-bottom",
    },
  },
});
IndicatorItem.displayName = "IndicatorItem";

export const IndicatorBadge = classed("span", Badge, IndicatorItem);
IndicatorBadge.displayName = "IndicatorBadge";

export const IndicatorStatus = classed("span", Status, IndicatorItem);
IndicatorStatus.displayName = "IndicatorStatus";
