import React from "react";
import { Link } from "react-router-dom";
import OrgSidebar from "./OrgSidebar";
import PreEvent from "./PreEvent";

function CreateEvents() {
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
        <Link to="/CreateEventForm" style={{ textDecoration: "none" }}>
          <div
            class="card border border-info pb-5"
            style={{
              width: "200px",
              height: "200px",
              cursor: "pointer",
              color: "#19A7CE",
            }}
          >
            <div class="card-body">
              <h5 class="card-title text-center">Create Event</h5>
              <p
                class="text-center"
                style={{
                  justifyContent: "center",
                  fontSize: "100px",
                  color: "#19A7CE",
                }}
              >
                <i class="fa-solid fa-plus"></i>
              </p>
            </div>
          </div>
        </Link>
        <div style={{ marginTop: "50px" }}>
          <h4>PreBuild Events</h4>
          <PreEvent
            name="Quize"
            mode="online"
            fee="100"
            rules="1. You must use a functioning webcam and microphone.
2. No cell phones or other secondary devices in the room or test area.
3. Your desk/table must be clear or any materials except your test-taking device
4. No one else can be in the room with you
5. No talking"
          />
          <PreEvent
            name="Coding Round"
            mode="online"
            fee="200"
            rules="1. The full program should be contained in a single file.
            2. If the problem statement doesn't specify the names of input or output, you must read the data from the standard input and write it to the standard output.
            3. You are forbidden to work with the Net."
          />
          <PreEvent
            name="chess"
            mode="offline"
            fee="50"
            rules="1. When in doubt, ask There is nothing wrong in clarifying your doubts with the tournament director. ...
            2. You have to move the piece you touch This is otherwise known as the touch move rule. ...
            3. Recording the moves ...
            4. Do not interfere with a game ...
            5. Remember to turn off your cell phone ..."
          />
          <PreEvent
            name="E-poster Making"
            mode="online"
            fee="100"
            rules="All E-Poster should be original work of participant. 
            Any participant found violating rules and regulation will be disqualified from competition. 
            No posters should include an image or name of government officials or popular personalities Decision of jury will be considered final"
          />
        </div>
      </div>
    </>
  );
}

export default CreateEvents;
