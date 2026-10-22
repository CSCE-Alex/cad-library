import "./Listings.css";
import Services from "../../components/services/Services";

const Listings = () => {
    return (
        <div id="listings" className="page">
            <Services 
                title="Essential Detail" 
                description= ""
                src={pic} />
            <Services 
                title="Premium Detail" 
                description= ""
                src={pic} />
            <Services 
                title="Elite Detail & Correction" 
                description= ""
                src={pic} />
            <Services 
                title="Interior Detail" 
                description= ""
                src={pic} />
            <Services 
                title="Exterior Detail" 
                description= ""
                src={pic} />
            <Services
                title="Full Detail" 
                description= ""
                src={pic} />
        </div>
    )
};

export default Listings;