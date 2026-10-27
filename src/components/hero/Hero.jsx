import "./Hero.css";
import CADlogo from "./images/CADlogo.jpg";

const Hero = () => {

    const images = importAll(
        require.context("../images/slideshow", false, /\.(png|jpe?g|svg$|webp)/)
    );
    
    return (
        <section id="hero">
            <img src={CADlogo} alt="CAD Logo" />
            <a id="next-arrow" className="arrow">&rsaquo;</a>
            <a id="prev-arrow" className="arrow">&lsaquo;</a>
        </section>
    )
};

export default Hero;