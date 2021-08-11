import GithubSvg from "../svgIcon/GithubSvg";
import LinkSvg from "../svgIcon/LinkSvg";
function WorkCard({
  image = "",
  title = "",
  description = "",
  techIcon = [],
  websiteUrl = "",
  githubUrl = "",
}) {
  return (
    <>
      <div className="col-4 col-s-12">
        <div className="card">
          <div className="card_image">
            <img src={`/images/mywork/${image}`} alt={title} />
          </div>
          <div className="card_title">
            <h3>{title}</h3>
          </div>
          <div className="card_body">
            <div className="project_info">
              <p>{description}</p>
            </div>
            <div className="tech_info">
              {techIcon.length >0
                ? techIcon.map((tech,i) => {
                    return (
                      <div className="tech_image" key={i}>
                        <img src={`/images/icons/${tech}`} alt={title} />
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
          <div className="row">
            <div className="col-6 col-s-6">
              <a href={githubUrl} className="card_btn">
                <GithubSvg />
                <span>Github</span>
              </a>
            </div>
            <div className="col-6 col-s-6">
              <a href={websiteUrl} className="card_btn">
                <LinkSvg />
                <span>Live</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkCard;
