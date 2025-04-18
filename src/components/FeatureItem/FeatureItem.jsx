import React from "react";
import "./FeatureItem.css"; 

const FeatureItem = ({ img, title, description }) => {
    return (
        <div className="feature-item">
            <img src={img} alt="Feature Icon" className="feature-icon" />
            <h3 className="feature-item-title">{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default FeatureItem;
