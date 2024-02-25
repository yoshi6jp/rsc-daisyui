"use client";
import { useRef, useCallback } from "react";
import { Button, Modal } from "rsc-daisyui";

export function Dialog(): JSX.Element {
  const ref = useRef<HTMLDialogElement>(null);
  const handleClick = useCallback(() => {
    if (ref.current) {
      ref.current.showModal();
    }
  }, [ref]);

  return (
    <>
      <Button onClick={handleClick}>open modal</Button>
      <Modal ref={ref}>
        <Modal.Box>
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
}
