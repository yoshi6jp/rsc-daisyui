"use client";
import { useRef, useCallback, type JSX } from "react";
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
          <div className="py-4">
            Press ESC key or click the button below to close
          </div>
          <Modal.Action>
            <Button>Close</Button>
          </Modal.Action>
        </Modal.Box>
      </Modal>
    </>
  );
}
