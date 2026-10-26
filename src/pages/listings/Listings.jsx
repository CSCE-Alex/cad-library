import "./Listings.css";
import Services from "../../components/services/Services";

// Import each unique car image
import benzPic from "../../components/services/images/Benz.png";
import dbsPic from "../../components/services/images/DBS.png";
import gt3rsPic from "../../components/services/images/gt3rsL.png";
import m3Pic from "../../components/services/images/M3.png";
import r8Pic from "../../components/services/images/R8.png";
import svjPic from "../../components/services/images/SVJ.png";

const Listings = () => {
  return (
    <div id="listings" className="page">
      <Services 
        title="Essential Detail" 
        description="Thorough exterior hand wash, wheel cleaning, tire shine, and glass polish." 
        src={benzPic} 
      />
      <Services 
        title="Premium Detail" 
        description="Full exterior wash, clay bar paint decontamination, and interior vacuuming." 
        src={r8Pic} 
      />
      <Services 
        title="Elite Detail & Correction" 
        description="Multi-stage paint correction, swirl removal, and high-gloss ceramic paint sealant." 
        src={gt3rsPic} 
      />
      <Services 
        title="Interior Detail" 
        description="Deep carpet shampoo extraction, leather cleaning, and dashboard conditioning." 
        src={dbsPic} 
      />
      <Services 
        title="Exterior Detail" 
        description="Foam cannon wash, paint decontamination, chrome polishing, and protective wax finish." 
        src={m3Pic} 
      />
      <Services
        title="Full Detail" 
        description="Our comprehensive top-to-bottom package combining exterior correction and interior restoration." 
        src={svjPic} 
      />
    </div>
  );
};

export default Listings;