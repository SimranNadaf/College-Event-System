import React from "react";
import me from "../../assets/me.png";

const AboutUs: React.FC = () => {
  return (
    <>
      <div className="container w-auto h-1/2 m-2">
        <h1 className="text-left font-bold text-black text-4xl pt-10 pl-20">
          About Us
        </h1>
        <div className="flex flex-row justify-center items-center p-10 gap-36">
          <img className="w-52 h-52" src={me} alt="aboutImg" />
          <p className="w-1/2">
            "I’m Simran Nadaf, a passionate software developer with a focus on
            building efficient and scalable web applications. With a background
            in [Your Background, e.g., Computer Science], I have a keen interest
            in [specific technologies or frameworks, e.g., React, Node.js,
            TypeScript]."
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
