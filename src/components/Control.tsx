import React from "react";
import { IControlsTypes } from "../interfaces/IControls";

const Controls: React.FC<IControlsTypes> = ({ onAdd, onRemove, onRestart}) => {
    return (
        <div className="controls">
            <button onClick={onAdd}>Add</button>
            <button onClick={onRemove}>Add</button>
            <button onClick={onRestart}>Add</button>
        </div>
    );
};

export default Controls;