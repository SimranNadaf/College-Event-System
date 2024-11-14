import React from "react";
import { useEffect } from "react";
// import Footer from './Footer'
// import Navbar from './Navbar'
import ContactImage from "./Images/contact.jpg";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact Us - CollegeFun";
  }, []);
  return (
    <>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={ContactImage}
              className="d-block w-100"
              height={600}
              alt="..."
            />
            <div
              className="text-dark text-center"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <h1>Contact Us</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ width: "700px" }}>
        <div className="mb-3 mt-5">
          <h2 className="mt-5 mb-4 text-center">Connect With Us</h2>
          <label htmlFor="exampleFormControlInput1" className="form-label mt-3">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter your full name"
          />
          <label htmlFor="exampleFormControlInput1" className="form-label mt-3">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />{" "}
          <label htmlFor="exampleFormControlInput1" className="form-label mt-3">
            Phone No.
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter your phone no."
          />
        </div>
        <div className="mt-2">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Comment
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
          <div className="text-center mt-4 mb-5">
            <button
              type="button"
              className="btn ps-3 pe-3"
              style={{ backgroundColor: "#19A7CE", color: "#fff" }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
