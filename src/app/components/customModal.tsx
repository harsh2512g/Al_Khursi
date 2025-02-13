import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  heading: string;
  subHeading: string;
  description: string;
}

const CustomModal: React.FC<ModalProps> = ({ isOpen, onClose, heading, subHeading, description }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-gray-500 opacity-50"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-blue-500 text-white p-6 rounded-[30px] shadow-lg w-[350px] md:w-[400px] lg:w-[450px]">
        {/* <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white font-bold text-xl"
        >
          &times;
        </button> */}
        <h2 className="text-3xl font-bold mb-1">{heading}</h2>
        <h3 className="text-xl font-semibold">{subHeading}</h3>
        <p className="text-sm leading-relaxed opacity-[0.5]">{description}</p>
      </div>
    </div>
  );
};

export default CustomModal;
