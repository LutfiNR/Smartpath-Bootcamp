import React, { useState, cloneElement } from "react";
import PropTypes from "prop-types";

const Dropdown = ({ buttonText, buttonClass, arrowSrc, children, left, handleLinkClick }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownLinkClick = () => {
    setIsDropdownOpen(false);
    if (handleLinkClick) {
      handleLinkClick();
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className={buttonClass}
      >
        {buttonText}
        <img src={arrowSrc} alt="arrow down" className="w-min inline ml-2" />
      </button>
      {isDropdownOpen && (
        <div className={`absolute ${left} mt-2 w-min bg-transparent`}>
          {React.Children.map(children, (child) =>
            cloneElement(child, { onClick: handleDropdownLinkClick })
          )}
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  buttonText: PropTypes.string.isRequired,
  buttonClass: PropTypes.string.isRequired,
  arrowSrc: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  left: PropTypes.string,
  handleLinkClick: PropTypes.func,
};

export default Dropdown;
