
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import "./Listings.css";
import Services from "../../components/services/Services";

import benzPic from "../../components/services/images/Benz.png";
import dbsPic from "../../components/services/images/DBS.png";
import gt3rsPic from "../../components/services/images/gt3rsL.png";
import m3Pic from "../../components/services/images/M3.png";
import r8Pic from "../../components/services/images/R8.png";
import svjPic from "../../components/services/images/SVJ.png";

const Listings = () => {
  return (
    <div id="listings" className="page">
      <div data-tooltip-id="service-tip" data-tooltip-content="Estimated Time: 2-3 Hours | Essential Maintenance">
        <Services 
          title="Essential Detail" 
          description="Thorough exterior hand wash, wheel cleaning, tire shine, and glass polish." 
          src={dbsPic} 
        />
      </div>

      <div data-tooltip-id="service-tip" data-tooltip-content="Estimated Time: 4-5 Hours | Most Popular">
        <Services 
          title="Premium Detail" 
          description="Full exterior wash, clay bar paint decontamination, and interior vacuuming." 
          src={m3Pic} 
        />
      </div>

      <div data-tooltip-id="service-tip" data-tooltip-content="Estimated Time: Full Day | Includes Ceramic Warranty">
        <Services 
          title="Elite Detail & Correction" 
          description="Multi-stage paint correction, swirl removal, and high-gloss ceramic paint sealant." 
          src={svjPic} 
        />
      </div>

      <div data-tooltip-id="service-tip" data-tooltip-content="Estimated Time: 3-4 Hours | Deep Stain Removal">
        <Services 
          title="Interior Detail" 
          description="Deep carpet shampoo extraction, leather cleaning, and dashboard conditioning." 
          src={benzPic} 
        />
      </div>

      <div data-tooltip-id="service-tip" data-tooltip-content="Estimated Time: 3 Hours | High Gloss Finish">
        <Services 
          title="Exterior Detail" 
          description="Foam cannon wash, paint decontamination, chrome polishing, and protective wax finish." 
          src={r8Pic} 
        />
      </div>

      <div data-tooltip-id="service-tip" data-tooltip-content="Estimated Time: Full Day | Complete Showroom Transformation">
        <Services 
          title="Full Detail" 
          description="Our comprehensive top-to-bottom package combining exterior correction and interior restoration." 
          src={gt3rsPic} 
        />
      </div>

      <Tooltip 
        id="service-tip" 
        style={{ backgroundColor: "#2563eb", color: "#ffffff", borderRadius: "6px", fontWeight: "600" }} 
      />
    </div>
  );
};

export default Listings;