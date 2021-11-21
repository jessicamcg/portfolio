import Footer from "./Footer";
import NavTabs from "./Navbar";

export default function PortfolioContainer() {
  
    return (
      <div>
        <NavTabs />
        <h1>sup</h1>
        <img src={require("../images/greetings.png")} alt={"sup"}/>
        <Footer/>
      </div>
    );
  }
  