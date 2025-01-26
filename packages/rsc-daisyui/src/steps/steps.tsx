import { classed } from "../classed.config";
import { configWithThemeFn } from "../config";
import { Step, Icon } from "./step";

export const Steps = classed(
  "ul",
  "steps",
  configWithThemeFn({
    vertical: {
      true: "steps-vertical",
    },
    horizontal: {
      true: "steps-horizontal",
    },
  })
);
Steps.displayName = "Steps";

export default Object.assign(Steps, {
  Step,
  Icon,
});
