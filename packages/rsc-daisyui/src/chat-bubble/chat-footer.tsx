import { classed } from "../classed.config";
import { VanillaDefaultVariants } from "../config";

export const ChatFooter = classed("div", "chat-footer", {
  variants: {
    vanilla: {
      false: "opacity-50",
    },
  },
  ...VanillaDefaultVariants,
});
ChatFooter.displayName = "ChatFooter";
