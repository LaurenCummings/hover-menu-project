import logo from '../images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from '../Context';

function Navbar() {
    const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

    return (
        <div>
            Navbar
        </div>
    )
}

export default Navbar;