import React from "react";
import { notInitialized } from "react-redux/es/utils/useSyncExternalStore";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <nav class="navbar text-black" style={{ backgroundColor: "orange" }}>
        <div class="container">
          Complaint Management System
          <form class="d-flex" role="search">
            <Link
              to="/Home"
              style={{ textDecoration: "none", marginLeft: "12px" }}
            >
              Home
            </Link>

            <Link
              href="/Register"
              style={{ textDecoration: "none", marginLeft: "12px" }}
            >
              About us
            </Link>

            <Link
              to="/Register"
              style={{ textDecoration: "none", marginLeft: "12px" }}
            >
              Contacts
            </Link>
          </form>
        </div>
      </nav>
      <div className="container-sm">
        <Outlet />
      </div>
    </>
  );
};

export default Home;
