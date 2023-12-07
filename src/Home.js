import { NavLink } from "react-router-dom";
import Content from "./Content";

const Home = () => {
  return (
    <div className="container-fluid" id="home">
      <div className="row">
        <nav
          className="navbar navbar-expand-lg"
          style={{ backgroundColor: " #e3f2fd" }}
        >
          <div className="container">
            <a
              href="#home"
              className="navbar-brand"
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
              <div className="navbar-nav ms-auto">
                <NavLink className="nav-link navbar-brand" to="/signin">
                  Login
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <Content />
    </div>
  );
};
export default Home;
