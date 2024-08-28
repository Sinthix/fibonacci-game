import React from "react";
import '../styles/controls.css';
import { IControlsTypes } from "../interfaces/IControls";

const Controls: React.FC<IControlsTypes> = ({ onAdd, onRemove, onRestart}) => {
    return (
        <div className="controls">
            <button className="add-btn" onClick={onAdd}>Add</button>
            <button className="remove-btn" onClick={onRemove}>Remove</button>
            <button className="restart-btn" onClick={onRestart}>Restart</button>
        </div>
    );
};

export default Controls;