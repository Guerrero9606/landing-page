import React, {useState, useEffect, useRef} from "react";
import '../styles/Notification.css';
import ToastContainer from "react-bootstrap/ToastContainer";
import ProgressBar from "react-bootstrap/ProgressBar";
import Toast from 'react-bootstrap/Toast'

function Confirmacion({setNotify, setNotifyError, show, mensaje}) {

  const notifyFalse = () =>{
    setNotify(false);
    setNotifyError(false);
  } 

  return (
      <ToastContainer position="top-end" className="p-20">
        <Toast className="principal-notification" show={show} onClose={notifyFalse} delay={3000} autohide>
          <Toast.Header>
            <strong className="me-auto">Info</strong>
          </Toast.Header>
          <Toast.Body>{mensaje}</Toast.Body>
        </Toast>
      </ToastContainer>
  );
}

export default Confirmacion;