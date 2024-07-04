import Section from "../Section"
import { networks } from "../../core/datas/networks"
// import ContactPill from "../ContactPill"

export default function Contact() {
  console.log(networks)
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
            {/* {
              networks.map((network, index) => {
                return (
                  <ContactPill
                    key={index}
                    network={network}
                  />
                )
              })
            } */}

          </div>
        </Section>
  )
}