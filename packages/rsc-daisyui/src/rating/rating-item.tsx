import { Fragment } from "react";
import { type ComponentProps, deriveClassed } from "@tw-classed/react";
import { classed } from "../classed.config";
import { Mask } from "../mask";
import { times } from "../utils";

export const RatingItem = classed("input", Mask, {
  defaultProps: {
    type: "radio",
  },
  defaultVariants: {
    shape: "star",
  },
});
RatingItem.displayName = "RatingItem";

export const RatingReadonlyItem = classed("div", Mask, {
  defaultVariants: {
    shape: "star",
  },
});
RatingReadonlyItem.displayName = "RatingReadonlyItem";

export const RatingHidden = classed("input", "rating-hidden", {
  defaultProps: {
    type: "radio",
  },
});
RatingHidden.displayName = "RatingHidden";

export type RatingItemsProps = Omit<
  ComponentProps<typeof RatingItem>,
  "half"
> & {
  hidden?: boolean;
  half?: boolean;
  max?: number;
  value?: number;
  defaultValue?: number;
  name: string;
};

export const RatingItems = deriveClassed<typeof RatingItem, RatingItemsProps>(
  ({
    shape,
    hidden,
    half,
    max,
    onChange,
    name,
    value,
    defaultValue,
    className,
  }) => {
    const count = Math.max(1, Math.min(10, Math.floor(max || 5)));
    return (
      <>
        {hidden ? (
          <RatingHidden name={name} onChange={onChange} value={0} />
        ) : null}
        {times(count).map((idx) => {
          const val = idx + 1;
          const halfVal = val - 0.5;
          return (
            <Fragment key={idx}>
              {half ? (
                <RatingItem
                  checked={value === halfVal ? true : undefined}
                  className={className}
                  defaultChecked={defaultValue === halfVal ? true : undefined}
                  half="first"
                  name={name}
                  onChange={onChange}
                  shape={shape}
                  value={halfVal}
                />
              ) : null}

              <RatingItem
                checked={value === val ? true : undefined}
                className={className}
                defaultChecked={defaultValue === val ? true : undefined}
                half={half ? "second" : undefined}
                name={name}
                onChange={onChange}
                shape={shape}
                value={val}
              />
            </Fragment>
          );
        })}
      </>
    );
  }
);
RatingItems.displayName = "RatingItems";

export type RatingReadonlyItemsProps = Omit<
  ComponentProps<typeof RatingReadonlyItem>,
  "half"
> & {
  half?: boolean;
  max?: number;
  value?: number;
};

export const RatingReadonlyItems = deriveClassed<
  typeof RatingReadonlyItem,
  RatingReadonlyItemsProps
>(({ shape, half, max, value, className }) => {
  const count = Math.max(1, Math.min(10, Math.floor(max || 5)));
  return (
    <>
      {times(count).map((idx) => {
        const val = idx + 1;
        const halfVal = val - 0.5;
        return (
          <Fragment key={idx}>
            {half ? (
              <RatingReadonlyItem
                className={className}
                half="first"
                shape={shape}
                aria-current={halfVal === value}
              />
            ) : null}

            <RatingReadonlyItem
              className={className}
              half={half ? "second" : undefined}
              shape={shape}
              aria-current={val === value}
            />
          </Fragment>
        );
      })}
    </>
  );
});
RatingReadonlyItems.displayName = "RatingReadonlyItems";
