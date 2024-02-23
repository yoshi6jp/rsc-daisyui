import { classed } from "../classed.config";
import { configWithThemeFn, VanillaDefaultVariants } from "../config";
import { CardActions } from "./card-actions";
import { CardBody } from "./card-body";
import { CardTitle } from "./card-title";

export const Card = classed("div", "card", {
  ...configWithThemeFn({
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
    vanilla: {
      false: "bg-base-100",
    },
  }),
  ...VanillaDefaultVariants,
});
Card.displayName = "Card";
export default Object.assign(Card, {
  Body: CardBody,
  Title: CardTitle,
  Actions: CardActions,
});
