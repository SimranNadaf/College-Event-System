import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StudentSidebar from "./StudentSidebar";

function EventRegistrationForm(props) {
  const host = "http://localhost:5000";
  const navigate=useNavigate()
  const [events, setEvents] = useState({
    address: "",
    co_ordinator: "",
    date: "",
    edate: "",
    ename: "",
    etime: "",
    mode: "",
    org: "",
    phone: "",
    registration_fee: "",
    rules: "",
    _id: "",
  });


  useEffect(() => {
    // API call
    const Profile = async () => {
      const response = await fetch(`${host}/api/Studentevent/getEvent`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("Studenttoken"),
        },
        body: JSON.stringify({ eventId: localStorage.getItem("eventId") }),
      });
      const json = await response.json();
      console.log(json.address)
      setEvents({
        address: json.address,
        co_ordinator: json.co_ordinator,
        date: json.date,
        edate: json.edate,
        ename: json.ename,
        etime: json.etime,
        mode: json.mode,
        org: json.org,
        phone: json.phone,
        registration_fee: json.registration_fee,
        rules: json.rules,
        _id: json._id
      });
    
    console.log(events);
  }
    Profile();
  }, []);

  const handleClick = async () => {
    const response = await fetch(`${host}/api/Studentevent/registerEvent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("Studenttoken"),
      },
      body: JSON.stringify({org:events.org,event:events._id}),
    });
    const json = await response.json();
    console.log(json)
    if(json){
      props.alert("Event Register is Completed Successfuly","success")
      setTimeout(() => {
        localStorage.removeItem('eventId')
        navigate('/EventsStudent')
      }, 3000);
    }
    else{
      props.alert("Please Try again","danger")
    }
  };
  return (
    <>
      <StudentSidebar />
      <div
        style={{
          paddingTop: "40px",
          paddingLeft: "25%",
          height: "100%",
        }}
      >
        <div className="container" style={{ width: "700px" }}>
          <div className="mb-3 mt-5">
            <h2 className="mt-5 mb-4 text-center">Event Registration</h2>
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
              placeholder="Enter name of event"
              value={events.ename}
              disabled readOnly
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
              value={events.edate}
              disabled readOnly
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
              value={events.etime}
              disabled readOnly
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
              value={events.co_ordinator}
              disabled readOnly
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
              value={events.mode}
              disabled readOnly
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
              value={events.registration_fee}
              disabled readOnly
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
              value={events.rules}
              disabled readOnly
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
              value={events.phone}
              disabled readOnly
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
              value={events.address}
              disabled readOnly
              placeholder="At. Post..."
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
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventRegistrationForm;
