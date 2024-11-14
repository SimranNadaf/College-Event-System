import React from "react";
import ProjectsFlutter from "./projectsFlutter";
import ProjectsWeb from "./projectWeb";
import ProjectsML from "./projectsML";

const ProjectsCat: React.FC = () =>{
	return(
<>
<div className="flex flex-col gap-10 p-10">
          <ProjectsFlutter/>
          <ProjectsWeb/>
          <ProjectsML/>
        </div>
</>
	);
}

export default ProjectsCat;