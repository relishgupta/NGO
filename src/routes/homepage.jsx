import Home from "../components/home";
import About from "../components/about";
import Mission from "../components/mission";
import Projects from "../components/projects";
import Team from "../components/team";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";

const Homepage = () => {
  return (
    <>
        <Outlet/>
        <Home/>
        <About/>
        <Mission/>
        <Projects/>
        <Team/>
        <Footer/>
    </>
  )
}

export default Homepage;