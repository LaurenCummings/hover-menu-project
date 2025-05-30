import logo from '../images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from '../Context';

function Navbar() {
    const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

    return (
        <nav className="nav">
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} alt="stripe" />

                </div>
                <ul className="nav-links">

                </ul>
            </div>
        </nav>
    )
}

export default Navbar;