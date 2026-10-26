import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Essential Detail",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div id="contact" className="page contact-page">
      <div className="contact-header">
        <h2>Book an Appointment</h2>
        <p>Get in touch or request a detailing package for your vehicle.</p>
      </div>

      <div className="contact-container">
        {submitted ? (
          <div className="success-message">
            <h3>Thank You, {formData.name}!</h3>
            <p>Your request for the <strong>{formData.service}</strong> package has been received. We'll contact you shortly at {formData.email}.</p>
            <button className="btn btn-primary" onClick={() => setSubmitted(false)}>
              Send Another Request
            </button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="John Doe"
              />
            </div>

            <div className="form-group-row">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  value={formData.email} 
                  onChange={handleChange} 
                  placeholder="john@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  placeholder="(803) 555-0199"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="service">Requested Package</label>
              <select 
                id="service" 
                name="service" 
                value={formData.service} 
                onChange={handleChange}
              >
                <option value="Essential Detail">Essential Detail</option>
                <option value="Premium Detail">Premium Detail</option>
                <option value="Elite Detail & Correction">Elite Detail & Correction</option>
                <option value="Interior Detail">Interior Detail</option>
                <option value="Exterior Detail">Exterior Detail</option>
                <option value="Full Detail">Full Detail</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Vehicle Info & Special Requests</label>
              <textarea 
                id="message" 
                name="message" 
                rows="4" 
                value={formData.message} 
                onChange={handleChange} 
                placeholder="Year, make, model, and any specific areas of focus..."
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit Request
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;