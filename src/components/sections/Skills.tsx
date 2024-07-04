import Section from "../Section";
import { skills } from "../../core/datas/skills";
import SkillPill from "../SkillPill";



export default function Skills() {
  //randomize skills order
  skills.sort(() => Math.random() - 0.5)

  return (
    <Section id="skills" title="Mon Nuage de Compétences">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        {
          skills.map((skill, index) => (
            <SkillPill
              key={index}
              skill={skill}
            />
          ))
        }
      </div>
    </Section>
  );
}