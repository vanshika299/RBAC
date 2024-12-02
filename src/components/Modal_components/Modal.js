
// src/components/Modal.js
import PropTypes from "prop-types";
import React from "react";
import "./Modal.css"; // Optional: For custom styling

/**
 * Reusable Modal Component
 * @param {boolean} show - Controls the visibility of the modal.
 * @param {function} onClose - Function to close the modal.
 * @param {string} title - Title of the modal.
 * @param {ReactNode} children - Content of the modal.
 */
const Modal = ({ show, onClose, title, children }) => {
  if (!show) return null; // Don't render the modal if 'show' is false

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">{children}</div>
        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
