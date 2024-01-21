import { classed } from "../classed.config";
import { VanillaDefaultVariants } from "../config";

export const Carousel = classed("div", "carousel", {
  variants: {
    snap: {
      center: "carousel-center",
      end: "carousel-end",
    },
    vertical: {
      true: "carousel-vertical",
    },

    vanilla: {
      false: "rounded-box",
    },
  },
  ...VanillaDefaultVariants,
});
Carousel.displayName = "Carousel";

export const CarouselItem = classed("div", "carousel-item");
export default Object.assign(Carousel, { Item: CarouselItem });
