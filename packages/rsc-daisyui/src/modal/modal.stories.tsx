import React, { useRef, useCallback } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { getVariantConfig } from "@tw-classed/react";
import { toArgTypes } from "../storybook-helpers";
import { Button } from "..";
import { ModalBase, type ModalProps } from "./modal";
import { Modal } from ".";

const meta: Meta<typeof Modal> = {
  title: "Actions/Modal",
  component: Modal,
  tags: ["autodocs"],
  argTypes: toArgTypes<ModalProps>(getVariantConfig(ModalBase), {
    backdrop: "boolean",
  }),
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: (args) => {
    const ref = useRef<HTMLDialogElement>(null);
    const handleClick = useCallback(() => {
      ref.current?.showModal();
    }, [ref]);
    return (
      <>
        <Button onClick={handleClick}>open modal</Button>
        <Modal {...args} ref={ref}>
          <Modal.Box>
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">
              Press ESC key or click the button below to close
            </p>
            <Modal.Action>
              <Button>Close</Button>
            </Modal.Action>
          </Modal.Box>
        </Modal>
      </>
    );
  },
};

export const ClosesWhenClickedOutside: Story = {
  args: {
    backdrop: true,
  },
  render: (args) => {
    const ref = useRef<HTMLDialogElement>(null);
    const handleClick = useCallback(() => {
      ref.current?.showModal();
    }, [ref]);
    return (
      <>
        <Button onClick={handleClick}>open modal</Button>
        <Modal {...args} ref={ref}>
          <Modal.Box>
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Press ESC key or click outside to close</p>
          </Modal.Box>
        </Modal>
      </>
    );
  },
};

export const CloseButtonAtCorner: Story = {
  render: (args) => {
    const ref = useRef<HTMLDialogElement>(null);
    const handleClick = useCallback(() => {
      ref.current?.showModal();
    }, [ref]);
    return (
      <>
        <Button onClick={handleClick}>open modal</Button>
        <Modal {...args} ref={ref}>
          <Modal.Box>
            <form method="dialog">
              <Button
                className="absolute right-2 top-2"
                color="ghost"
                shape="circle"
                size="sm"
              >
                ✕
              </Button>
            </form>
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Press ESC key or click on ✕ Button to close</p>
          </Modal.Box>
        </Modal>
      </>
    );
  },
};

export const CustomWidth: Story = {
  render: (args) => {
    const ref = useRef<HTMLDialogElement>(null);
    const handleClick = useCallback(() => {
      ref.current?.showModal();
    }, [ref]);
    return (
      <>
        <Button onClick={handleClick}>open modal</Button>
        <Modal {...args} ref={ref}>
          <Modal.Box className="w-11/12 max-w-5xl">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">
              Press ESC key or click the button below to close
            </p>
            <Modal.Action>
              <Button>Close</Button>
            </Modal.Action>
          </Modal.Box>
        </Modal>
      </>
    );
  },
};

export const Responsive: Story = {
  ...Default,
  args: {
    position: "bottom",
    className: "sm:modal-middle",
  },
};

export const UsingLabelAndHiddenCheckbox: Story = {
  parameters: {
    controls: {
      exclude: ["as", "children", "backdrop"],
    },
  },
  render: (args) => {
    const id = "my_modal_1";
    return (
      <>
        <Button as="label" htmlFor={id}>
          open modal
        </Button>
        <Modal.Toggle id={id} />
        {/* @ts-expect-error: as */}
        <Modal {...args} as="div">
          <Modal.Box>
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">This modal works with a hidden checkbox!</p>
            <Modal.Action dialog={false}>
              <Button as="label" htmlFor={id}>
                Close!
              </Button>
            </Modal.Action>
          </Modal.Box>
        </Modal>
      </>
    );
  },
};

export const UsingLabelClosesWhenClickedOutside: Story = {
  parameters: {
    controls: {
      exclude: ["as", "children", "backdrop"],
    },
  },
  render: (args) => {
    const id = "my_modal_2";
    return (
      <>
        <Button as="label" htmlFor={id}>
          open modal
        </Button>
        <Modal.Toggle id={id} />
        {/* @ts-expect-error: as */}
        <Modal {...args} as="div">
          <Modal.Box>
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Click outside to close</p>
          </Modal.Box>
          <Modal.BackdropLabel htmlFor={id} />
        </Modal>
      </>
    );
  },
};

export const UsingAnchorLinks: Story = {
  args: {
    id: "my_modal_3",
  },
  render: (args) => {
    return (
      <>
        <Button as="a" href={`#${args.id}`} title="Open canvas in new tab">
          open modal
        </Button>
        {/* @ts-expect-error: as */}
        <Modal {...args} as="div">
          <Modal.Box>
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">This modal works with anchor links</p>
            <Modal.Action dialog={false}>
              <Button as="a" href="#">
                Close!
              </Button>
            </Modal.Action>
          </Modal.Box>
        </Modal>
      </>
    );
  },
};
