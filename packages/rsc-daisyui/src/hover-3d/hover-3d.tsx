import { type ComponentProps, deriveClassed } from "@tw-classed/react";
import { classed } from "../classed.config";
import { configWithThemeFn } from "../config";

export const Hover3DBase = classed("div", "hover-3d", configWithThemeFn({}));
type Hover3DProps = ComponentProps<typeof Hover3DBase> & {};
export const Hover3D = deriveClassed<typeof Hover3DBase, Hover3DProps>(
  ({ children, ...props }, ref) => {
    return (
      <Hover3DBase {...props} ref={ref}>
        {children}
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </Hover3DBase>
    );
  }
);
Hover3D.displayName = "Hover3D";
