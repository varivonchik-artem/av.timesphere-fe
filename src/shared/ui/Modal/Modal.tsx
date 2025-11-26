import React from "react";
import "./Modal.scss";
import clx from "classnames";
import { Button } from "../Button";
import { Portal } from "../Portal";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;

  children?: React.ReactNode;
}

export function Modal(props: ModalProps): React.ReactElement | null {
  const { isOpen = true, onClose, children } = props;

  if (!isOpen) return null;

  const closeOnClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Portal>
      <div className={clx("modal", { "modal--opened": isOpen })} onClick={closeOnClick}>
        <div className="modal__content">
          <Button className="modal__close" onClick={onClose} aria-label="Close modal">
            &times;
          </Button>
          {children}
        </div>
      </div>
    </Portal>
  );
}
