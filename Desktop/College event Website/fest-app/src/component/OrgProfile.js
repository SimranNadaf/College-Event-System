import React, { useEffect, useState } from "react";
import OrgSidebar from "./OrgSidebar";

function OrgProfile(props) {
  const host = "http://localhost:5000";
  const [org, setOrg] = useState({
    name: "",
    aname: "",
    adesignation: "",
    aemail: "",
    aphone: "",
    country: "",
    state: "",
    city: "",
  });
  useEffect(() => {
    // API call
    const Profile = async () => {
      const response = await fetch(`${host}/api/auth/org/getOrg`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("Orgtoken"),
        },
      });
      const json = await response.json();
      console.log(json);
      setOrg({
        name: json.name,
        aname: json.aname,
        adesignation: json.adesignation,
        aemail: json.aemail,
        aphone: json.aphone,
        country: json.country,
        state: json.state,
        city: json.city,
      });
    };
    Profile();
  }, []);

  const onChange = (e) => {
    setOrg({ ...org, [e.target.name]: e.target.value });
  };

  const handleClick = async () => {
    //API call for updatation
    const response = await fetch(`${host}/api/auth/org/updateOrg`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("Orgtoken"),
      },
      body: JSON.stringify(org),
    });
    const json = await response.json();
    if (json.success)
      props.alert("Your Details are Updated Successfully !", "success");
    else props.alert("Samething went wrong !", "danger");
  };

  return (
    <>
      <OrgSidebar />
      <div
        style={{
          paddingTop: "100px",
          paddingLeft: "22%",
          height: "100%",
        }}
      >
        <div
          class="alert alert-info alert-dismissible fade show mr-3"
          role="alert"
        >
          <h2>Hello, {org.aname}</h2>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
        <div className="container" style={{ width: "700px" }}>
          <div className="mb-3 mt-5">
            <h2 className="mt-5 mb-4 text-left">Profile :</h2>
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label mt-3"
            >
              Name of Organization/Institution
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={org.name}
              onChange={onChange}
              placeholder="Enter name of intitution"
            />

            <label
              htmlFor="exampleFormControlInput1"
              className="form-label mt-3"
            >
              Admin's Name
            </label>
            <input
              type="text"
              className="form-control"
              id="aname"
              name="aname"
              value={org.aname}
              onChange={onChange}
              placeholder="Enter Admin's name"
            />
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label mt-3"
            >
              Admin's Designation
            </label>
            <input
              type="text"
              className="form-control"
              id="adesignation"
              name="adesignation"
              value={org.adesignation}
              onChange={onChange}
              placeholder="Enter Admin's designation"
            />
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label mt-3"
            >
              Admin's EmailId
            </label>
            <input 
              type="email"
              className="form-control"
              placeholder="Enter Admin's emailid"
              id="aemail"
              value={org.aemail}
              onChange={onChange}
              name="aemail"
              disabled readonly
            />
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label mt-3"
            >
              Admin's Phone No.
            </label>
            <input
              type="text"
              className="form-control"
              id="aphone"
              name="aphone"
              value={org.aphone}
              onChange={onChange}
              placeholder="Enter Admin's Phone no."
            />
            <h6 className="mt-5 mb-1">Address</h6>
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
              name="country"
              placeholder="Enter Institute's country"
              value={org.country}
              onChange={onChange}
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
              name="state"
              placeholder="Enter Institute's state"
              value={org.state}
              onChange={onChange}
            />
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label mt-3"
            >
              City
            </label>
            <input
              type="text"
              className="form-control mb-5"
              id="city"
              name="city"
              placeholder="Enter Institute's city"
              value={org.city}
              onChange={onChange}
            />
          </div>

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

export default OrgProfile;
