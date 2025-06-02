import '../css/Submenu.css';
import { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from '../Context';

function Submenu() {
    const { isSubmenuOpen, location, page } = useGlobalContext();
    const container = useRef(null);

    useEffect(() => {
        const submenu = container.current;
        const { center, bottom } = location;
        submenu.style.left = `${center}px`
        submenu.style.top = `${bottom}px`
    }, [location])

    return (
        <aside className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`} ref={container}>
            submenu
        </aside>
    )
}

export default Submenu;