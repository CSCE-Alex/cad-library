import { useState } from "react";

const AddServices = (props) => {
    const [prevSrc, setPrevSrc] = useState("");

    const uploadImage = (e) => {
        setPrevSrc(URL.createObjectURL(e.target.files[0]));
    };

    return(
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

                    <form>
                        <p>
                            <label htmlFor="title">Service Title:</label>
                            <input type="text" id="title" name="title" required minLength="3"></input>
                        </p>

                        <p>
                            <label htmlFor="description">Description:</label>
                            <textarea id="description" name="description" required></textarea>
                        </p>

                        <p>
                            <label htmlFor="estimated_time">Estimated Time:</label>
                            <input type="text" id="estimated_time" name="estimated_time" required></input>
                        </p>

                        <p>
                            <label htmlFor="category">Category:</label>
                            <input type="text" id="category" name="category" required></input>
                        </p>

                        <section>
                            <p id="img-prev-section">
                                {prevSrc === "" ? ("") : (
                                    <img id="img-prev" src={prevSrc} alt="Preview" />
                                )}
                            </p>
                            <p>
                                <label htmlFor="img">Select Image</label>
                                <input type="file" id="img" name="img" accept="image/*" onChange={uploadImage}></input>
                            </p>
                        </section>

                        <p>
                            <button type="submit">Submit</button>
                        </p>
                    </form>   
                </div>
            </div>
        </div>
    );
};

export default AddServices;