import { type ComponentProps, deriveClassed } from "@tw-classed/react";
import { classed } from "../classed.config";
import { configWithThemeFn } from "../config";

export const RadialProgressBase = classed(
  "div",
  "radial-progress",
  configWithThemeFn({})
);

type RadialProgressProps = ComponentProps<typeof RadialProgressBase> & {
  value?: number;
  size?: string;
  thickness?: string;
};

export const RadialProgress = deriveClassed<
  typeof RadialProgressBase,
  RadialProgressProps
>(({ children, value, size, thickness, ...rest }, ref) => {
  const radialProgressStyle: Record<string, unknown> = {
    ["--value"]: Math.min(100, Math.max(0, value || 0)),
    ["--size"]: size,
    ["--thickness"]: thickness,
  };
  return (
    <RadialProgressBase
      {...rest}
      ref={ref}
      role="progressbar"
      style={radialProgressStyle}
    >
      {children}
    </RadialProgressBase>
  );
});
RadialProgress.displayName = "RadialProgress";
