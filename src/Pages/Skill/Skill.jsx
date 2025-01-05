import css from "../../assets/icons/css.png";
import figma from "../../assets/icons/figma.png";
import git from "../../assets/icons/git.png";
import html from "../../assets/icons/html.png";
import js from "../../assets/icons/js.png";
import mongodb from "../../assets/icons/mongodb.png";
import node from "../../assets/icons/node.png";
import react from "../../assets/icons/react.png";
import sass from "../../assets/icons/sass.png";
import tailwind from "../../assets/icons/tailwind.png";

export default function Skill() {
  return (
    <div id="skill" className="bg-gray-100 text-gray-800 py-8">
      <h2 className="text-3xl text-center w-1/6  mx-auto  border-2 border-teal-600  rounded-md py-1">
        Skills
      </h2>
      <div className="w-7/12 mx-auto flex flex-col">
        {/* html */}
        <div className="flex items-center gap-2">
          <img className="w-12" src={html} alt="" />
          <progress
            className="progress progress-success w-2/3"
            value="100"
            max="100"
          ></progress>
          <p>100%</p>
        </div>
        {/* css */}
        <div className="flex items-center gap-2">
          <img className="w-12" src={css} alt="" />
          <progress
            className="progress progress-success w-2/3"
            value="90"
            max="100"
          ></progress>
          <p>95%</p>
        </div>
        {/* SASS */}
        <div className="flex items-center gap-2">
          <img className="w-12" src={sass} alt="" />
          <progress
            className="progress progress-success w-2/3"
            value="90"
            max="100"
          ></progress>
          <p>90%</p>
        </div>
        {/* JS */}
        <div className="flex items-center gap-2">
          <img className="w-12" src={js} alt="" />
          <progress
            className="progress progress-success w-2/3"
            value="75"
            max="100"
          ></progress>
          <p>75%</p>
        </div>
        {/* REACTJS */}
        <div className="flex items-center gap-2">
          <img className="w-12" src={react} alt="" />
          <progress
            className="progress progress-success w-2/3"
            value="85"
            max="100"
          ></progress>
          <p>85%</p>
        </div>
        {/* Tailwind */}
        <div className="flex items-center gap-2">
          <img className="w-12" src={tailwind} alt="" />
          <progress
            className="progress progress-success w-2/3"
            value="100"
            max="100"
          ></progress>
          <p>100%</p>
        </div>
        {/* GIT */}
        <div className="flex items-center gap-2">
          <img className="w-12" src={git} alt="" />
          <progress
            className="progress progress-success w-2/3"
            value="90"
            max="100"
          ></progress>
          <p>90%</p>
        </div>
        {/* FIGMA */}
        <div className="flex items-center gap-2">
          <img className="w-12" src={figma} alt="" />
          <progress
            className="progress progress-success w-2/3"
            value="90"
            max="100"
          ></progress>
          <p>80%</p>
        </div>
        {/* NODE */}
        <div className="flex items-center gap-2">
          <img className="w-12" src={node} alt="" />
          <progress
            className="progress progress-success w-2/3"
            value="85"
            max="100"
          ></progress>
          <p>85%</p>
        </div>
        {/* NODE */}
        <div className="flex items-center gap-2">
          <img className="w-12" src={mongodb} alt="" />
          <progress
            className="progress progress-success w-2/3"
            value="85"
            max="100"
          ></progress>
          <p>85%</p>
        </div>
      </div>
    </div>
  );
}
