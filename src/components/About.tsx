import { BioValues } from "../data/BioLists";
import useScrollPosition from "../hooks/useScrollPosition";

const About = () => {
  const pastHero = useScrollPosition(400);

  return (
    <section
      id="about"
      className="section-wrap"
      style={pastHero ? { marginTop: "550px" } : {}}
    >
      <div className="section-body floating">
        <h2 className="section-title">A few things I believe in:</h2>
        <ul className="icon-list">
          {BioValues.map((item) => (
            <li key={item.title} className="bio_list_item list-icon">
              {item.icon} {item.title} -{" "}
              <span className="text-muted">{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
