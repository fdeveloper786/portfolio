import Title from './components/title/Title';
import TechProficiency from './components/techProficiency/TechProficiency';
import techProficiency from './data/techProficiency'
function Skill() {
  return (
    <>
      <section className="skill" id="skill">
        <div className="container">
        <Title title="Tech Proficiency" />
          <div className="tech_proficiency row">
          {
            techProficiency.map((tech,i)=><TechProficiency language={tech.language} logo={tech.logo} clsName={tech.class} key={i} />)
          }
          </div>
        </div>
      </section>
    </>
  );
}

export default Skill;
