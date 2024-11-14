import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Registration_Organization(props) {
  // const {alert}=props
  useEffect(() => {
    document.title = "Registration - CollegeFun";
  }, []);

  const HandlePwd = () => {
    var pwd = document.getElementById("cpassword").value;
    var msg = document.getElementById("msg");
    if (pwd === org.password) {
      msg.innerHTML = "";
    } else {
      msg.innerHTML = "Both password and confirm password must be same";
    }
  };

  const [org, setOrg] = useState({
    name: "",
    aname: "",
    adesignation: "male",
    aemail: "",
    aphone: "",
    country: "",
    state: "",
    city: "",
    password: "",
  });
  const host = "http://localhost:5000";
  const navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
    console.log(org);
    // API call
    const response = await fetch(`${host}/api/auth/org/createOrg`, {
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
      props.alert("Created Acoount Successfully", "success");
      setTimeout(() => {
        navigate("/OrgProfile");
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
      <div className="container" style={{ width: "700px", paddingTop: "50px" }}>
        <div className="mb-3 mt-5">
          <h2 className="mt-5 mb-4 text-center">
            Organization Registration Form
          </h2>
          <label htmlFor="exampleFormControlInput1" className="form-label mt-3">
            Name of Organization/Institution
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            onChange={onChange}
            placeholder="Enter name of intitution"
          />

          <label htmlFor="exampleFormControlInput1" className="form-label mt-3">
            Admin's Name
          </label>
          <input
            type="text"
            className="form-control"
            id="aname"
            name="aname"
            onChange={onChange}
            placeholder="Enter Admin's name"
          />
          <label htmlFor="exampleFormControlInput1" className="form-label mt-3">
            Admin's Designation
          </label>
          <input
            type="text"
            className="form-control"
            id="adesignation"
            name="adesignation"
            onChange={onChange}
            placeholder="Enter Admin's designation"
          />
          <label htmlFor="exampleFormControlInput1" className="form-label mt-3">
            Admin's EmailId
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter Admin's emailid"
            id="aemail"
            onChange={onChange}
            name="aemail"
          />
          <label htmlFor="exampleFormControlInput1" className="form-label mt-3">
            Admin's Phone No.
          </label>
          <input
            type="text"
            className="form-control"
            id="aphone"
            name="aphone"
            onChange={onChange}
            placeholder="Enter Admin's Phone no."
          />
          <h6 className="mt-5 mb-1">Address</h6>
          <label htmlFor="exampleFormControlInput1" className="form-label mt-3">
            Country
          </label>
          <input
            type="text"
            className="form-control"
            id="country"
            name="country"
            placeholder="Enter Institute's country"
            onChange={onChange}
          />
          <label htmlFor="exampleFormControlInput1" className="form-label mt-3">
            State
          </label>
          <input
            type="text"
            className="form-control"
            id="state"
            name="state"
            placeholder="Enter Institute's state"
            onChange={onChange}
          />
          <label htmlFor="exampleFormControlInput1" className="form-label mt-3">
            City
          </label>
          <input
            type="text"
            className="form-control mb-5"
            id="city"
            name="city"
            placeholder="Enter Institute's city"
            onChange={onChange}
          />
        </div>

        <div>
          <hr />
          <h6>Set Password</h6>
          <label htmlFor="exampleFormControlInput1" className="form-label mt-3">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Enter your password"
            onChange={onChange}
          />
          <label htmlFor="exampleFormControlInput1" className="form-label mt-3">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="cpassword"
            name="cpassword"
            placeholder="Confirm your password"
            onChange={HandlePwd}
          />

          <div className="text-danger" id="msg"></div>

          <div className="mt-2">
            <div className="text-center mt-4 mb-5">
              <button
                type="reset"
                className="btn ps-3 pe-3 mx-3"
                style={{ backgroundColor: "#19A7CE", color: "#fff" }}
              >
                Reset
              </button>
              <button
                type="button"
                className="btn ps-3 pe-3 mx-3"
                style={{ backgroundColor: "#19A7CE", color: "#fff" }}
                onClick={handleClick}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
