import React, { useEffect } from "react";
import Icon from "./Icon";
import Title from "./Title";
import Message from "./Message";
import Cut from "./Cut";

const Alert = ({ type = "success", title, message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <>
      <div className={`alert-wrapper ${type}`}>
        <Icon type={type} />

        <div className="alert-content">
          <Title title={title} />
          <Message message={message} />
        </div>

        <Cut onClose={onClose} />
      </div>

      <style>{`
        .alert-wrapper {
          position: fixed;
          top: 20px;
          left: 20px;
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 16px 18px;
          width: 360px;
          border-radius: 14px;
          border: 1px solid;
          backdrop-filter: blur(14px);
          animation: slideIn 0.45s ease-out;
          z-index: 9999;
          box-shadow: 0 20px 60px rgba(0,0,0,0.45);
        }

        .alert-wrapper.success {
          background: linear-gradient(135deg, #052e2b, #064e3b);
          border-color: rgba(20,184,166,0.6);
        }

        .alert-wrapper.error {
          background: linear-gradient(135deg, #3b0a0a, #7f1d1d);
          border-color: rgba(239,68,68,0.6);
        }

        .alert-icon {
          margin-top: 2px;
          flex-shrink: 0;
        }

        .alert-icon.success {
          color: #2dd4bf;
        }

        .alert-icon.error {
          color: #f87171;
        }

        .alert-content {
          flex: 1;
        }

        .alert-title {
          font-size: 15px;
          font-weight: 600;
          color: #ffffff;
          margin: 0;
        }

        .alert-message {
          font-size: 13px;
          color: #cbd5f5;
          margin-top: 4px;
          line-height: 1.5;
        }

        .alert-close {
          background: transparent;
          border: none;
          color: #94a3b8;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .alert-close:hover {
          color: #ffffff;
        }

        @keyframes slideIn {
          from {
            transform: translateX(-30px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default Alert;
