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
