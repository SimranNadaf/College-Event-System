import React from "react";
import pro from "../../assets/projects/projectV.mp4";

const ProjectsML: React.FC = () =>{
	return(
		<div className="text-left font-semibold text-black text-2xl pt-2 pl-2">
            <h1>Machine Learning</h1>
            <div className="flex flex-row">
              <div className="container bg-ML rounded-xl m-5 p-2 w-1/3 h-auto">
                <video className="w-auto h-auto" autoPlay>
                  <source src={pro} type="video/mp4" />
                </video>
				<p className="text-center font-medium text-black text-lg p-2">Project Name</p>
              <p className="text-justify font-normal text-black text-base p-1">
                TaskManager is a web application designed to help users
                efficiently manage their daily tasks, providing features such as
                task creation, deadlines, and categorization.
              </p>
              </div>
              <div className="container bg-ML rounded-xl m-5 p-2 w-1/3 h-auto">
                <video className="w-auto h-auto" autoPlay>
                  <source src={pro} type="video/mp4" />
                </video>
				<p className="text-center font-medium text-black text-lg p-2">Project Name</p>
              <p className="text-justify font-normal text-black text-base p-1">
                TaskManager is a web application designed to help users
                efficiently manage their daily tasks, providing features such as
                task creation, deadlines, and categorization.
              </p>
              </div>
			  <div className="container bg-ML rounded-xl m-5 p-2 w-1/3 h-auto">
                <video className="w-auto h-auto" autoPlay>
                  <source src={pro} type="video/mp4" />
                </video>
				<p className="text-center font-medium text-black text-lg p-2">Project Name</p>
              <p className="text-justify font-normal text-black text-base p-1">
                TaskManager is a web application designed to help users
                efficiently manage their daily tasks, providing features such as
                task creation, deadlines, and categorization.
              </p>
              </div>
            </div>
          </div>
	);
}

export default ProjectsML;