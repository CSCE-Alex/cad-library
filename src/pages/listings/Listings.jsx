import "./Listings.css";
import { useState, useEffect } from "react";

import House from "../../components/services/Services";

const Listings = () => {
    const [services, setServices] = useState([]);

    // After page has loaded
    useEffect(() => {
      const loadServices = async () => {
        try {
          const response = await fetch("https://cadproject-backend.onrender.com/api/services");
          const data = await response.json();
          setServices(data);
        } catch (error) {
          console.error("Error loading services:", error);
        }
      };

      loadServices();
    }, []);

    return (
        <div id="listings" className="page">
            {services.map((service) => (
                <House 
                    key={service._id}
                    title={service.title}
                    description={service.description}
                    src={`https://cadproject-backend.onrender.com/images/${service.img}`} 
                />
            ))}
        </div>
    );
};

export default Listings;