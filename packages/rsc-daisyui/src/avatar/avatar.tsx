import { classed } from "../classed.config";
import { configWithThemeFn, VanillaDefaultVariants } from "../config";

export const Avatar = classed(
  "div",
  "avatar",
  configWithThemeFn({
    indicator: {
      online: "online",
      offline: "offline",
    },
    placeholder: {
      true: "placeholder",
    },
  })
);
Avatar.displayName = "Avatar";

export const AvatarGroup = classed("div", "avatar-group", {
  ...configWithThemeFn({
    vanilla: {
      false: "-space-x-6 rtl:space-x-reverse",
    },
  }),
  ...VanillaDefaultVariants,
});
AvatarGroup.displayName = "AvatarGroup";

export default Object.assign(Avatar, { Group: AvatarGroup });
