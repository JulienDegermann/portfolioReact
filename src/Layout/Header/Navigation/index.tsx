import {Link} from "react-router-dom";
import {routes} from "../../../core/routes.tsx";

export default function Navigation({menuOpened}: NavigationProps) {
    return (
        <ul
            className={menuOpened ? 'navigation expanded' : 'navigation'}
            role='Menu de navigation'
            aria-label={'Menu de navigation'}
            aria-expanded={menuOpened}
        >
            {routes.map((route, index) =>
                <li key={index}>
                    <Link to={route.url}>
                        {route.text}
                    </Link>
                </li>
            )}
        </ul>
    )
}

interface NavigationProps {
    menuOpened: boolean
}