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
    position: {
      top: "modal-top",
      middle: "modal-middle",
      bottom: "modal-bottom",
    },
    open: {
      true: "modal-open",
    },
  })
);

export type ModalProps = ComponentProps<typeof ModalBase> & {
  backdrop?: boolean;
  checkbox?: boolean;
};

function Backdrop({
  dialog,
  backdrop,
  htmlFor,
}: {
  dialog?: boolean;
  backdrop?: boolean;
  htmlFor?: string;
}): JSX.Element | null {
  if (backdrop) {
    if (dialog === false) {
      return <ModalBackdropLabel htmlFor={htmlFor}>close</ModalBackdropLabel>;
    }
    return <ModalBackdrop>close</ModalBackdrop>;
  }
  return null;
}
export const Modal = deriveClassed<typeof ModalBase, ModalProps>(
  ({ children, backdrop, checkbox, id, ...rest }, ref) => {
    const as = rest.as as unknown as string | undefined;
    if (as === "dialog" || as === undefined) {
      return (
        <ModalBase {...rest} id={id} ref={ref}>
          {children}
          <Backdrop backdrop={backdrop} />
        </ModalBase>
      );
    }
    if (checkbox) {
      return (
        <>
          <ModalToggle id={id} />
          <ModalBase {...rest} ref={ref} role="dialog">
            {children}
            <Backdrop backdrop={backdrop} dialog={false} htmlFor={id} />
          </ModalBase>
        </>
      );
    }
    return (
      <ModalBase {...rest} id={id} ref={ref} role="dialog">
        {children}
        <Backdrop backdrop={backdrop} dialog={false} htmlFor={id} />
      </ModalBase>
    );
  }
);

export default Object.assign(Modal, {
  Box: ModalBox,
  Action: ModalAction,
  Backdrop: ModalBackdrop,
  BackdropLabel: ModalBackdropLabel,
  Toggle: ModalToggle,
});
