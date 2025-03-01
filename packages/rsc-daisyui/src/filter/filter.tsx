import { classed } from "../classed.config";
import { configWithThemeFn, VanillaDefaultVariants } from "../config";
import { Button } from "../button/button";

export const Filter = classed("form", "filter", configWithThemeFn({}));
Filter.displayName = "Filter";

const FilterButton = classed("input", Button, {
  defaultProps: { type: "radio" },
});
FilterButton.displayName = "FilterButton";

const FilterResetButton = classed("input", Button, {
  defaultProps: { type: "reset" },
});
FilterResetButton.displayName = "FilterResetButton";

const FilterResetRadio = classed("input", "filter-reset", Button, {
  defaultProps: { type: "radio", ["aria-label"]: "All" },
});
FilterResetRadio.displayName = "FilterResetRadio";

export default Object.assign(Filter, {
  Button: FilterButton,
  ResetButton: FilterResetButton,
  ResetRadio: FilterResetRadio,
});
