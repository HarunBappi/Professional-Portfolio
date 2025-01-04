import About from "../About/About";
import Skill from "../Skill/Skill";
import Banner from "./Banner/Banner";


export default function Home() {
  return (
    <div id="home">
        <Banner></Banner>
        <About></About>
        <Skill></Skill>
    </div>
  )
}
