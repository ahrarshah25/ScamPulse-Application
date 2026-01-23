import React from "react";
import { CheckCircle, XCircle, Info } from "lucide-react";

const Icon = ({ type }) => {
  const icons = {
    success: <CheckCircle size={22} />,
    error: <XCircle size={22} />,
    info: <Info size={22} />,
  };

  return (
    <div className={`alert-icon ${type}`}>
      {icons[type] || icons.info}
    </div>
  );
};

export default Icon;
