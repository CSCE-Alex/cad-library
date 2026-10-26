import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div id="home" className="page home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Showroom Finish, Every Time</h1>
          <p className="hero-subtitle">
            Premier paint correction, ceramic coatings, and interior restoration in the Carolinas.
          </p>
          <div className="hero-actions">
            <Link to="/listings" className="btn btn-primary">
              View All Services
            </Link>
            <Link to="/about" className="btn btn-secondary">
              Learn About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="features-section">
        <h2>Why Choose Carolina Auto Details?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">✨</div>
            <h3>Paint Correction</h3>
            <p>Multi-stage swirl and defect removal to bring back flawless depth and clarity.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🛡️</div>
            <h3>Ceramic Protection</h3>
            <p>Long-lasting hydrophobic ceramic coatings that guard against harsh weather and UV rays.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🧼</div>
            <h3>Deep Restoration</h3>
            <p>Comprehensive interior steam extraction, leather conditioning, and trim restoration.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="cta-banner">
        <h2>Ready to Transform Your Vehicle?</h2>
        <p>Explore our full range of detailing packages tailored for daily drivers, exotic cars, and classics.</p>
        <Link to="/listings" className="btn btn-primary">
          Explore Packages
        </Link>
      </section>
    </div>
  );
};

export default Home;