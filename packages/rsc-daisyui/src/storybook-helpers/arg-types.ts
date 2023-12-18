type IVariantItem = Record<string, string>;

type IVariantConfig = {
  variants: Record<string, IVariantItem>;
};

const booleanArgTypes = () => ({
  control: "boolean",
});

const radioArgTypes = (options: string[], inline: boolean = true) => ({
  control: inline ? "inline-radio" : "radio",
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
export const toArgTypes = (config: IVariantConfig) => {
  return Object.fromEntries(
    Object.entries(config.variants).map(([key, item]) => [
      key,
      itemToArgTypes(item),
    ])
  );
};
