// styles
import './styles.css'


interface SectionProps {
    id: string,
    title?: string,
    children?: React.ReactNode
    large?: boolean
    hero?: boolean
}

export default function Section(
    {id, title, children, large, hero}: SectionProps
) {

    return (
        <section
            id={id}
            className={hero ? 'hero' : ''}
        >
            {title && <h3 className={'sectionTitle'}>{title}</h3>}

            <div className={hero ? 'container hero' : large ? 'container large' : 'container'}>
                {children}
            </div>
        </section>
    )
}