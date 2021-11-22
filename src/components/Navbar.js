import React from 'react';

function NavTabs(currentPage) {
    // const styles = {
    //     position: "fixed",
    //     right: "0",
    //     bottom: "0",
    //     left: "90%",
    //     zIndex: "1030"
    //   };
    return (
        <nav id="navbar">
            <ul className="nav justify-content-center" >
                <li className="nav-item">
                    <a href="#home" className="nav-link">
                        home.
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#about" className="nav-link">
                        about.
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#projects" className="nav-link">
                        projects.
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#contact" className="nav-link">
                        contact.
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default NavTabs;
