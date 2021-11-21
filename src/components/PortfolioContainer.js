import React, { useState } from "react";
import Footer from "./Footer";
import NavBar from "./Navbar";
import SupIcon from "../images/greetings.png"
import Scrollspy from "./Scrollspy";

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');
    const styles = {
        width: "200px"
      };
    return (
      <div className="d-flex flex-column align-middle justify-content-center">
        <NavBar />
        <img className="mx-auto my-3" style={styles} src={SupIcon} alt={"sup"}/>
        <Scrollspy/>
        <Footer/>
      </div>
    );
  }
  