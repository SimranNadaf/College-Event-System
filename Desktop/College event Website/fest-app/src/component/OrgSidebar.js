import React from "react";
import { Link, useNavigate } from "react-router-dom";

function OrgSidebar() {
  
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    console.log("Logout....");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };
  return (
    <>
      <div>
        <div
          style={{
            paddingTop: "100px",
            position: "fixed",
            width: "20%",
            height: "100%",
            backgroundColor: "#3C84AB",
            top: "0",
            left: "0",
            zIndex: "0",
            color: "#ffffff",
            textDecoration: "none",
          }}
        >
          <h3 style={{ textAlign: "center" }}>Menu</h3>
          <ul type="none" style={{ padding: "20px", cursor: "pointer" }}>
            <li style={{ padding: "20px", gap: "10px" }}>
              <Link
                to="/OrgProfile"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                <i className="fa-solid fa-user mx-2"></i>My Profile
              </Link>
            </li>

            <li style={{ padding: "20px" }}>
              <Link
                to="/CreateEvents"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                <i className="fa-solid fa-plus mx-2"></i>Create Event
              </Link>
            </li>
            <li style={{ padding: "20px" }}>
              <Link
                to="/EventsOrg"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                <i className="fa-solid fa-list mx-2"></i>My Events
              </Link>
            </li>
            <li style={{ padding: "20px" }}>
            {/* eslint-disable-next-line */}
              <a onClick={handleLogout}>
                <i className="fa-solid fa-right-from-bracket mx-2"></i>Log out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default OrgSidebar;
