import React from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import "./Services.css";

import benzPic from "./images/Benz.png";
import dbsPic from "./images/DBS.png";
import gt3rsPic from "./images/gt3rsL.png";
import m3Pic from "./images/M3.png";
import r8Pic from "./images/R8.png";
import svjPic from "./images/SVJ.png";

const serviceData = [
  {
    id: 1,
    title: "Essential Detail",
    description: "Thorough exterior hand wash, wheel cleaning, tire shine, and glass polish.",
    src: dbsPic,
    tooltip: "Estimated Time: 2-3 Hours | Essential Maintenance"
  },
  {
    id: 2,
    title: "Premium Detail",
    description: "Full exterior wash, clay bar paint decontamination, and interior vacuuming.",
    src: m3Pic,
    tooltip: "Estimated Time: 4-5 Hours | Most Popular"
  },
  {
    id: 3,
    title: "Elite Detail & Correction",
    description: "Multi-stage paint correction, swirl removal, and high-gloss ceramic paint sealant.",
    src: svjPic,
    tooltip: "Estimated Time: Full Day | Includes Ceramic Warranty"
  },
  {
    id: 4,
    title: "Interior Detail",
    description: "Deep carpet shampoo extraction, leather cleaning, and dashboard conditioning.",
    src: benzPic,
    tooltip: "Estimated Time: 3-4 Hours | Deep Stain Removal"
  },
  {
    id: 5,
    title: "Exterior Detail",
    description: "Foam cannon wash, paint decontamination, chrome polishing, and protective wax finish.",
    src: r8Pic,
    tooltip: "Estimated Time: 3 Hours | High Gloss Finish"
  },
  {
    id: 6,
    title: "Full Detail",
    description: "Our comprehensive top-to-bottom package combining exterior correction and interior restoration.",
    src: gt3rsPic,
    tooltip: "Estimated Time: Full Day | Complete Showroom Transformation"
  }
];

const Services = () => {
  return (
    <div id="services" className="page services-page">
      <div className="services-grid">
        {serviceData.map((service) => (
          <div 
            key={service.id} 
            className="service-card-wrapper"
            data-tooltip-id="service-tip"
            data-tooltip-content={service.tooltip}
          >
            <div className="service-card">
              <img src={service.src} alt={service.title} className="service-img" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      <Tooltip 
        id="service-tip" 
        style={{ backgroundColor: "#2563eb", color: "#ffffff", borderRadius: "6px", fontWeight: "600" }} 
      />
    </div>
  );
};

export default Services;