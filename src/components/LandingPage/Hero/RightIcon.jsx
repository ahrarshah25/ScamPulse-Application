import { Shield } from "lucide-react";
import React from "react";

const RightIcon = () => {
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute w-48 h-48 bg-teal-500/30 blur-3xl rounded-full"></div>
      <Shield
        size={350}
        strokeWidth={2.5}
        className="text-teal-400 relative z-10"
      />
    </div>
  );
};

export default RightIcon;
