import Button from "./components/button/Button";
import HerobgSvg from "./components/svgIcon/HerobgSvg";
import EmailSvg from "./components/svgIcon/EmailSvg";
import PhoneSvg from "./components/svgIcon/PhoneSvg";
function Introduction() {
  return (
    <>
      <section className="home">
        <div className="bg_hero">
          <HerobgSvg />
        </div>
        <div className="container">
          <div className="intro_section">
            <div className="profile_image">
              <div className="image">
                <img src="/images/profile.jpg" alt="" />
              </div>
            </div>
            <div className="intro">
              <h1>Hi there!</h1>
              <h2>I’m Mohammad Jawed Ahmad</h2>
              <h3>Flutter Developer</h3>
            </div>

            <div className="contact_info">
              <div className="contact">
                <span>
                  <EmailSvg />
                </span>
                <span>fdeveloper786@gmail.com</span>
              </div>
              <div className="contact">
                <span>
                  <PhoneSvg />
                </span>
                <span>9006410625</span>
              </div>
            </div>

            <div className="btn_group">
              <Button
                link="#work"
                btnType="btn_primary_outline"
                text="My Work"
              />
              <Button
                link="https://docs.google.com/document/d/1Hr04Ytyin5pYS4ooIjeBsaHZ_hJAd5Kl/edit?usp=sharing&ouid=108218941780456205301&rtpof=true&sd=true"
                btnType="btn_primary"
                 
                text="Resume"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Introduction;
