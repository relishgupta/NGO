import Home from "../components/home";
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
        <Home/>
        <About/>
        <Aims/>
        <Services/>
        <Team/>
        <Footer/>
    </>
  )
}

export default Homepage;