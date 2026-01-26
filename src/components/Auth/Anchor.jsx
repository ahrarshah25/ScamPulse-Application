import React from "react";

const Anchor = ({ text, href }) => {
  return (
    <a
      href={href}
      className="text-sm text-teal-400 hover:underline self-end"
    >
      {text}
    </a>
  );
};

export default Anchor;
