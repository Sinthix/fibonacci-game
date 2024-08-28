import React from "react";
import { IControlsTypes } from "../interfaces/IControls";

const Controls: React.FC<IControlsTypes> = ({ onAdd, onRemove, onRestart}) => {
    return (
        <div className="controls">
            <button onClick={onAdd}>Add</button>
            <button onClick={onRemove}>Remove</button>
            <button onClick={onRestart}>Restart</button>
        </div>
    );
};

export default Controls;