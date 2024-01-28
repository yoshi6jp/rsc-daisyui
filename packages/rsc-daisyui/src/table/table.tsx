import { classed } from "../classed.config";
import { configWithThemeFn } from "../config";

export const Table = classed(
  "table",
  "table",
  configWithThemeFn({
    zebra: {
      true: "table-zebra",
    },
    size: {
      lg: "table-lg",
      md: "table-md",
      sm: "table-sm",
      xs: "table-xs",
    },
    pinRows: {
      true: "table-pin-rows",
    },
    pinCols: {
      true: "table-pin-cols",
    },
  })
);
Table.displayName = "Table";
