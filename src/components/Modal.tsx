import React, {useEffect} from "react";
import { IModal } from "../interfaces/IModal";
import '../styles/modal.css';


const Modal: React.FC<IModal> = ({ show, onClose, children }) => {
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
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