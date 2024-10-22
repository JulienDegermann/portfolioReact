import Section from "../../../../components/Section";
import Image from "../../../../assets/images/ide.jpeg";
import ImageSmall from "../../../../assets/images/meSmall.webp";
import ImageMedium from "../../../../assets/images/meMedium.webp";
import './styles.css'
import Button from "../../../../components/Button/index.tsx";

// import {Colors} from "../../../../core/styles/colors.ts";
// import NavBar from "./NavBar";

export default function Presents() {
    // const birthdate = new Date('1988-10-18');
    // const now = new Date();
    // const age = now.getMonth() < birthdate.getMonth() ? now.getFullYear() - birthdate.getFullYear() - 1 : now.getFullYear() - birthdate.getFullYear();

    return (
        <Section
            id="presents"
            hero={true}
        >
            <picture>
                <source srcSet={ImageSmall} media="(max-width: 400px)"/>
                <source srcSet={ImageMedium} media="(max-width: 800px)"/>
                <img src={Image} alt="photo de julien degermann"/>
            </picture>
            <div className={'container'}>
                <div id="heroTitle">
                    <h2>Besoin de renforcer <br/><span>votre équipe ?</span></h2>
                    <h3>Développeur Full-Stack</h3>
                    <div>PHP | Symfony | JS | TS | React</div>
                    <Button
                        id={'contact'}
                        text={'me contacter'}
                        className={'cta'}
                    />
                </div>
            </div>
        </Section>
    )
}