import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="bg-white p-4 shadow-md w-auto">
      <div className="container space-x-16 flex items-center">
        <div className="text-black text-2xl font-bold">
          SIMRAN
        </div>
        <div className="text-black text-xl font-medium">About Us</div>
        <div className="text-black text-xl font-medium">Experience</div>
        <div className="text-black text-xl font-medium">Projects</div>
        <div className="text-black text-xl font-medium">Skills</div>
        <div className="text-black text-xl font-medium">Contact Us</div>
      </div>
    </div>
  );
};

export default Navbar;
