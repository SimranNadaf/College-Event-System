import React, { useEffect, useState } from "react";
import StudentMyEventItem from "./StudentMyEventItem";
import StudentSidebar from "./StudentSidebar";

function StudentMyEvent() {
  const host = "http://localhost:5000";
  const [eventIds, setEventIds] = useState([]);

  const event=[];
  const [events, setEvents] = useState(event);

  useEffect(() => {
    // API call
    const Profile = async () => {
      const response = await fetch(
        `${host}/api/Studentevent/getRegisteredEventsId`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("Studenttoken"),
          },
        }
      );
      const result = await response.json();
      setEventIds(result);
      console.log(result);
    };
    Profile();

    // if (eventIds.length != 1) {
    //   eventIds.list.map((key, event) => {
    //     getEvents(event);
    //     console.log("1");
    //   });
    // }
    

  }, []);

  useEffect(() => {
    eventIds && eventIds.map((event, index)=>{
      getEvents(event)
    })
  },[eventIds])

  const getEvents = async (event) => {
    console.log("get event...")
    const response = await fetch(`${host}/api/Studentevent/getEvent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("Studenttoken"),
      },
      body: JSON.stringify({ eventId: Object(event.event) }),
    });
    const json = await response.json();
    setEvents(events => events.concat(json));
    console.log(events)

    
  };

  return (
    <>
      <StudentSidebar />
      <div
        style={{
          paddingTop: "100px",
          paddingLeft: "30%",
          height: "100%",
        }}
      >
        {eventIds.length === 0 && (
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
        
{/* { eventIds &&  eventIds.list.map((event, index) => {
        return getEvents(event);
})} */}
  
        {events && events.map((event, index) => {
          return <StudentMyEventItem key={index} event={event} />;
        })}
      </div>
    </>
  );
}

export default StudentMyEvent;

