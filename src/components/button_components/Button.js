
// src/components/Button.js
import PropTypes from "prop-types";
import React from "react";
import "./Button.css"; // Optional: For custom styling

/**
 * Reusable Button Component
 * @param {string} label - Text to display on the button.
 * @param {string} type - Type of the button: "button", "submit", "reset".
 * @param {string} variant - Style variant: "primary", "secondary", "danger", etc.
 * @param {boolean} disabled - If true, disables the button.
 * @param {function} onClick - Function to execute on button click.
 * @param {string} className - Additional CSS classes for customization.
 */
const Button = ({ 
  label, 
  type = "button", 
  variant = "primary", 
  disabled = false, 
  onClick, 
  className = "" 
}) => {
  return (
    <button
      type={type}
      className={`btn btn-${variant} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

// Define PropTypes for the component
Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  variant: PropTypes.oneOf(["primary", "secondary", "danger", "success", "warning"]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
