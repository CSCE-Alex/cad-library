import "./Listings.css";
import { useState, useEffect } from "react";
import axios from "axios";
import AddDialog from "../../components/add_dialog/AddDialog";

import Services from "../../components/services/Services";

const Listings = () => {
    const [services, setServices] = useState([]);
    const [pending, setPending] = useState(true);

    // After the page has loaded
    useEffect(() => {
        const loadServices = async () => {
            try {
                const response = await axios.get("https://cadproject-backend-1.onrender.com/api/services");
                setPending(false);
                setServices(response.data);
            } catch (error) {
                console.error("Error loading services:", error);
                setPending(false);
            }
        };

        loadServices();
    }, []);

    return (
        <div id="listings" className="page">
            <h2>Listings</h2>
            <button id="btn-add-house">+</button>
            <AddDialog />
            <div id="services">
                {pending && <p>Loading services...</p>}
                {services.map((service) => (
                    <House 
                        key={service._id || service.id}
                        title={service.title}
                        description={service.description}
                        src={`https://cadproject-backend-1.onrender.com/images/${service.img}`} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Listings;