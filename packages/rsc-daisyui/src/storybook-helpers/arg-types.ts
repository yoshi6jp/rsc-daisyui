import type { ArgTypes } from "@storybook/react";

type IInputType = ArgTypes[string];
type IVariantItem = Record<string, string>;

interface InterfaceVariantConfig {
  variants: Record<string, IVariantItem>;
}

function booleanArgTypes(): IInputType {
  return {
    control: "boolean",
  };
}

function radioArgTypes(options: string[]): IInputType {
  return {
    control: "radio",
    options,
  };
}

function selectArgTypes(options: string[]): IInputType {
  return {
    control: "select",
    options,
  };
}

function pickArgTypes(options: string[]): IInputType {
  if (options.length > 4) {
    return selectArgTypes(options);
  }
  return radioArgTypes(options);
}

function isBooleanVariants(item: IVariantItem): boolean {
  return Object.keys(item).every((v) => ["true", "false"].includes(v));
}

function itemToArgTypes(item: IVariantItem): IInputType {
  if (isBooleanVariants(item)) {
    return booleanArgTypes();
  }
  return pickArgTypes(Object.keys(item));
}

type ICustomPropsType = "boolean";

export function toArgTypes<
  T extends Record<string, unknown> = Record<string, unknown>,
>(
  config: InterfaceVariantConfig,
  props?: Partial<Record<keyof T, ICustomPropsType>>
): ArgTypes {
  const configArgs = Object.entries(config.variants).map(
    ([key, item]) => [key, itemToArgTypes(item)] as const
  );

  const propsArgs = Object.entries(props || {}).map(([key]) => {
    return [key, booleanArgTypes()] as const;
  });
  const args = [...configArgs, ...propsArgs];
  return Object.fromEntries(args);
}
