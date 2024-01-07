import { classed } from "../classed.config";
import { configWithThemeFn } from "../config";
import { CardActions } from "./card-actions";
import { CardBody } from "./card-body";
import { CardTitle } from "./card-title";

export const Card = classed(
  "div",
  "card bg-base-100 shadow-xl",
  configWithThemeFn({
    bordered: {
      true: "card-bordered",
    },
    imageFull: {
      true: "image-full",
    },
    normal: {
      true: "card-normal",
    },
    compact: {
      true: "card-compact",
    },
    side: {
      true: "card-side",
    },
  })
);

export default Object.assign(Card, {
  Body: CardBody,
  Title: CardTitle,
  Actions: CardActions,
});
