import { classed } from "../classed.config";
import { configWithThemeFn, VanillaDefaultVariants } from "../config";
import { Stat } from "./stat";
import { StatActions } from "./stat-actions";
import { StatDesc } from "./stat-desc";
import { StatFigure } from "./stat-figure";
import { StatTitle } from "./stat-title";
import { StatValue } from "./stat-value";

export const Stats = classed("div", "stats", {
  ...configWithThemeFn({
    vertical: {
      true: "stats-vertical",
    },
    horizontal: {
      true: "stats-horizontal",
    },
    vanilla: {
      false: "shadow",
    },
  }),
  ...VanillaDefaultVariants,
});
Stats.displayName = "Stats";

export default Object.assign(Stats, {
  Stat,
  Desc: StatDesc,
  Actions: StatActions,
  Figure: StatFigure,
  Title: StatTitle,
  Value: StatValue,
});
