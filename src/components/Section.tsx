import { Colors } from "../core/styles/colors"


interface SectionProps {
  id: string,
  title?: string,
  children?: React.ReactNode
  large?: boolean
  hero?: boolean
}

export default function Section(
  { id, title, children, large, hero }: SectionProps
) {

  return (
    <section
      id={id}
      style={{
        padding: hero ? '0' : '2rem',
        color: Colors.LIGHT,
        marginTop: '0',
        height: hero ? 'calc(80vh - 125px)' : 'auto',
      }}
    >
      <div
        style={({
          maxWidth: large || hero ? '100%' : '800px',
          height: '100%',
          margin: '0 auto',
          color: Colors.LIGHT
        })}
      >

        {title && <h2
          style={{
            color: Colors.DARK,
            textTransform: 'uppercase',
            marginBottom: '1rem',
            marginTop: '3rem',
            textAlign: large ? 'center' : 'left'
          }}
        >
          {title}
        </h2>}
        {children}
      </div>
    </section>
  )
}