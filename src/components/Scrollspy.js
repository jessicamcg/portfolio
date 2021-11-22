import React from "react";
import Home from "./pages/Home";
import About from './pages/About';
import ProjectsContainer from "./ProjectsContainer";
import Contact from './pages/Contact';

function Scrollspy() {
    return (
        <div data-bs-spy="scroll" data-bs-target="#navbar" data-bs-offset="0" tabindex="0" className="d-flex flex-column align-middle mx-auto text-center">
            <Home/>
            <About/>
            <ProjectsContainer/>
            <Contact/>
        </div>
    )
}

export default Scrollspy;