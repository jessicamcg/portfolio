import Footer from "./Footer";
import NavTabs from "./Navbar";
import SupIcon from "../images/greetings.png"

export default function PortfolioContainer() {
    const styles = {
        width: "200px"
      };
    return (
      <div className="d-flex flex-column align-middle justify-content-center">
        <NavTabs />
        <img className="mx-auto my-3" style={styles }src={SupIcon} alt={"sup"}/>
        <Footer/>
      </div>
    );
  }
  