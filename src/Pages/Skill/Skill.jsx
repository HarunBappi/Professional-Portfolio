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
    <div id="skill" className="bg-[#011122] text-gray-200 py-8">
      <h2 className="text-3xl text-center w-1/2 lg:w-1/6 mx-auto  border-2 border-teal-600  rounded-md py-1">
        Skills
      </h2>
      <div className="w-3/6 mx-auto flex flex-col mt-4 space-y-1">
        {/* html */}
        <div className="flex items-center gap-2">
          <img className="w-10" src={html} alt="" />
          <progress
            className="progress bg-slate-700 progress-success w-2/3"
            value="100"
            max="100"
          ></progress>
          <p>100%</p>
        </div>
        {/* css */}
        <div className="flex items-center gap-2">
          <img className="w-10" src={css} alt="" />
          <progress
            className="progress bg-slate-700 progress-success w-2/3"
            value="90"
            max="100"
          ></progress>
          <p>95%</p>
        </div>
        {/* SASS */}
        <div className="flex items-center gap-2">
          <img className="w-10" src={sass} alt="" />
          <progress
            className="progress bg-slate-700 progress-success w-2/3"
            value="90"
            max="100"
          ></progress>
          <p>90%</p>
        </div>
        {/* JS */}
        <div className="flex items-center gap-2">
          <img className="w-10" src={js} alt="" />
          <progress
            className="progress bg-slate-700 progress-success w-2/3"
            value="75"
            max="100"
          ></progress>
          <p>75%</p>
        </div>
        {/* REACTJS */}
        <div className="flex items-center gap-2">
          <img className="w-10" src={react} alt="" />
          <progress
            className="progress bg-slate-700 progress-success w-2/3"
            value="85"
            max="100"
          ></progress>
          <p>85%</p>
        </div>
        {/* Tailwind */}
        <div className="flex items-center gap-2">
          <img className="w-10" src={tailwind} alt="" />
          <progress
            className="progress bg-slate-700 progress-success w-2/3"
            value="100"
            max="100"
          ></progress>
          <p>100%</p>
        </div>
        {/* GIT */}
        <div className="flex items-center gap-2">
          <img className="w-10" src={git} alt="" />
          <progress
            className="progress bg-slate-700 progress-success w-2/3"
            value="90"
            max="100"
          ></progress>
          <p>90%</p>
        </div>
        {/* FIGMA */}
        <div className="flex items-center gap-2">
          <img className="w-10" src={figma} alt="" />
          <progress
            className="progress bg-slate-700 progress-success w-2/3"
            value="90"
            max="100"
          ></progress>
          <p>80%</p>
        </div>
        {/* NODE */}
        <div className="flex items-center gap-2">
          <img className="w-10" src={node} alt="" />
          <progress
            className="progress bg-slate-700 progress-success w-2/3"
            value="85"
            max="100"
          ></progress>
          <p>85%</p>
        </div>
        {/* MongoDB */}
        <div className="flex items-center gap-2">
          <img className="w-10" src={mongodb} alt="" />
          <progress
            className="progress bg-slate-700 progress-success w-2/3"
            value="85"
            max="100"
          ></progress>
          <p>85%</p>
        </div>
      </div>
    </div>
  );
}
