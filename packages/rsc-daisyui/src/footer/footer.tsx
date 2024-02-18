import { classed } from "../classed.config";
import { configWithThemeFn, VanillaDefaultVariants } from "../config";

export const Footer = classed("footer", "footer", {
  ...configWithThemeFn({
    vanilla: {
      false: "p-10",
    },
  }),
  ...VanillaDefaultVariants,
});
Footer.displayName = "Footer";
const FooterTitle = classed("h6", "footer-title");
FooterTitle.displayName = "FooterTitle";

export default Object.assign(Footer, {
  Title: FooterTitle,
});
