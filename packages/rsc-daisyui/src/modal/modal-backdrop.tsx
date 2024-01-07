import { type ComponentProps, deriveClassed } from "@tw-classed/react";
import { classed } from "../classed.config";

export const ModalBackdropBase = classed("form", "modal-backdrop");
export type ModalBackdropProps = ComponentProps<typeof ModalBackdropBase>;

export const ModalBackdrop = deriveClassed<
  typeof ModalBackdropBase,
  ModalBackdropProps
>(({ children, ...args }, ref) => {
  return (
    <ModalBackdropBase {...args} method="dialog" ref={ref}>
      <button>{children}</button>
    </ModalBackdropBase>
  );
});

export const ModalBackdropLabel = classed("label", "modal-backdrop");
