import "./Hero.css";
import image from "./images/hero-image.jpg"

const Hero = () => {
    return (
        <section id="hero">
            <img src={image} alt="Hero" />
        </section>
    )
};

export default Hero;