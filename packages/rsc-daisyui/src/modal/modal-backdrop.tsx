import { forwardRef, type FC } from "react";
import type { ComponentProps } from "@tw-classed/react";
import { classed } from "../classed.config";

export const ModalBackdropBase = classed("form", "modal-backdrop");
export type ModalBackdropProps = ComponentProps<typeof ModalBackdropBase>;

export const ModalBackdrop = forwardRef<HTMLFormElement, ModalBackdropProps>(
  ({ children, ...args }, ref) => {
    return (
      <ModalBackdropBase {...args} method="dialog" ref={ref}>
        <button type="submit">{children}</button>
      </ModalBackdropBase>
    );
  },
) as FC<ModalBackdropProps>;
ModalBackdrop.displayName = "ModalBackdrop";

export const ModalBackdropLabel = classed("label", "modal-backdrop");
ModalBackdropLabel.displayName = "ModalBackdropLabel";
