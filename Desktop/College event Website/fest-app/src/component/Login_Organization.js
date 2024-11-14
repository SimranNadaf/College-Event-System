import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import Footer from './Footer'
// import Navbar from './Navbar'
// import LoginOrganization from "./Images/Login_Organization.jpg";

export default function Login_Organization(props) {
  const navigate=useNavigate()
  useEffect(() => {
    document.title = "Login - CollegeFun";
  }, []);

  const [org, setOrg] = useState({
    email: "",
    password: "",
  });
  const host = "http://localhost:5000";
  // const navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
    console.log(org);
    // API call
    const response = await fetch(`${host}/api/auth/org/orgLogin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(org),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem("Orgtoken", json.authToken);
      props.alert("Logged In Successfully", "success");
      setTimeout(() => {
        navigate('/OrgProfile')
      }, 3000);
    } else {
      props.alert("Please enter valid crediatials", "danger");
    }
  };
  const onChange = (e) => {
    setOrg({ ...org, [e.target.name]: e.target.value });
  };
  return (
    <>
    
      <div className="container" style={{ width: "700px", paddingTop: "50px", paddingBottom:"50px"}}>
        
        <div className="mb-3 mt-5">
          <h2 className="mt-5 mb-4 text-center">Organization Login</h2>
          <label htmlFor="exampleFormControlInput1" className="form-label mt-3">
            Email Id
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            onChange={onChange}
            placeholder="Enter your email id"
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
