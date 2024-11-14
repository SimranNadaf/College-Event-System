import React from "react";
import me from "../../assets/me.png";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import leetcode from "../../assets/leetcode.png";

const Intro: React.FC = () => {
  return (
    <div className="container md h-1/2 m-2 pt-24 pb-10 bg-gray-bg w-auto flex flex-col justify-center items-center gap-16">
      <div className="container md h-1/2 w-auto flex flex-row justify-center items-center gap-32">
        <div className="container w-1/2 h-auto text-center">
          <h1 className="font-bold text-5xl text-black">SIMRAN NADAF</h1>
          <br></br>
          <h3 className="font-normal tracking-[.7rem] text-sm text-black">
            SOFTWARE DEVELOPER
          </h3>
          <br></br>
          <button className="px-5 py-2 bg-black text-white font-normal text-base rounded-3xl">
            Resume
          </button>
        </div>
        <div className="container w-1/3 h-full">
          <img
            src={me}
            alt="Profile Photo"
            className="overflow-hidden rounded-full flex justify-center items-center h-1/2 w-1/2"
          />
        </div>
      </div>
      <div className="containerflex-row flex w-auto justify-center items-center gap-x-10">
        <div className="w-auto h-[50px]">
          <a href="https://github.com/SimranNadaf" target="_blank"  className="w-auto h-[50px]" >
            <img src={github} className="h-full w-auto"/>
          </a>
        </div>
        <div className="w-auto h-[50px]">
          <a
            href="https://www.linkedin.com/in/simran-nadaf-26691b219/"
            target="_blank"
          >
            <img src={linkedin} className="h-full w-auto"/>
          </a>
        </div>
        <div className="w-auto h-[32px]">
          <a href="https://leetcode.com/u/SimranNadaf/" target="_blank">
            <img src={leetcode} className="h-full w-auto"/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
