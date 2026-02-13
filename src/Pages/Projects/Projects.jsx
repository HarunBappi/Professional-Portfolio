import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Projects() {
    const [project, setProject] = useState([])
   useEffect(()=>{
    fetch('project.json')
    .then(res=> res.json())
    .then(data => {
        setProject(data)
    })
   },[])
      useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
      return (
        <section id="projects" className="bg-gray-100 py-12">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold border-b-2 border-teal-600 rounded-md text-gray-800 text-center mb-8 md:w-3/12 mx-auto py-2" >
              My Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {project.map((project) => (
                <div key={project.id} className="relative group" data-aos="fade-right">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center rounded-lg">
                    <h3 className="text-white text-xl font-bold mb-4">
                      {project.title}
                    </h3>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      className="bg-teal-600 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded mb-2"
                    >
                      View Live
                    </a>
                    <Link to={`/details/${project.id}`}
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
}
