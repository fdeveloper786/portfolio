import Title from "./components/title/Title";
import WorkCard from "./components/workCard/WorkCard";
import myWork from './data/myWork'
function Work() {
  return (
    <>
      <section className="work" id="work">
        <div className="container">
          <Title title="My Work" />
          <div className="my_work row">
          {myWork.map((work,i)=><WorkCard image={work.image} title={work.title} description={work.description} techIcon={work.techIcon} websiteUrl={work.websiteUrl} githubUrl={work.githubUrl} key={i} />)}  
          </div>
        </div>
      </section>
    </>
  );
}

export default Work;
