import { Fade } from "react-awesome-reveal";
import { useReset } from "../hooks/useReset";
import { RESUME_PATH } from "../data/SiteLinks";
import { BIO_TEXT } from "../data/BioText";
import BioSnippet from "./BioSnippet";

const About = () => {
  const resetUrl = useReset();

  return (
    <section id="about">
      <div className="section-body">
        <h1 className="section-title">About</h1>
        <div className="bio tile">
          <span id="bio-block">
            <section className="bio-text">
              {BIO_TEXT.map((snippet, index) => (
                <BioSnippet key={index} text={snippet} />
              ))}
            </section>
            <Fade className="btns-wrap">
              <div className="visit-btns">
                <a className="button" href={RESUME_PATH} target="_blank">
                  Resume
                </a>
                <a
                  className="button live"
                  href="#contact-ref"
                  onClick={resetUrl}
                >
                  Get in Touch
                </a>
              </div>
            </Fade>
          </span>
          <Fade>
            <img
              id="bio-img"
              src="https://images.squarespace-cdn.com/content/v1/58c9909ce58c627a188f8a64/ad9e7ee7-964e-4151-96a6-e99d81353fd2/20201007.JPG?format=2500w"
              alt="Profile picture"
              loading="lazy"
            />
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default About;
