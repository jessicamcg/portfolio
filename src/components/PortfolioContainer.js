import React, { useState } from "react";
import Footer from "./Footer";
import NavBar from "./Navbar";
import Body from "./Body";

export default function PortfolioContainer() {
    return (
      <div className="d-flex flex-column align-middle justify-content-center">
        <NavBar />
        <Body/>
        <Footer/>
      </div>
    );
  }
  