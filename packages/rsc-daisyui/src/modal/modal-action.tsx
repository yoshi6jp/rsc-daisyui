import { type ComponentProps, deriveClassed } from "@tw-classed/react";
import { classed } from "../classed.config";

export const ModalActionBase = classed("div", "modal-action");
export type ModalActionProps = ComponentProps<typeof ModalActionBase> & {
  dialog?: boolean;
};

export const ModalAction = deriveClassed<
  typeof ModalActionBase,
  ModalActionProps
>(({ children, dialog, ...rest }, ref) => {
  return (
    <ModalActionBase {...rest} ref={ref}>
      {dialog === false ? (
        <>{children}</>
      ) : (
        <form method="dialog">{children}</form>
      )}
    </ModalActionBase>
  );
});
ModalAction.displayName = "ModalAction";
