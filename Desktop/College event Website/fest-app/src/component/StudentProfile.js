import React, { useState } from "react";
import { useEffect } from "react";
import StudentSidebar from "./StudentSidebar";

function StudentProfile(props) {
  const host = "http://localhost:5000";
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
  });
  useEffect(() => {
    // API call
    const Profile = async () => {
      const response = await fetch(`${host}/api/auth/student/getStudent`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("Studenttoken"),
        },
      });
      const json = await response.json();
      console.log(json);
      setStudent({
        fname: json.fname,
        mname: json.mname,
        lname: json.lname,
        gender: json.gender,
        email: json.email,
        phone: json.phone,
        country: json.country,
        state: json.state,
        city: json.city,
        education: json.education,
        institution: json.institution,
      });
    };
    Profile();
  }, []);

  const onChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleClick = async () => {
    //API call for updatation
    const response = await fetch(`${host}/api/auth/student/updateStudent`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("Studenttoken"),
      },
      body: JSON.stringify(student),
    });
    const json = await response.json();
    if (json.success)
      props.alert("Your Details are Updated Successfully !", "success");
    else props.alert("Samething went wrong !", "danger");
  };

  return (
    <>
      <StudentSidebar />
      <div
        style={{
          paddingLeft: "22%",
          height: "100%",
          paddingTop: "100px",
        }}
      >
        <div
          class="alert alert-info alert-dismissible fade show mr-3"
          role="alert"
        >
          <h2>Hello, {student.fname}</h2>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>

        <div className="container" style={{ width: "700px" }}>
          <div className="mb-3">
            <h2 className="mt-5 mb-4 text-left">Profile:</h2>
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label mt-3"
            >
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="fname"
              name="fname"
              placeholder="Enter your first name"
              value={student.fname}
              onChange={onChange}
            />
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label mt-3"
            >
              Middle Name
            </label>
            <input
              type="text"
              className="form-control"
              id="mname"
              name="mname"
              value={student.mname}
              onChange={onChange}
              placeholder="Enter your middle name"
            />
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label mt-3"
            >
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lname"
              value={student.lname}
              name="lname"
              onChange={onChange}
              placeholder="Enter your last name"
            />
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label mt-3"
            >
              Gender
            </label>
            <select
              class="form-select"
              aria-label="Default select example"
              id="gender"
              name="gender"
              onChange={onChange}
              value={student.gender}
            >
              <option>Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label mt-3"
            >
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              onChange={onChange}
              value={student.email}
              name="email"
              placeholder="name@example.com"
              disabled readonly
            />
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label mt-3"
            >
              Phone No.
            </label>
            <input
              type="text"
              className="form-control"
              id="phone"
              value={student.phone}
              name="phone"
              placeholder="Enter your phone no."
              onChange={onChange}
            />
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label mt-3"
            >
              Country
            </label>
            <input
              type="text"
              className="form-control"
              id="country"
              value={student.country}
              name="country"
              onChange={onChange}
              placeholder="Enter your country"
            />
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label mt-3"
            >
              State
            </label>
            <input
              type="text"
              className="form-control"
              id="state"
              value={student.state}
              name="state"
              onChange={onChange}
              placeholder="Enter your state"
            />
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label mt-3"
            >
              City
            </label>
            <input
              type="text"
              className="form-control"
              id="city"
              value={student.city}
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
            value={student.education}
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
            value={student.institution}
            onChange={onChange}
            placeholder="Enter your instutution name."
          />

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
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentProfile;
