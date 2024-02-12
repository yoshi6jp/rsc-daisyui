import { classed } from "../classed.config";
import { configWithThemeFn, VanillaDefaultVariants } from "../config";

export const FormControl = classed("label", "form-control", {
  ...configWithThemeFn({
    vanilla: {
      false: "w-full max-w-xs",
    },
  }),
  ...VanillaDefaultVariants,
});
FormControl.displayName = "FormControl";
