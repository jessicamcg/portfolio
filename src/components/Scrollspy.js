import React from "react";

function Scrollspy() {
    return (
        <div data-bs-spy="scroll" data-bs-target="#navbar" data-bs-offset="0" tabindex="0" className="d-flex flex-column align-middle mx-auto text-center">
            <h4 id="home"></h4>
            <p>...</p>
            <h5 id="about"></h5>
            <p>...</p>
            <h5 id="blog"></h5>
            <p>...</p>
            <h4 id="contact"></h4>
            <p>...</p>
        </div>
    )
}

export default Scrollspy;