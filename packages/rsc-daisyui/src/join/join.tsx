import { classed } from "../classed.config";
import { configWithThemeFn } from "../config";
import { JoinButton, JoinInput, JoinSelect } from "./join-item";

export const Join = classed(
  "div",
  "join",
  configWithThemeFn({
    vertical: {
      true: "join-vertical",
    },
    horizontal: {
      true: "join-horizontal",
    },
  })
);
Join.displayName = "Join";

export default Object.assign(Join, {
  Button: JoinButton,
  Input: JoinInput,
  Select: JoinSelect,
});
