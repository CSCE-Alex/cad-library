import "./About.css";

const About = () => {
  return (
    <div id="about" className="page about-page">
      <div className="about-hero">
        <h2>About Carolina Auto Details</h2>
        <p className="tagline">Precision craftsmanship, premium products, and passion for automotive perfection.</p>
      </div>

      <div className="about-content">
        <div className="about-section">
          <h3>Our Story</h3>
          <p>
            Founded in the heart of the Carolinas, Carolina Auto Details (CAD) was built on a single, uncompromising standard: 
            to treat every vehicle as if it were a one-of-a-kind masterpiece. Whether it's a daily driver or a track-ready exotic, 
            our team brings years of hands-on expertise in paint correction, ceramic coatings, and meticulous interior restoration.
          </p>
        </div>

        <div className="about-section">
          <h3>Our Standards</h3>
          <ul className="standards-list">
            <li><strong>Pro-Grade Products:</strong> Industry-leading ceramic sealants, pH-neutral soaps, and professional-grade correction compounds.</li>
            <li><strong>Meticulous Attention:</strong> Every inch of your vehicle—from paint depth to tight interior crevices—is inspected and perfected.</li>
            <li><strong>Customer Satisfaction:</strong> Room for showroom-quality results and long-lasting protection for your investment.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;