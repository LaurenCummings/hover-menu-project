import '../css/Sidebar.css';
import { FaTimes } from 'react-icons/fa';
import sublinks from '../data';
import { useGlobalContext } from '../Context';

function Sidebar() {
    const { isSidebarOpen, closeSidebar } = useGlobalContext();

    return (
        <aside className={`${isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'}`}>
            <div className="sidebar">
                <button className="close-btn" onClick={closeSidebar}>
                    <FaTimes />
                </button>
            </div>
        </aside>
    )
}

export default Sidebar;