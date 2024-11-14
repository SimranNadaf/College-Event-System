import React from "react";
import japfa from '../../assets/japfa.png';
import byte from '../../assets/byteridge.png';

const Experience: React.FC = () => {
  return (
    <>
      <div className="text-left font-bold text-black text-4xl m-16">
        <h1>Experience</h1>
        <div className="flex flex-col mt-10 gap-10">
          <div className="p-5 bg-exp-bg rounded-2xl text-left">
            <div className="flex flex-row justify-left items-center gap-5">
              <h1 className="p-2 font-semibold text-xl">Software Developer</h1>
              <img className="w-auto h-8" src={japfa} alt="logo" />
            </div>
            <h1 className="pl-3 font-normal text-base">Japfa Comfeed India Private Limited, Pune</h1>
            <div className="bg-black text-white p-1 w-1 h-1 rounded-md mb-8">
      </div>
			<p className="p-4 font-normal text-base">
              During my time as a Software Engineer at [Company Name], I had the
              opportunity to work on a variety of projects that honed my
              technical skills and enhanced my problem-solving abilities. I
              collaborated with cross-functional teams to design, develop, and
              deploy scalable web applications using technologies such as React,
              Node.js, and MongoDB.
            </p>
          </div>
          <div className="p-5 bg-exp-bg rounded-2xl">
		  <div className="flex flex-row justify-left items-center gap-5">
              <h1 className="p-2 font-semibold text-xl">Company Name 2</h1>
              <img className="w-auto h-8" src={byte} alt="logo" />
            </div>
            <h1 className="pl-3 font-medium text-base">
              Software Developer Intern
            </h1>
            <p className="p-4 font-normal text-base">
              During my time as a Software Engineer at [Company Name], I had the
              opportunity to work on a variety of projects that honed my
              technical skills and enhanced my problem-solving abilities. I
              collaborated with cross-functional teams to design, develop, and
              deploy scalable web applications using technologies such as React,
              Node.js, and MongoDB.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
