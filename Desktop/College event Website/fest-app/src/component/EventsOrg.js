import React, { useEffect, useState } from "react";
import EventItemOrg from "./EventItemOrg";
import OrgSidebar from "./OrgSidebar";
function EventsOrg(props) {
  const host = "http://localhost:5000";

  let event = [
    {
      address: "devrukh",
      co_ordinator: "my",
      date: "2023-03-26T14:53:46.517Z",
      edate: "2023-03-26",
      ename: "Quiz 1",
      etime: "20:15",
      mode: "online",
      org: "64202cc99063356d6be9ad89",
      phone: "07666536317",
      registration_fee: "100",
      rules: "nooooooooo",
      __v: 0,
      _id: "64205c7a88dc3b553a092674",
    },
  ];

  let [events, setEvents] = useState(event);

  useEffect(() => {
    // API call
    const Profile = async () => {
      const response = await fetch(`${host}/api/Orgevent/getEvents`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("Orgtoken"),
        },
      });
      const result = await response.json();
      console.log(result);
      setEvents(result);

      console.log(events);
    };
    Profile();
  }, []);

  return (
    <>
      <OrgSidebar />
      <div
        style={{
          paddingTop: "100px",
          paddingLeft: "30%",
          height: "100%",
        }}
      >
        {events.length === 0 && (
          <div
            className="container text-center mt-3"
            style={{
              width: "100%",
              height: "300px",
              backgroundColor: "#BFEAF5",
              justifyContent: "center",
              marginRight: "5%",
            }}
          >
            <h1>"No Events for Display"</h1>
          </div>
        )}
        {events.map((event, index) => {
          return <EventItemOrg key={index} event={event} />;
        })}
      </div>
    </>
  );
}

export default EventsOrg;
