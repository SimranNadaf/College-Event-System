import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Registration_Student(props) {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Registration - CollegeFun";
  }, []);

  const [student, setStudent] = useState({
    fname: "",
    mname: "",
    lname: "",
    gender: "",
    email: "",
    phone: "",
    country: "",
    state: "",
    city: "",
    education: "",
    institution: "",
    password: "",
  });
  const host = "http://localhost:5000";
  const handleClick = async (e) => {
    e.preventDefault();
    console.log(student);
    // API call
    const response = await fetch(`${host}/api/auth/student/createStudent`, {
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
        navigate("/StudentProfile");
      }, 3000);
    } else {
      props.alert("Please enter valid crediatials", "danger");
    }
  };
  const onChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const HandlePwd = () => {
    var pwd = document.getElementById("cpassword").value;
    var msg = document.getElementById("msg");
    if (pwd === student.password) {
      msg.innerHTML = "";
    } else {
      msg.innerHTML = "Both password and confirm password must be same";
    }
  };

  return (
    <>
      <div className="container" style={{ width: "700px", paddingTop: "50px" }}>
        <div className="mb-3 mt-5">
          <h2 className="mt-5 mb-4 text-center">Student Registration Form</h2>
          <label htmlFor="exampleFormControlInput1" className="form-label mt-3">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="fname"
            name="fname"
            placeholder="Enter your first name"
            onChange={onChange}
          />
          <label htmlFor="exampleFormControlInput1" className="form-label mt-3">
            Middle Name
          </label>
          <input
            type="text"
            className="form-control"
            id="mname"
            name="mname"
            onChange={onChange}
            placeholder="Enter your middle name"
          />
          <label htmlFor="exampleFormControlInput1" className="form-label mt-3">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="lname"
            name="lname"
            onChange={onChange}
            placeholder="Enter your last name"
          />
          <label htmlFor="exampleFormControlInput1" className="form-label mt-3">
            Gender
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
            id="gender"
            name="gender"
            onChange={onChange}
          >
            <option defaultValue={"choose"}>Select your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <label htmlFor="exampleFormControlInput1" className="form-label mt-3">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            onChange={onChange}
            name="email"
            placeholder="name@example.com"
          />{" "}
          <label htmlFor="exampleFormControlInput1" className="form-label mt-3">
            Phone No.
          </label>
          <input
            type="number"
            className="form-control"
            iid="phone"
            name="phone"
            placeholder="Enter your phone no."
            onChange={onChange}
          />
          <label htmlFor="exampleFormControlInput1" className="form-label mt-3">
            Country
          </label>
          <input
            type="text"
            className="form-control"
            id="country"
            name="country"
            onChange={onChange}
            placeholder="Enter your country"
          />
          <label htmlFor="exampleFormControlInput1" className="form-label mt-3">
            State
          </label>
          <input
            type="text"
            className="form-control"
            id="state"
            name="state"
            onChange={onChange}
            placeholder="Enter your state"
          />
          <label htmlFor="exampleFormControlInput1" className="form-label mt-3">
            City
          </label>
          <input
            type="text"
            className="form-control"
            id="city"
            name="city"
            onChange={onChange}
            placeholder="Enter your city"
          />
        </div>
        <label htmlFor="exampleFormControlInput1" className="form-label mt-3">
          Higher Qualification
        </label>
        <input
          type="text"
          className="form-control"
          id="education"
          name="education"
          onChange={onChange}
          placeholder="Enter your higher Qualification."
        />
        <label htmlFor="exampleFormControlInput1" className="form-label mt-3">
          Institution
        </label>
        <input
          type="text"
          className="form-control mb-5"
          id="institution"
          name="institution"
          onChange={onChange}
          placeholder="Enter your instutution name."
        />

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
            onChange={onChange}
            placeholder="Enter your password"
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
