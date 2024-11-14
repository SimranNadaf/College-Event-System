import OrgSidebar from "./OrgSidebar";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateEventForm(props) {
  const navigate=useNavigate();
  const host = "http://localhost:5000";
  const [event, setEvent] = useState({
    ename: "",
    edate: "",
    etime: "male",
    co_ordinator: "",
    mode: "",
    registration_fee: "",
    rules: "",
    address: "",
    phone: "",
  });
  const onChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };
  const handleClick = async () => {
    console.log(event);
    // API call
    const response = await fetch(`${host}/api/Orgevent/EventRegistration`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("Orgtoken"),
      },
      body: JSON.stringify(event),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      props.alert("Created Event Successfully", "success");
      setTimeout(() => {
        navigate("/CreateEvents");
      }, 3000);
    } else {
      props.alert("Please enter valid crediatials", "danger");
    }
  };
  return (
    <>
      <OrgSidebar />
      <div
        style={{
          paddingTop: "30px",
          paddingLeft: "25%",
          height: "100%",
        }}
      >
        <div className="container" style={{ width: "700px" }}>
          <div className="mb-3 mt-5">
            <h2 className="mt-5 mb-4 text-center">Create Event</h2>
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label mt-3"
            >
              Event Name
            </label>
            <input
              type="text"
              className="form-control"
              id="ename"
              name="ename"
              onChange={onChange}
              placeholder="Enter name of event"
              required
            />

            <label
              htmlFor="exampleFormControlInput1"
              className="form-label mt-3"
            >
              Event Date
            </label>
            <input
              type="date"
              className="form-control"
              id="edate"
              name="edate"
              required
              onChange={onChange}
            />
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label mt-3"
            >
              Event Time
            </label>
            <input
              type="time"
              className="form-control"
              id="etime"
              name="etime"
              onChange={onChange}
              required
            />
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label mt-3"
            >
              Co-ordinator
            </label>
            <input
              type="text"
              className="form-control"
              id="co_ordinator"
              name="co_ordinator"
              required
              onChange={onChange}
              placeholder="Name of Co-ordinator"
            />
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label mt-3"
            >
              Mode
            </label>
            <input
              type="text"
              className="form-control"
              id="mode"
              name="mode"
              placeholder="For exampple Online/Offline"
              required
              onChange={onChange}
            />
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label mt-3"
            >
              Registration Fee
            </label>
            <input
              type="text"
              className="form-control"
              id="registration_fee"
              name="registration_fee"
              onChange={onChange}
              required
              placeholder="Enter the registration fee amount"
            />

            <label
              htmlFor="exampleFormControlInput1"
              className="form-label mt-3"
            >
              Rules
            </label>
            <textarea
              className="form-control"
              placeholder="Enter rules"
              id="rules"
              onChange={onChange}
              required
              name="rules"
            ></textarea>
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
              name="phone"
              onChange={onChange}
              required
              placeholder="Contact number"
            />

            <label
              htmlFor="exampleFormControlInput1"
              className="form-label mt-3"
            >
              Address
            </label>
            <textarea
              required
              className="form-control"
              id="address"
              name="address"
              placeholder="At. Post..."
              onChange={onChange}
            ></textarea>
          </div>

          <div className="mt-2">
            <div className="text-center mt-4 mb-5">
              <button
                type="reset"
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
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateEventForm;
