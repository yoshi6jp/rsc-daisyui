import { classed } from "../classed.config";
import { configWithThemeFn } from "../config";
import { ChatAvatar } from "./chat-avatar";
import { ChatBubble } from "./chat-bubble";
import { ChatFooter } from "./chat-footer";
import { ChatHeader } from "./chat-header";

export const Chat = classed("div", "chat", {
  ...configWithThemeFn({
    align: {
      start: "chat-start",
      end: "chat-end",
    },
  }),
  defaultVariants: {
    align: "start",
  },
});

export default Object.assign(Chat, {
  Avatar: ChatAvatar,
  Bubble: ChatBubble,
  Footer: ChatFooter,
  Header: ChatHeader,
});
Chat.displayName = "Chat";
