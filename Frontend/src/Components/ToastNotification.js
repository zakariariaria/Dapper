import React, { useState, useEffect } from 'react';
import { Toast } from 'react-bootstrap';

const ToastNotification = ({ show, onClose, message }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // Automatically close the toast after 3 seconds
    return () => clearTimeout(timer);
  }, [show]);

  return (
    <Toast show={show} onClose={onClose} delay={3000} autohide >

      <Toast.Body>{message}</Toast.Body>
    </Toast>
  );
};

export default ToastNotification;
