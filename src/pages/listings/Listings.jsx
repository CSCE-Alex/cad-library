import "./Listings.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../config";
import AddServices from "../../components/add_services/AddServices";
import ServiceCard from "../../components/services/Services";

const Listings = () => {
    const [services, setServices] = useState([]);
    const [pending, setPending] = useState(true);
    const [showAddDialog, setShowAddDialog] = useState(false);

    const openAddDialog = () => {
        setShowAddDialog(true);
    };

    const closeAddDialog = () => {
        setShowAddDialog(false);
    };

    const addServiceToList = (newService) => {
        setServices((services) => [...services, newService]);
    };

    // After the page has loaded
    useEffect(() => {
        const loadServices = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/api/services`);
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
            <button id="btn-add-house" onClick={openAddDialog}>+</button>
            {showAddDialog && (
                <AddServices 
                    close_dialog={closeAddDialog}
                    add_service_to_list={addServiceToList}
                />
            )}
            
            <div id="services">
                {pending && <p>Loading services...</p>}
                {services.map((service) => (
                    <ServiceCard 
                        key={service._id || service.id}
                        title={service.title}
                        description={service.description}
                        estimated_time={service.estimated_time}
                        category={service.category}
                        src={`${API_BASE_URL}/images/${service.img}`} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Listings;