import type { VariantConfig, Variants, Variant } from "@tw-classed/core";
import { ThemeVariants } from "./theme";

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

export const disabledVariant = {
  disabled: {
    true: "disabled",
  },
} satisfies Variants;

export const activeVariant = {
  active: {
    true: "active",
  },
} satisfies Variants;
