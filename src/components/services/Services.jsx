import "./Services.css";

const Services = ({ title, description, src }) => {
  return (
    <div className="service-card">
      <img src={src} alt={title} />
      <div className="service-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Services;