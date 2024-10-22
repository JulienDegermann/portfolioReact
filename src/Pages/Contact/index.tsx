import Section from "../../components/Section";
import {Link} from "react-router-dom";

export default function Contact() {
    return (
        <Section
            id={'contact'}
            title={'Contact'}>

            <Link to={'/'}> coucou</Link>

        </Section>
    )
}