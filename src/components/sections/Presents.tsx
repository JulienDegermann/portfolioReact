import { Colors } from "../../core/styles/colors";
import Section from "../Section";
import Image from "../../assets/images/me.webp";

export default function Presents() {
  return (
    <Section
      id="about"
      title="Me, Myself and I"
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <img
          src={Image}
          alt="Photo de moi"
          style={{
            maxWidth: '300px',
          }}
        />
        <div
          style={{
            color: Colors.DARK,
            lineHeight: '2',
            width: '100%',
            marginLeft: '2rem',
          }}
        >
          <h3>Quelques infos sur moi</h3>
          <p>Prénom : Julien</p>
          <p>Nom : Degermann</p>
          <p>Âge : 35 ans</p>
          <p></p>
          <p>Prénom : Julien</p>
          <p>Prénom : Julien</p>
        </div>
      </div>
    </Section>
  )
}