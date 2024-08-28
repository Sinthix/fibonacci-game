import React from "react";

export interface IModal {
    show: boolean;
    onClose: () => void;
    children: React.ReactNode;
}