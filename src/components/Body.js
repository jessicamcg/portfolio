import React from "react";
import Home from "./pages/Home";
import About from './pages/About';
import ProjectsContainer from "./ProjectsContainer";
import Contact from './pages/Contact';
import Skills from './pages/Skills'

function Body() {
    return (
        <div className="d-flex flex-column align-middle mx-auto text-center">
            <Home/>
            <About/>
            <Skills/>
            <ProjectsContainer/>
            <Contact/>
        </div>
    )
}

export default Body;