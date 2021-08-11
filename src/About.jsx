import Title from "./components/title/Title";
import GithubSvg from "./components/svgIcon/GithubSvg";
import LinkdinSvg from "./components/svgIcon/LinkdinSvg";
import PhoneSvg from "./components/svgIcon/PhoneSvg";
import EmailSvg from "./components/svgIcon/EmailSvg";
function About() {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <Title title="About Me" />
          <div className="about_me">
            <p>
              Hi!, I'm Senior Flutter Mobile Application Developer with around
              2.8 years’ experience in software development lifecycle (SDLC)
              including analysis, design, development, and testing, deployment
              and documentation as per ISO standards. Experience in Mobile
              Application Operating systems like iOS and Android. Skilled,
              motivated and product-oriented mobile application developer with
              strong Object Oriented Programming Concepts and design skills
              Experience in developing iPhone and iPad apps.
            </p>
          </div>
          <div className="social_link">
            <a href="https://github.com/fdeveloper786" className="social_btn">
              <GithubSvg />
              <span>Github</span>
            </a>
            <a
              href="https://www.linkedin.com/in/mohammadjawedahmadansari-1012354"
              className="social_btn"
            >
              <LinkdinSvg />
              <span>Linkdin</span>
            </a>
            <a href="mailto:fdeveloper786@gmail.com" className="social_btn">
              <EmailSvg />
              <span>Email</span>
            </a>
            <a href="tel:9006410625" className="social_btn">
              <PhoneSvg />
              <span>Phone</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
