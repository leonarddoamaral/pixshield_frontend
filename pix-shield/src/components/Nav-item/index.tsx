import { Link } from 'react-router-dom'
import '../header/styles.css'

export interface NavItemInterface {
    url: string;
    label: string;
}

function NavItem(props: NavItemInterface) {

    return (
        <>
            <li className="nav-item">
                <Link to={props.url}> {props.label} </Link>
            </li>
        </>
    )
}

export default NavItem
