import "./Hero.css";
import CADlogo from "./images/CADlogo.jpg";
import {useState} from "react";

const Hero = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const importAll = (resource) => {
      return resource.keys().map(resource);
    }

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