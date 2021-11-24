import React, { useState } from "react";
import Footer from "./Footer";
import NavBar from "./Navbar";
import SupIcon from "../images/greetings.png"
import Body from "./Body";

export default function PortfolioContainer() {
    const styles = {
        width: "200px"
      };
    return (
      <div className="d-flex flex-column align-middle justify-content-center">
        <NavBar />
        <img className="mx-auto my-5" style={styles} src={SupIcon} alt={"sup"}/>
        <Body/>
        <Footer/>
      </div>
    );
  }
  