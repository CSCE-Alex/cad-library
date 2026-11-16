import { useState } from "react";
import { API_BASE_URL } from "../../config";

const AddServices = (props) => {
    const [prevSrc, setPrevSrc] = useState("");
    const [result, setResult] = useState("");

    const uploadImage = (e) => {
        setPrevSrc(URL.createObjectURL(e.target.files[0]));
    };

    const addServiceToServer = async (e) => {
        e.preventDefault();
        setResult("Sending...");
        const formData = new FormData(e.target);

        const response = await fetch(`${API_BASE_URL}/api/services`, {
            method: "POST",
            body: formData
        });

        if (response.status === 200) {
            setResult("Service successfully added");
            props.add_service_to_list(await response.json());
            props.close_dialog();
        } else {
            setResult("Error Adding Service");
        }
    };

    return (
        <div id="add-services-dialog" className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                    <span id="dialog-close"
                        className="w3-button w3-display-topright"
                        onClick={props.close_dialog}>
                            &times;
                    </span>
                </div>
                <div id="services-dialog-content">
                    <h2>Add Service</h2>

                    <form onSubmit={addServiceToServer}>
                        <p>
                            <label htmlFor="title">Service Title:</label>
                            <input type="text" id="title" name="title" required minLength="3" />
                        </p>

                        <p>
                            <label htmlFor="description">Description:</label>
                            <textarea id="description" name="description" required></textarea>
                        </p>

                        <p>
                            <label htmlFor="estimated_time">Estimated Time:</label>
                            <input type="text" id="estimated_time" name="estimated_time" required />
                        </p>

                        <p>
                            <label htmlFor="category">Category:</label>
                            <input type="text" id="category" name="category" required />
                        </p>

                        <section>
                            <p id="img-prev-section">
                                {prevSrc === "" ? ("") : (
                                    <img id="img-prev" src={prevSrc} alt="Preview" />
                                )}
                            </p>
                            <p>
                                <label htmlFor="img">Select Image</label>
                                <input type="file" id="img" name="img" accept="image/*" onChange={uploadImage} />
                            </p>
                        </section>

                        <p>
                            <button type="submit">Submit</button>
                        </p>
                        <p id="status-message">{result}</p>
                    </form>   
                </div>
            </div>
        </div>
    );
};

export default AddServices;