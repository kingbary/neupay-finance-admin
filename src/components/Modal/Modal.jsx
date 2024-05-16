import React from "react";
import "./Modal.css";

const Modal = ({
  onClose,
  handleDelete,
  modalHeading,
  modalContent,
  cancelText,
  actionText,
  imgSrc,
  icon,
}) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="content">
          <div className="image">
            <img src={imgSrc} alt="admin-image" />
          </div>
          <div className="content-text">
            <h2>{modalHeading}</h2>
            <p>{modalContent}</p>
          </div>
        </div>
        <div className="modal-buttons">
          {cancelText && (
            <button onClick={onClose} className="cancel-btn">
              {cancelText}
            </button>
          )}

          <button
            onClick={() => {
              handleDelete();
              onClose();
            }}
            className="action-btn"
          >
            {icon && <span>{icon}</span>}

            {actionText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
