import { useState, useContext, createContext } from 'react';
import sublinks from './data.jsx';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [location, setLocation] = useState({});

    const openSidebar = () => {
        setIsSidebarOpen(true);
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }

    const openSubmenu = (text, coordinates) => {
        setLocation(coordinates);
        setIsSubmenuOpen(true);
    }

    const closeSubmenu = () => {
        setIsSubmenuOpen(false);
    }

    return (
        <AppContext.Provider 
            value={{
                isSubmenuOpen, 
                isSidebarOpen, 
                openSubmenu, 
                openSidebar, 
                closeSubmenu, 
                closeSidebar
            }}>
                {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}