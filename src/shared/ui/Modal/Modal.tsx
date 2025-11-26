import React from "react";
import "./Modal.scss";
import clx from "classnames";
import { Button } from "../Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;

  children?: React.ReactNode;
}

export function Modal(props: ModalProps): React.ReactElement | null {
  const { isOpen = true, onClose, children } = props;

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={clx("modal", { "modal--opened": isOpen })} onClick={handleOverlayClick}>
      <div className="modal__content">
        <Button className="modal__close" onClick={onClose} aria-label="Close modal">
          &times;
        </Button>
        {children}
      </div>
    </div>
  );
}
