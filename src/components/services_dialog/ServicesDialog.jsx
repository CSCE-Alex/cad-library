import React from "react";
import "./ServicesDialog.css";

const API_URL = "https://cadproject-backend-1.onrender.com";

const ServicesDialog = (props) => {
    return (
        <div id="services-dialog" className="w3-modal" style={{ display: "block" }}>
            <div className="w3-modal-content">
                <div className="w3-container">
                    <span 
                        id="dialog-close"
                        className="w3-button w3-display-topright"
                        onClick={props.close_dialog}
                        style={{ cursor: "pointer", float: "right", fontSize: "24px" }}
                    >
                        &times;
                    </span>
                </div>
                <div id="services-dialog-body" style={{ padding: "20px" }}>
                    <h2>{props.title}</h2>
                    {props.img && (
                        <img 
                            src={`${API_URL}/images/${props.img}`} 
                            alt={props.title} 
                            style={{ width: "100%", maxHeight: "250px", objectFit: "cover", borderRadius: "6px" }}
                        />
                    )}
                    <p><strong>Description:</strong> {props.description}</p>
                    {props.estimated_time && <p><strong>Estimated Time:</strong> {props.estimated_time}</p>}
                    {props.category && <p><strong>Category:</strong> {props.category}</p>}
                </div>
            </div>
        </div>
    );
};

export default ServicesDialog;

