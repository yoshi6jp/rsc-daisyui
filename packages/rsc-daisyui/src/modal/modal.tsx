import React from "react";
import { type ComponentProps, deriveClassed } from "@tw-classed/react";
import { classed } from "../classed.config";
import { configWithThemeFn } from "../config";
import { ModalAction } from "./modal-action";
import { ModalBox } from "./modal-box";
import { ModalBackdrop, ModalBackdropLabel } from "./modal-backdrop";
import { ModalToggle } from "./modal-toggle";

export const ModalBase = classed(
  "dialog",
  "modal",
  configWithThemeFn({
    placement: {
      top: "modal-top",
      middle: "modal-middle",
      bottom: "modal-bottom",
      start: "modal-start",
      end: "modal-end",
    },
    open: {
      true: "modal-open",
    },
  })
);

export type ModalProps = ComponentProps<typeof ModalBase> & {
  backdrop?: boolean;
};

export const Modal = deriveClassed<typeof ModalBase, ModalProps>(
  ({ children, backdrop, ...rest }, ref) => {
    const as = rest.as as unknown as string | undefined;
    if (as === "dialog" || as === undefined) {
      return (
        <ModalBase {...rest} ref={ref}>
          {children}
          {backdrop ? <ModalBackdrop /> : null}
        </ModalBase>
      );
    }
    return (
      <ModalBase {...rest} ref={ref} role="dialog">
        {children}
      </ModalBase>
    );
  }
);
Modal.displayName = "Modal";

export default Object.assign(Modal, {
  Box: ModalBox,
  Action: ModalAction,
  Backdrop: ModalBackdrop,
  BackdropLabel: ModalBackdropLabel,
  Toggle: ModalToggle,
});
