import "./ServicesDialog.css";
import { API_BASE_URL } from "../../config";

const ServicesDialog = (props) => {
    return (
        <div id="services-dialog" className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                    <span id="dialog-close"
                        className="w3-button w3-display-topright"
                        onClick={props.close_dialog}>
                            &times;
                    </span>
                </div>
                <div id="services-dialog-content">
                    <h2>{props.title}</h2>
                    <section id="edit-links">
                        <a href="edit-link">&#9998;</a>
                        <a href="delete-link">&#x2715;</a>
                    </section>
                    <img src={`${API_BASE_URL}/images/${props.img}`} alt="Service" />
                    <p>{props.description}</p>
                    <p>Estimated Time: {props.estimated_time}</p>
                    <p>Category: {props.category}</p>
                </div>
            </div>
        </div>
    );
};

export default ServicesDialog;

