import { classed } from "../classed.config";
import { configWithThemeFn } from "../config";
import {
  RatingHidden,
  RatingItem,
  RatingItems,
  RatingReadonlyItem,
  RatingReadonlyItems,
} from "./rating-item";

export const Rating = classed(
  "div",
  "rating",
  configWithThemeFn({
    size: {
      xl: "rating-xl",
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
  Readonly: {
    Item: RatingReadonlyItem,
    Items: RatingReadonlyItems,
  },
});
