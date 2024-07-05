import { Colors } from "../../core/styles/colors";
import Section from "../Section";
import Card from "../Cards/Card";

export default function Values() {
  

  return (
    <Section id="services" title='Mes valeur de dév' large={true}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'flex-start',
          color: Colors.DARK,
          height: '400px',
        }}
      >
        <Card
          title="Rigueur"
          image="web.jpg"
        >
          <p>
            La rigueur est une qualité essentielle. Elle permet de garantir un code de qualité, respectant .


          </p>
        </Card>
        <Card title="Curiosité" image="curious.jpg">
          <p>
            La volonté d'apprendre, de comprendre et de s'améliorer est une qualité essentielle pour un développeur.
          </p>
        </Card>
        <Card
          title="Adpatabilité"
          image="ditto.jpeg"
        >
          <p>
            Dans un monde où tout change rapidement, il est important de savoir s'adapter pour rester compétitif.
            Que ce soit la technologie, les besoins ou encore les normes,
          </p>
        </Card>
        <Card
          title="Esprit d'équipe"
          image="team.jpg"
        >
          <p>
            Travailler en équipe est une des clés du succès. C'est pourquoi il est important de savoir communiquer, écouter et collaborer.
          </p>
        </Card>
      </div>
    </Section>
  )
}