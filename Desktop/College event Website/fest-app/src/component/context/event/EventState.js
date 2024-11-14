import React, { useState } from "react";
import eventContext from "./EventContext";

function EventState(props) {
  const host = "http://localhost:5000";
  const event = [];
  const [events, setEvents] = useState(event);

  const getEvents = async () => {
    const response = await fetch(`${host}/api/Orgevent/getEvents`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("Orgtoken"),
      },
    });
    const json = await response.json();
    setEvents(events.concat(json))
  };

  return (
    <eventContext.Provider value={{events,getEvents}}>{props.children}</eventContext.Provider>
  );
}

export default EventState;
