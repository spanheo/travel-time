import Github from "../../assets/images/socials/github.svg";
import Linkedin from "../../assets/images/socials/linkedin.svg";
import Portfolio from "../../assets/images/socials/portfolio.png";

const Socials = () => {
  return (
    <section className="flex flex-row gap-3">
      <a
        href="https://github.com/spanheo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="w-6 h-6 max-w-full" src={Github} alt="Github icon" />
      </a>
      <a
        href="https://github.com/spanheo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="w-6 h-6 max-w-full"
          src={Linkedin}
          alt="Linkedin icon"
        />
      </a>
      <a
        href="https://harsha-konda.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="w-6 h-6  max-w-full"
          src={Portfolio}
          alt="Portfolio icon"
        />
      </a>
    </section>
  );
};

export default Socials;
