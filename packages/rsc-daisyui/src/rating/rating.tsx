import { classed } from "../classed.config";
import { configWithThemeFn } from "../config";
import { RatingHidden, RatingItem, RatingItems } from "./rating-item";

export const Rating = classed(
  "div",
  "rating",
  configWithThemeFn({
    size: {
      lg: "rating-lg",
      md: "rating-md",
      sm: "rating-sm",
      xs: "rating-xs",
    },
    half: {
      true: "rating-half",
    },
  })
);
Rating.displayName = "Rating";

export default Object.assign(Rating, {
  Hidden: RatingHidden,
  Item: RatingItem,
  Items: RatingItems,
});
