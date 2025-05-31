import { FaTimes } from 'react-icons/fa';
import sublinks from '../data';
import { useGlobalContext } from '../Context';

function Sidebar() {
    const { isSidebarOpen, closeSidebar } = useGlobalContext();

    return (
        <aside className={`${isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'}`}>
            Sidebar
        </aside>
    )
}

export default Sidebar;