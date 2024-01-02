import type { VariantConfig, Variants, Variant } from "@tw-classed/core";
import { ThemeVariants } from "./theme";

export type IVariantConfig = VariantConfig<Variants>;
export type IVarConfWithoutDataAttributes = Omit<
  VariantConfig<Variants>,
  "dataAttributes"
>;

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
