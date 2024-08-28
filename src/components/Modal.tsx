import React, {useState, useEffect} from "react";
import '../styles/modal.css';

const Modal = ({ show, onClose, children }) => {
    useEffect(() => {
        const handleEsc = (event) => {
            if(event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);

        return () => {
            window.removeEventListener('keydown', handleEsc);
        }
    }, [onClose]);

    if(!show){
        return null;
    }

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation}>
                <button className="close-button" onClick={onClose}>
                    &times;
                </button>
                <div className="modal-body">
                    {children}
                </div>
            </div>

        </div>
    );
};

export default Modal;