import { easeOut } from "motion";
import { motion } from "motion/react";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import bannerImage from "../../../assets/harun.png";
export default function Banner() {
  return (
    <div className="bg-gray-100 h-[550px] flex items-center relative">
      <div className="w-1/2 bg-[#2C3E50] h-full flex flex-col justify-center p-10">
        <motion.h2
        animate={{ x: 50, color: ["#ff6133", "#FFFF"] }}
        transition={{
          duration: 2,
          delay: 1,
          ease: easeOut,
          repeat: Infinity,
        }}
         className="text-5xl font-bold">Hi, I'm Harunur Rosid</motion.h2>
        <h3 className="text-orange-600 mt-4 text-3xl font-bold">
        Frontend Developer
        </h3>
        <p className="text-white mt-4">
        Creating Fast, Responsive and User-Centered Web Experience.
        </p>
        {/* Social Icon */}
        <div className="flex items-center gap-3 mt-5">
            <Link to='https://github.com/HarunBappi' target="_blank" className="border-2 border-orange-400 rounded-full">
               <FaGithub className="text-white text-3xl p-1"></FaGithub>
            </Link>
            <Link to='https://www.linkedin.com/in/md-harunur-rashid-bappi-99230412a/' target="_blank" className="border-2 border-orange-400 rounded-full">
                <FaLinkedinIn className="text-white text-3xl p-1"></FaLinkedinIn>
            </Link> 
            <Link to='https://www.facebook.com/harunbappi0110/' target="_blank" className="border-2 border-orange-400 rounded-full">
             <FaFacebook className="text-white text-3xl p-1"></FaFacebook>
            </Link> 
        </div>
        <div className="mt-4">
        <Link to='https://docs.google.com/document/d/1oKGq_ftqcD5FNKTg6hus0Nx7KpLs-QXO/edit' target="_blank">
            <button className="btn text-white border-none bg-teal-600 hover:bg-orange-600">Download Resume</button>
        </Link>
        </div>
      </div>
      {/* right */}
      <div className="w-1/2 h-full bg-[#ECF0F1] relative overflow-hidden">
        {/* Shape */}
        <div
          className="absolute top-0 left-0  h-full w-full  bg-[#ebecec]"
          style={{ "clip-path": "polygon(15% 100%, 100% 0, 0 0, 0% 100%)" }}
        ></div>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-end ">
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
