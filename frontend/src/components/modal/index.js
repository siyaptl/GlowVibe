import React from "react";

const Modal = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-7 rounded-sm shadow-lg w-96 text-center">
        <p className="text-gray-700">{message}</p>
        <button
          className="mt-5 px-5 py-2 bg-blue-500 text-white rounded-sm hover:bg-blue-600"
          onClick={onClose}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default Modal;
