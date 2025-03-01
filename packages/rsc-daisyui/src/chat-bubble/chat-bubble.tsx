import { classed } from "../classed.config";

export const ChatBubble = classed("div", "chat-bubble", {
  variants: {
    color: {
      primary: "chat-bubble-primary",
      secondary: "chat-bubble-secondary",
      accent: "chat-bubble-accent",
      info: "chat-bubble-info",
      success: "chat-bubble-success",
      warning: "chat-bubble-warning",
      error: "chat-bubble-error",
      neutral: "chat-bubble-neutral",
    },
  },
});
ChatBubble.displayName = "ChatBubble";
