import { easeOut } from "motion";
import { motion } from "motion/react";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import bannerImage from "../../../assets/harun.png";
export default function Banner() {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-800 lg:h-[550px] flex flex-col lg:flex-row lg:items-center">
      <div className="w-full lg:w-1/2 h-full flex flex-col justify-center p-8">
        <motion.h2
        animate={{ x: 50, color: ["#ff6133", "#FFFF"] }}
        transition={{
          duration: 2,
          delay: 1,
          ease: easeOut,
          repeat: Infinity,
        }}
         className="text-2xl md:text-4xl xl:text-5xl font-bold mt-14">Hi, I'm Harunur Rosid</motion.h2>
        <h3 className="text-teal-400 mt-4 text-xl md:text-2xl font-bold">
        A passionate Full Stack Developer From Bangladesh
        </h3>
        <p className="text-white mt-4">
        Creating Fast, Responsive and User-Centered Web Experience.
        </p>
        {/* Social Icon */}
        <div className="flex items-center gap-3 mt-5">
            <Link to='https://github.com/HarunBappi' target="_blank" className="border-2 border-teal-600  rounded-full">
               <FaGithub className="text-white text-3xl p-1"></FaGithub>
            </Link>
            <Link to='https://www.linkedin.com/in/md-harunur-rashid-bappi-99230412a/' target="_blank" className="border-2 border-teal-600  rounded-full">
                <FaLinkedinIn className="text-white text-3xl p-1"></FaLinkedinIn>
            </Link> 
            <Link to='https://www.facebook.com/harunbappi0110/' target="_blank" className="border-2 border-teal-600 rounded-full">
             <FaFacebook className="text-white text-3xl p-1"></FaFacebook>
            </Link> 
        </div>
        <div className="mt-4">
        <Link to='https://docs.google.com/document/d/1oKGq_ftqcD5FNKTg6hus0Nx7KpLs-QXO/edit' target="_blank">
            <button className="btn text-white border-none bg-teal-600  hover:bg-teal-800">Download Resume</button>
        </Link>
        </div>
      </div>
      {/* right */}
      <div className="w-full lg:w-1/2 h-full">
        <div className=" w-full h-full flex justify-center items-end ">
          <img
            src={bannerImage}
            alt=""
            className="w-3/4"
          />
        </div>
      </div>
    </div>
  );
}
