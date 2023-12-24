type IVariantItem = Record<string, string>;

interface InterfaceVariantConfig {
  variants: Record<string, IVariantItem>;
}

const booleanArgTypes = () => ({
  control: "boolean",
});

const radioArgTypes = (options: string[]) => ({
  control: "radio",
  options,
});

const selectArgTypes = (options: string[]) => ({
  control: "select",
  options,
});

const pickArgTypes = (options: string[]) => {
  if (options.length > 4) {
    return selectArgTypes(options);
  } else {
    return radioArgTypes(options);
  }
};

const isBooleanVariants = (item: IVariantItem) =>
  Object.keys(item).every((v) => ["true", "false"].includes(v));

const itemToArgTypes = (item: IVariantItem) => {
  if (isBooleanVariants(item)) {
    return booleanArgTypes();
  } else {
    return pickArgTypes(Object.keys(item));
  }
};
export const toArgTypes = (config: InterfaceVariantConfig) => {
  return Object.fromEntries(
    Object.entries(config.variants).map(([key, item]) => [
      key,
      itemToArgTypes(item),
    ])
  );
};
