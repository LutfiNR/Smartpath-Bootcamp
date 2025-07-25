import React from 'react';
import PropTypes from 'prop-types';

interface IPopupProps {
  message: string;
  onClose: () => void;
}

const Popup: React.FC<IPopupProps> = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-primary p-6 outline-dashed text-secondary shadow-primary-lg">
        <h3 className="text-xl font-bold mb-4">Submission Successful</h3>
        <p>{message}</p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-secondary text-primary "
        >
          Close
        </button>
      </div>
    </div>
  );
};

Popup.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Popup;
