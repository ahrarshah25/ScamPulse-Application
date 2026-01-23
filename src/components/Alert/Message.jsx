import React from "react";
import { X } from "lucide-react";

const Cut = ({ onClose }) => {
  return (
    <button className="alert-close" onClick={onClose}>
      <X size={16} />
    </button>
  );
};

export default Cut;
