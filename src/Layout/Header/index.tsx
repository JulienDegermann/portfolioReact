// import { Colors } from "../../core/styles/colors";
import './style.css'
import {networks} from "../../core/datas/networks.ts";
import {Link} from "react-router-dom";
import {useState, useEffect} from "react";
import CloseMenu from '../../components/SVG/CloseMenu.tsx'
import OpenMenu from '../../components/SVG/OpenMenu.tsx'
// import Navigation from "./Navigation";


export default function Header() {

    const [menuOpened, setMenuOpened] = useState(false);

    // avoid scroll when menu is opened
    useEffect(() => {
        document.body.style.overflow = menuOpened ? 'hidden' : 'auto'
    }, [menuOpened])

    // function to close menu by pressing "escape" key
    const escape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            setMenuOpened(false)
        }
    }

    // close menu while pressing "escape" key
    useEffect(() => {
        document.addEventListener('keydown', e => {
            escape(e);
        })
        return (
            document.removeEventListener('keydown', e => {
                escape(e)
            })
        )
    }, [])
    return (
        <header id="header">
            <div className="container">
                <div>
                    <Link to={'/'}>
                        <h1 id="mainTitle"> Julien Degermann</h1>
                    </Link>
                    <div className={'links'}>
                        <div id={'networks'}>
                            {networks.map((network, index) =>
                                <a key={index} target={'_blank'} id={network.name} href={network.url}>
                                    <img src={`./src/assets/images/networks/${network.icon}`} alt={`lien vers ${network.name}`} />
                                </a>)
                            }
                        </div>
                        {/* <button
                            id={'menuToggle'}
                            aria-label={menuOpened ? 'Fermer le menu de navigation' : 'Ouvrir le menu de navigation'}
                            className={menuOpened ? 'close' : 'open'}
                            role={'Menu toggler'}
                            onClick={() => {
                                setMenuOpened(!menuOpened)
                            }}
                        >
                            {menuOpened ? <CloseMenu/> : <OpenMenu/>}

                        </button> */}
                    </div>
                </div>


            </div>
            {/* <Navigation menuOpened={menuOpened}/> */}
        </header>
    )
}