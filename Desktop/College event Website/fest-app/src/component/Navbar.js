import React from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Navbar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    console.log("Logout....");
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  const handleStyle = () => {
    var link=document.getElementById("home");
    link.style.color="red";
  };

  const handleDashboard = () => {
    const state = localStorage;
    if (state.Orgtoken) navigate("/OrgProfile");
    else if (state.Studenttoken) navigate("/StudentProfile");
  };
  return (
    <>
      <nav
        className="navbar navbar-expand-lg fixed-top mb-4 nav-light"
        style={{ backgroundColor: "#19A7CE", color: "#000" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand text-body" to="/">
            <h4 style={{ color: "#fff" }}>CollegeFun</h4>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active text-body"
                  aria-current="page"
                  to="/"
                  onClick={handleStyle}
                  id="home"
                >
                  <h6 style={{ color: "#fff" }}>Home</h6>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-body" to="/about">
                  <h6 style={{ color: "#fff" }}>About Us</h6>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-body" to="/contact">
                  <h6 style={{ color: "#fff" }}>Contact Us</h6>
                </Link>
              </li>
            </ul>
            <div className="mx-auto"></div>

            {!localStorage.getItem("Orgtoken") &
            !localStorage.getItem("Studenttoken") ? (
              <div>
                <button
                  type="button"
                  className="btn btn-outline-light mx-2"
                  data-bs-toggle="modal"
                  data-bs-target="#SignIn"
                >
                  Sign In
                </button>

                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#SignUp"
                  className="btn btn-outline-light mx-2"
                >
                  Sign Up
                </button>
              </div>
            ) : (
              <div>
                <button
                  className="btn btn-outline-light mx-2"
                  onClick={handleDashboard}
                >
                  Dashboard
                </button>

                <button
                  className="btn btn-outline-light mx-2"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      <div
        className="modal fade"
        id="SignUp"
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
                  className="mt-3 mb-3 btn"
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
                  className="mt-3 mb-4 btn"
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

      <div
        className="modal fade"
        id="SignIn"
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
                Sign In
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center p-5">
              <h5 className="mt-2 mb-3">Sign In For Organization</h5>
              <Link to="OrganizationLogin">
                <button
                  data-bs-dismiss="modal"
                  className="mt-3 mb-3 btn"
                  type="button"
                  style={{ backgroundColor: "#19A7CE", color: "#fff" }}
                >
                  Sign In
                </button>
              </Link>
              <hr></hr>

              <h5 className="mt-4 mb-4">Sign In For Student</h5>
              <Link to="/StudentLogin">
                <button
                  data-bs-dismiss="modal"
                  className="mt-3 mb-4 btn"
                  type="button"
                  style={{ backgroundColor: "#19A7CE", color: "#fff" }}
                >
                  Sign In
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
