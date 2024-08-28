import React from "react";
import { IPolygonsTypes } from "../interfaces/IPolygons";

import circleImage from '../assets/circle.png';
import squareImage from '../assets/square.png';
import triangleImage from '../assets/triangle.png';

const Polygon: React.FC<IPolygonsTypes> = ({ type }) => {
    let imgSrc;
    
    switch (type) {
        case 'circle':
            imgSrc = circleImage;
            break;
        case 'square':
            imgSrc = squareImage;
            break;
        case 'triangle':
            imgSrc = triangleImage;
            break;
        default:
            imgSrc = '';
    }

    return <img src={imgSrc} alt={type} />
};

export default Polygon;