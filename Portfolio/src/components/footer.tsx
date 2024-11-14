import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="container bg-footer w-full h-auto">
      <div className="flex felx-row gap-16 pt-20 pb-40 justify-center items-center">
        <div className="w-1/3">
          <p className="text-white font-bold text-xl text-center">
            SIMRAN NADAF
          </p>
        </div>
        <div className="w-1/3">
          <p className="text-white font-bold text-xl text-center ">Contact</p>
        </div>
        <div className="w-1/3">
          <p className="text-white font-bold text-xl text-center">About Us</p>
          <p className="text-white font-bold text-xl text-center">Contact US</p>
        </div>
      </div>
      <div>
        <p className="text-white font-bold text-sm text-center">
          Copy right @2024 . All rights reserve | Made by{" "}
          <a
            href="https://www.linkedin.com/in/simran-nadaf-26691b219/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:text-purple-300"
          >
            Simran Nadaf
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
