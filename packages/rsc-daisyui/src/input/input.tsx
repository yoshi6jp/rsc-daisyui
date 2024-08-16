import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { type ComponentProps, deriveClassed } from "@tw-classed/react";
import { classed } from "../classed.config";
import { configWithThemeFn } from "../config";
import { InsideInput } from "./inside-input";

export const Input = classed("input", "input", {
  ...configWithThemeFn({
    bordered: {
      true: "input-bordered",
    },
    color: {
      ghost: "input-ghost",
      primary: "input-primary",
      secondary: "input-secondary",
      accent: "input-accent",
      info: "input-info",
      success: "input-success",
      warning: "input-warning",
      error: "input-error",
    },
    size: {
      lg: "input-lg",
      md: "input-md",
      sm: "input-sm",
      xs: "input-xs",
    },
  }),
  defaultVariants: {
    bordered: true,
  },
});
Input.displayName = "Input";

export type InsideProps = ComponentProps<typeof Input> & {
  start?: ReactNode;
  end?: ReactNode;
  innerClassName?: string;
};

export const Inside = deriveClassed<typeof Input, InsideProps>(
  (
    {
      children,
      className,
      innerClassName,
      title,
      start,
      end,
      bordered,
      color,
      size,
      theme,
      ...rest
    },
    ref
  ) => (
    <Input
      as="label"
      bordered={bordered}
      className={twMerge("flex items-center gap-2", className)}
      color={color}
      size={size}
      theme={theme}
      title={title}
    >
      {start ?? null}
      <InsideInput {...rest} className={innerClassName} ref={ref}>
        {children}
      </InsideInput>
      {end ?? null}
    </Input>
  )
);

Inside.displayName = "InputInside";

export default Object.assign(Input, { Inside });
