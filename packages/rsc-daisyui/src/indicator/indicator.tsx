import { classed } from "../classed.config";
import { configWithThemeFn } from "../config";
import { Tab } from "../tab/tab";
import { Avatar } from "../avatar/avatar";
import {
  IndicatorItem,
  IndicatorBadge,
  IndicatorStatus,
} from "./indicator-item";

export const Indicator = classed("div", "indicator", configWithThemeFn({}));
Indicator.displayName = "Indicator";

export const IndicatorTab = classed("a", Indicator, Tab);
IndicatorTab.displayName = "IndicatorTab";

export const IndicatorAvatar = classed("div", Indicator, Avatar);
IndicatorAvatar.displayName = "IndicatorAvatar";

export default Object.assign(Indicator, {
  Item: IndicatorItem,
  Badge: IndicatorBadge,
  Status: IndicatorStatus,
  Tab: IndicatorTab,
  Avatar: IndicatorAvatar,
});
