import { type ComponentProps, deriveClassed } from "@tw-classed/react";
import { classed } from "../classed.config";

export const ModalToggleBase = classed("input", "modal-toggle");
export type ModalToggleProps = ComponentProps<typeof ModalToggleBase>;
export const ModalToggle = deriveClassed<
  typeof ModalToggleBase,
  ModalToggleProps
>((args, ref) => {
  return <ModalToggleBase {...args} ref={ref} type="checkbox" />;
});
