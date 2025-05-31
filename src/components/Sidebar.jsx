import { FaTimes } from 'react-icons/fa';
import sublinks from '../data';
import { useGlobalContext } from '../Context';

function Sidebar() {
    const { isSidebarOpen, closeSidebar } = useGlobalContext();

    return (
        <div>
            Sidebar
        </div>
    )
}

export default Sidebar;