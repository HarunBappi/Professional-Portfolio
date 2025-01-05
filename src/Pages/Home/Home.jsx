import About from "../About/About";
import ContactMe from "../ContactMe/ContactMe";
import Projects from "../Projects/Projects";
import Skill from "../Skill/Skill";
import Banner from "./Banner/Banner";


export default function Home() {
  return (
    <div id="home">
        <Banner></Banner>
        <About></About>
        <Skill></Skill>
        <Projects></Projects>
        <ContactMe></ContactMe>
    </div>
  )
}
