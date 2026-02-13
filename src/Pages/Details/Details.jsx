import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Details() {
    const {id} = useParams()
     const [projects, setProjects] = useState([])
       useEffect(()=>{
        fetch('/project.json')
        .then(res=> res.json())
        .then(data => {
            const selectedProject = data.find(project => project.id === parseInt(id))
            setProjects(selectedProject)
        })
       },[id])
  return (
      <div className="container mx-auto px-6 mt-4 py-4 shadow-xl">
        <h1 className="text-4xl font-bold text-white mb-2">
          {projects.title}
        </h1>
        <img
          src={projects.image}
          alt="Project Screenshot"
          className="w-full rounded-lg shadow-lg mb-6"
        />
        <p className="text-white mb-4">
          {projects.description}
        </p>
        <h2 className="text-2xl font-bold text-white mb-2">
          Technologies Used
        </h2>
        <ul className="list-disc list-inside mb-6">
        {Array.isArray(projects.technologies) && 
            projects.technologies.map((tech, index) => (
              <li key={index} className="text-white">
                {tech}
              </li>
            ))
        
          } 
        </ul>
        <h2 className="text-2xl font-bold text-white mb-2">Features</h2>
        <ul className="list-disc list-inside mb-6">
        {Array.isArray(projects.features) && 
            projects.features.map((tech, index) => (
              <li key={index} className="text-white">
                {tech}
              </li>
            ))
        
          }
        </ul>
        <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Back to Home
        </Link>
      </div>

  );
}
