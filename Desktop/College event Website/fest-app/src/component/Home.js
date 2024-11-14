import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import home from "./Images/home.jpg";
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

export default function Home() {
  useEffect(() => {
    document.title = "Home - CollegeFun";
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
                  src={home}
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
                  <h2>CollegeFun</h2>
                  <h4>College Event Management System</h4>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="btn  col  mx-3 px-3"
                      style={{
                        marginRight: "100",
                        fontSize: "20px",
                        backgroundColor: "#19A7CE",
                        color: "#fff",
                      }}
                      data-bs-toggle="modal"
                      data-bs-target="#StartNow"
                    >
                      Start Now &#8680;
                    </button>
                  </div>
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
            <h2 className="text-center mt-5 mb-3">HOW TO USE</h2>
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
            <div className="text-center">
              <Link to="/OrganizationRegitration">
                <button
                  type="button"
                  className="btn mb-3 p-3 pb-2"
                  style={{ backgroundColor: "#19A7CE", color: "#fff" }}
                >
                  <h4>Start Now &#10148;</h4>
                </button>
              </Link>
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
            <div className="text-center">
              <Link to="/StudentRegistration">
                <button
                  type="button"
                  className="btn  mb-3 p-3 pb-2"
                  style={{ backgroundColor: "#19A7CE", color: "#fff" }}
                >
                  <h4>Start Now &#10148;</h4>
                </button>
              </Link>
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

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="StartNow"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h1
                className="modal-title fs-5 text-center"
                id="exampleModalLabel"
              >
                Sign Up
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center p-5">
              <h5 className="mt-2 mb-3">Registration As An Organization</h5>
              <Link to="/OrganizationRegitration">
                <button
                  data-bs-dismiss="modal"
                  className="mt-3 mb-3 btn "
                  type="button"
                  style={{ backgroundColor: "#19A7CE", color: "#fff" }}
                >
                  Sign Up
                </button>
              </Link>
              <hr></hr>

              <h5 className="mt-4 mb-4">Registration As A Student</h5>
              <Link to="/StudentRegistration">
                <button
                  data-bs-dismiss="modal"
                  className="mt-3 mb-4 btn "
                  type="button"
                  style={{ backgroundColor: "#19A7CE", color: "#fff" }}
                >
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
