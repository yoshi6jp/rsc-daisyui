import type { VariantConfig, Variants, Variant } from "@tw-classed/core";
import { ThemeVariants } from "./theme/constants";

export function configWithThemeFn<T extends Variants>(conf: T) {
  const variants = {
    ...conf,
    theme: ThemeVariants,
  };
  return {
    variants,
    dataAttributes: ["theme"] as const,
  } satisfies VariantConfig<T & { theme: Variant }>;
}
export const VanillaDefaultVariants = {
  defaultVariants: {
    vanilla: false,
  },
} as const;
export const validatorVariant = {
  validator: {
    true: "validator",
  },
} satisfies Variants;
