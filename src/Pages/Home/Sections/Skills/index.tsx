// contexts
import { useContext } from "react";
import { StacksContext } from "../../../../hooks/contexts/useStacks.tsx";

// components
import Section from "../../../../components/Section";
import SkillPill from "./SkillPill";

export default function Skills() {
  const stacks = useContext(StacksContext);

  //randomize skills order
  stacks.sort(() => Math.random() - 0.5);

  return (
    <Section id="skills" title="Mon Nuage de Compétences">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {stacks.map((skill, index) => (
          <SkillPill key={index} skill={skill} />
        ))}
      </div>
    </Section>
  );
}
