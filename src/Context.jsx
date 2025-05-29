import { useState, useContext, createContext } from 'react';
import sublinks from './data';

const AppContext = createContext();

const AppProvider = ({ children }) => {
    [isSidebarOpen, setIsSidebarOpen] = useState(true);
    [isSubmenuOpen, setIsSubmenuOpen] = useState(true);

    const openSidebar = () => {
        setIsSidebarOpen(true);
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }

    const openSubmenu = () => {
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