import React from "react";

function Scrollspy() {
    return (
        <div data-bs-spy="scroll" data-bs-target="#navbar" data-bs-offset="0" tabindex="0" className="d-flex flex-column align-middle mx-auto text-center">
            <h4 id="home"></h4>
            <p>...</p>
            <h4 id="about"></h4>
            <p>stuff about me</p>
            <p>bio</p>
            <h4 id="projects"></h4>
            <p>"project 3 placeholder"</p>
            <p>trip tunes</p>
            <p>tech blog</p>
            <p>dnd character tracker</p>
            <h4 id="contact"></h4>
            <a href="https://github.com/jessicamcg">github</a>
        </div>
    )
}

export default Scrollspy;