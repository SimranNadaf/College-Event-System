import React from "react";
// import img from "./img1.jpg";
import { useEffect} from 'react';
import About1 from "./Images/about.jpg";
import about from "./Images/Mini-About.jpg";

import student1 from "./Images/student 1.png";
import student2 from "./Images/student 2.png";
import student3 from "./Images/student 3.png";
import student4 from "./Images/student 4.png";

import organization1 from "./Images/org 1.png";
import organization2 from "./Images/org 2.png";
import organization3 from "./Images/org 3.png";
import organization4 from "./Images/org 4.png";

import feature1 from "./Images/feature 1.png";
import feature2 from "./Images/feature 2.png";
import feature3 from "./Images/feature 3.png";
import feature4 from "./Images/feature 4.png";

export default function About() {
  useEffect(() => {

    document.title='About Us - CollegeFun';

  }, []);
  

  return (
    <>
      <div>
        <div className="fluid-container">
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="false"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={About1}
                  className="d-block w-100"
                  alt="..."
                  height={600}
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
                  <h1>About Us</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row mt-5 align-items-center">
              <div className="col">
                <img
                  src={about}
                  className="d-block rounded w-100 float-auto"
                  alt="..."
                />
              </div>
              <div className="col d-block w-100">
                <h4>About Us</h4>
                <p className="mt-2 float-auto center">
                  {" "}
                  The CollgeFun Application providing platfrom for both colleges
                  and students. By using this application College can easily
                  maintain thier all event online also shared with all over
                  students. sudents can also know about variuos event that
                  happening in thire near by college. Our Application is
                  InterFace between Colleges and students.
                </p>
              </div>
            </div>
          </div>

          <div className="container mt-5">
            <h2 className="text-center mt-5 mb-3">WHY USE COLLEGEFUN</h2>
            <h3 className="mb-3">For Organization</h3>
            <div className="row mt-5 mb-5">
              <div
                className=" col  mx-2 text-center"
                style={{ width: "18rem" }}
              >
                <img
                  src={organization1}
                  className="card-img-top"
                  alt="..."
                  style={{
                    width: "200px",
                    height: "200px",
                  }}
                />
                <div className="mt-1 text-center">
                  <h5>Online Organization Registration</h5>
                </div>
              </div>
              <div
                className=" col  mx-2 text-center"
                style={{ width: "18rem" }}
              >
                <img
                  src={organization2}
                  className="card-img-top"
                  alt="..."
                  style={{
                    width: "200px",
                    height: "200px",
                  }}
                />
                <div className="mt-1 text-center">
                  <h5>Create or Customize Events</h5>
                </div>
              </div>
              <div
                className=" col  mx-2 text-center"
                style={{ width: "18rem" }}
              >
                <img
                  src={organization3}
                  className="card-img-top"
                  alt="..."
                  style={{
                    width: "200px",
                    height: "200px",
                  }}
                />
                <div className="mt-1 text-center">
                  <h5>Provide Registration Form for Event</h5>
                </div>
              </div>
              <div
                className=" col  mx-2 text-center"
                style={{ width: "18rem" }}
              >
                <img
                  src={organization4}
                  className="card-img-top"
                  alt="..."
                  style={{
                    width: "200px",
                    height: "200px",
                  }}
                />
                <div className="mt-1 text-center">
                  <h5>Manage All Data of Participates and Events</h5>
                </div>
              </div>
            </div>

            

            <h3 className="mb-3 mt-5">For Student</h3>
            <div className="row mt-5 mb-5">
              <div
                className=" col  mx-2 text-center"
                style={{ width: "18rem" }}
              >
                <img
                  src={student1}
                  className="card-img-top"
                  alt="..."
                  style={{
                    width: "200px",
                    height: "200px",
                  }}
                />
                <div className="mt-1 text-center">
                  <h5>Online Student Registration</h5>
                </div>
              </div>
              <div
                className=" col  mx-2 text-center"
                style={{ width: "18rem" }}
              >
                <img
                  src={student2}
                  className="card-img-top"
                  alt="..."
                  style={{
                    width: "300px",
                    height: "200px",
                  }}
                />
                <div className="mt-1 text-center">
                  <h5>Shows List of Events</h5>
                </div>
              </div>
              <div
                className=" col  mx-2 text-center"
                style={{ width: "18rem" }}
              >
                <img
                  src={student3}
                  className="card-img-top"
                  alt="..."
                  style={{
                    width: "200px",
                    height: "200px",
                  }}
                />
                <div className="mt-1 text-center">
                  <h5>Easily Participate in Any Event</h5>
                </div>
              </div>
              <div
                className=" col  mx-2 text-center"
                style={{ width: "18rem" }}
              >
                <img
                  src={student4}
                  className="card-img-top"
                  alt="..."
                  style={{
                    width: "200px",
                    height: "200px",
                  }}
                />
                <div className="mt-1 text-center">
                  <h5>Win and Improve YourSelf</h5>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="container mt-5">
          <h3 className="mt-5 mb-5">Our Features</h3>
          <div className="row mb-5">
            <div className=" col  mx-2 text-center" style={{ width: "10rem" }}>
              <img
                src={feature1}
                className="card-img-top"
                alt="..."
                style={{
                  width: "150px",
                  height: "150px",
                }}
              />
              <div className="mt-1">
                <p className="text-center">
                  Maintain all data of student and events.
                </p>
              </div>
            </div>
            <div className=" col  mx-2 text-center" style={{ width: "10rem" }}>
              <img
                src={feature2}
                className="card-img-top"
                alt="..."
                style={{
                  width: "150px",
                  height: "150px",
                }}
              />
              <div className="mt-1">
                <p className="text-center">Online Registration for events.</p>
              </div>
            </div>
            <div className=" col  mx-2 text-center" style={{ width: "10rem" }}>
              <img
                src={feature3}
                className="card-img-top"
                alt="..."
                style={{
                  width: "150px",
                  height: "150px",
                }}
              />
              <div className="mt-1">
                <p className="text-center">
                  Easy to Use, User Friendly InterFace.
                </p>
              </div>
            </div>
            <div className=" col  mx-2 text-center" style={{ width: "10rem" }}>
              <img
                src={feature4}
                className="card-img-top"
                alt="..."
                style={{
                  width: "150px",
                  height: "150px",
                }}
              />
              <div className="mt-1">
                <p className="text-center">
                  Participate in variuos events and upskill students
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
