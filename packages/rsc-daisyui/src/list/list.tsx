import { classed } from "../classed.config";
import { configWithThemeFn, VanillaDefaultVariants } from "../config";
import { ListRow } from "./list-row";
import { ListColGrow, ListColWrap } from "./list-col";

export const List = classed("ul", "list", {
  ...configWithThemeFn({
    vanilla: {
      false: "bg-base-100 rounded-box shadow-md",
    },
  }),
  ...VanillaDefaultVariants,
});
List.displayName = "List";

export default Object.assign(List, {
  Row: ListRow,
  ColWrap: ListColWrap,
  ColGrow: ListColGrow,
});
