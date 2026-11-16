import "./Listings.css";
import { useState, useEffect } from "react";
import AddServices from "../../components/add_services/AddServices";
import ServicesDialog from "../../components/services_dialog/ServicesDialog";

const API_URL = "https://cadproject-backend-1.onrender.com";

const Listings = () => {
    const [services, setServices] = useState([]);
    const [pending, setPending] = useState(true);
    const [showAddDialog, setShowAddDialog] = useState(false);
    const [selectedService, setSelectedService] = useState(null);

    const openAddDialog = () => setShowAddDialog(true);
    const closeAddDialog = () => setShowAddDialog(false);

    const addServiceToList = (newService) => {
        setServices((prev) => [...prev, newService]);
    };

    useEffect(() => {
        const loadServices = async () => {
            try {
                const response = await fetch(`${API_URL}/api/services`);
                const data = await response.json();
                
                if (Array.isArray(data)) {
                    setServices(data);
                } else {
                    setServices([]);
                }
            } catch (error) {
                console.error("Error loading services:", error);
                setServices([]);
            } finally {
                setPending(false);
            }
        };

        loadServices();
    }, []);

    return (
        <div id="listings" className="page">
            <div className="listings-header">
                <h2>Services Listings</h2>
                <button id="btn-add-service" onClick={openAddDialog}>+</button>
            </div>
            
            {showAddDialog && (
                <AddServices 
                    close_dialog={closeAddDialog}
                    add_service_to_list={addServiceToList}
                />
            )}
            
            <div id="services-grid-container">
                {pending && <p style={{ color: "#fff", textAlign: "center" }}>Waking up server and loading services (this may take up to 30 seconds)...</p>}
                {!pending && services.length === 0 && <p style={{ color: "#fff", textAlign: "center" }}>No services found or server is offline.</p>}
                
                {Array.isArray(services) && services.map((service) => (
                    <section 
                        key={service._id || service.id} 
                        className="service-card"
                        onClick={() => setSelectedService(service)}
                        style={{ cursor: "pointer" }}
                    >
                        <img 
                            src={`${API_URL}/images/${service.img}`} 
                            alt={service.title} 
                        />
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </section>
                ))}
            </div>

            {selectedService && (
                <ServicesDialog 
                    {...selectedService} 
                    close_dialog={() => setSelectedService(null)} 
                />
            )}
        </div>
    );
};

export default Listings;