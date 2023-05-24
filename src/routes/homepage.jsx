import About from "../components/about";
import Aims from "../components/aims";
import Services from "../components/services";
import Team from "../components/team";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";
    
const Homepage = () => {
  return (
    <>
        <Outlet/>
        <About/>
        <Aims/>
        <Services/>
        <Team/>
        <Footer/>
    </>
  )
}

export default Homepage;