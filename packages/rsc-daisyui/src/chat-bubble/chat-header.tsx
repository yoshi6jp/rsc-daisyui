import { forwardRef, type ReactNode } from "react";
import type { ComponentProps } from "@tw-classed/react";
import { classed } from "../classed.config";

export const ChatHeaderBase = classed("div", "chat-header");

export type ChartHeaderProps = ComponentProps<typeof ChatHeaderBase> & {
  time?: ReactNode;
};

export const ChatHeader = forwardRef<HTMLDivElement, ChartHeaderProps>(
  ({ children, time, ...rest }, ref) => {
    return (
      <ChatHeaderBase {...rest} ref={ref}>
        {children}
        {time ? <time className="text-xs opacity-50">{time}</time> : null}
      </ChatHeaderBase>
    );
  },
);
ChatHeader.displayName = "ChatHeader";
