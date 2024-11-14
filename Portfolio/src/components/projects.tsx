import React from "react";
import ProjectsCat from "./projectsCat";

const Projects: React.FC = () => {
  return (
    <>
      <div className="text-left font-bold text-black text-4xl pt-5 pl-20">
        <h1>Projects</h1>
       <ProjectsCat/>
      </div>
    </>
  );
};
export default Projects;
