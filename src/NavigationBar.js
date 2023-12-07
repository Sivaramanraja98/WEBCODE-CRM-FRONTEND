import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

function NavigationBar() {
  const navigate = useNavigate();
  const role = localStorage.getItem("ROLE");

  const handleLogout = () => {
    try {
      axios
        .get(`https://crmbackend1-gbi7.onrender.com/api/signout`)
        .then((res) => {
          if (res) {
            localStorage.removeItem("TOKEN");
            localStorage.removeItem("NAME");
            localStorage.removeItem("EMAIL");
            localStorage.removeItem("ROLE");
            navigate("/");
          }
        })
        .catch((err) => {
          const notify = () =>
            toast.error(`${err.response.data.message}`, { theme: "colored" });
          notify();
        });
    } catch (err) {
      console.log("Error...", err);
    }
  };
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: " #e3f2fd" }}
    >
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="#A"
          style={{ fontWeight: "bold", color: "darkBlue" }}
        >
          <span style={{ fontSize: "1.9rem" }}>C</span>RM.COM
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          {role === 1 ? (
            <div className="navbar-nav ms-auto">
              <NavLink className="nav-link" to="/employee/create">
                Create Employee
              </NavLink>

              <NavLink
                className="nav-link"
                aria-current="page"
                to="/employee/list"
              >
                View Employee List
              </NavLink>

              <NavLink className="nav-link" aria-current="page" to="/lead/list">
                View Queries
              </NavLink>

              <NavLink onClick={handleLogout} className="nav-link" to="/">
                Logout
              </NavLink>
              <ToastContainer hideProgressBar={true} />
            </div>
          ) : (
            <div className="navbar-nav ms-auto">
              <a className="nav-link" href="#pricing">
                <NavLink className="nav-link" to="/pricing">
                  Pricing
                </NavLink>
              </a>
              <a className="nav-link" href="#createlead">
                <NavLink className="nav-link" to="/lead/create">
                  Create Query
                </NavLink>
              </a>
              <a className="nav-link" href="#home">
                <NavLink onClick={handleLogout} className="nav-link" to="/">
                  Logout
                </NavLink>
                <ToastContainer hideProgressBar={true} />
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
