
import "./ShopMap.css";

const ShopMap = () => {
  return (
    <div className="map-container">
      <h3>Visit Our Studio</h3>
      <p>Conveniently located in Columbia, South Carolina.</p>
      <iframe
        title="Carolina Auto Details Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105897.64333647161!2d-81.1039867!3d34.0007104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8a569793836d5%3A0x23a63cae2a6c8570!2sColumbia%2C%20SC!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default ShopMap;