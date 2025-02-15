import React, { useState, useEffect } from "react";
import { Dispatch, SetStateAction } from "react";

import "./styles.scss";

interface ModalProps {
  isOpen: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
  onOk: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onOk, children }) => {
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const handleClose = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      onClose(false);
    }, 300);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("bodyOverflow-hidden");
      document.body.classList.remove("bodyOverflow-auto");
      return;
    }
    document.body.classList.remove("bodyOverflow-hidden");
    document.body.classList.add("bodyOverflow-auto");
  }, [isOpen]);

  if (!isOpen && !isAnimating) {
    return null;
  }

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-overlay" onClick={handleClose}></div>
      <div className="modal-content">
        {children}
        <div className="modal-buttons">
          <button className="modal-button cancel" onClick={handleClose}>
            Повернутись
          </button>
          <button className="modal-button success" onClick={onOk}>
            Підтвердити
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
