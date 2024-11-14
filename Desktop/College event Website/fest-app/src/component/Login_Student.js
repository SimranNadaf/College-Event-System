import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import Footer from './Footer'
// import Navbar from './Navbar'
// import LoginStudent from "./Images/Login_Student.jpg";

export default function Login_Student(props) {
  const navigate=useNavigate();
  useEffect(() => {
    document.title = "Login - CollegeFun";
  }, []);

  const [student, setStudent] = useState({
    email: "",
    password: "",
  });
  const host = "http://localhost:5000";
  // const navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
    console.log(student);
    // API call
    const response = await fetch(`${host}/api/auth/student/studentLogin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem("Studenttoken", json.authToken);
      props.alert("Logged In Successfully", "success");
      setTimeout(() => {
        navigate('/StudentProfile')
      }, 3000);
      
    } else {
      props.alert("Please enter valid crediatials", "danger");
    }
  };
  const onChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={LoginStudent}
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
              <h1>Student - Login</h1>
            </div>
          </div>
        </div>
      </div> */}

      <div className="container" style={{ width: "700px", paddingTop: "50px" }}>
        <div className="mb-3 mt-5">
          <h2 className="mt-5 mb-4 text-center">Student Login</h2>
          <label htmlFor="exampleFormControlInput1" className="form-label mt-3">
            Email Id
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Enter your email id"
            onChange={onChange}
          />
          <label htmlFor="exampleFormControlInput1" className="form-label mt-3">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={onChange}
            placeholder="Enter your password"
          />
        </div>

        <div className="mt-2">
          <div className="text-center mt-4 mb-5">
            <button
              type="button"
              className="btn ps-3 pe-3 mx-3"
              style={{ backgroundColor: "#19A7CE", color: "#fff" }}
            >
              Back
            </button>
            <button
              type="button"
              className="btn ps-3 pe-3 mx-3"
              style={{ backgroundColor: "#19A7CE", color: "#fff" }}
              onClick={handleClick}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
