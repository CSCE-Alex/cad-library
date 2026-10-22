import "./Services.css";

const Services = (props) => {
    return (
        <section className= "services">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <img src={props.src} alt="Services" />
        </section>
    )
};

export default Services;