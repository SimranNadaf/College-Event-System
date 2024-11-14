import React from "react";

export default function Footer() {
  return (
    <>
      <div className="fluid-container">
        <div
          className="fluid-container mt-4"
          style={{
            backgroundColor: "#19A7CE",
            color: "#fff",
            paddingTop: "20px",
            paddingBottom: "20px",
            bottom:0,
            left:0,
            right:0,
            // position:"fixed",
            zIndex:-1
          }}
        >
          <h6 className="text-light text-center mt-2">
            CollegeFun | copyrights@collegefun2024
          </h6>
        </div>
      </div>
    </>
  );
}
