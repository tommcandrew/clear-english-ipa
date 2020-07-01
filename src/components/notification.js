import React from "react";

const Notification = ({ message, handleClose }) => {
  const handleCloseNotification = (e) => {
    if (
      e.target.classList.contains("notification__wrapper") ||
      e.target.classList.contains("notification__close")
    ) {
      handleClose();
    }
  };

  return (
    <div className="notification__wrapper" onClick={handleCloseNotification}>
      <div className="notification__content">
        <span className="notification__close">&times;</span>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Notification;
