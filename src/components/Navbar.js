import React from 'react';

function NavTabs(currentPage) {
    const styles = {
        position: "fixed",
        right: "0",
        bottom: "0",
        left: "90%",
        zIndex: "1030"
      };
    return (
        <nav id="navbar">
            <ul className="nav flex-column" style={styles}>
                <li className="nav-item">
                    <a
                        href="#home"
                        className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                    >
                        home.
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#about"
                        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                    >
                        about.
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#blog"
                        className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
                    >
                        blog.
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#contact"
                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                    >
                        contact.
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default NavTabs;
