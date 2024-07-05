import Section from "../../../components/Section"
import { networks } from "../../../core/datas/networks"
import ContactPill from "../../../components/ContactPill"

export default function Contact() {

  return (
    <Section
      id="contact"
      title="Contact"
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {
          networks.map((network, index) => {
            return (
              <ContactPill
                key={index}
                network={network}
              />
            )
          })
        }

      </div>
    </Section>
  )
}