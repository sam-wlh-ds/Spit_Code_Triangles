import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiHomeWifiFill } from "react-icons/ri";

const Navbar = () => {
  const [openSidebar, setOpenSideBar] = useState(false);

  const handleSidebar = () => {
    setOpenSideBar(!openSidebar);
  };

  const navigate = useNavigate();

  const dashboard = () => {
    navigate("/dashboard");
  };

  const visual = () => {
    navigate("/visualization");
  };

  const cam = () => {
    navigate("/cam");
  };

  const home = () => {
    navigate("/");
  };
  return (
    <main>
      <nav>
        <ul>
          <li>
            <a
              href="#"
              className="fs-2"
              style={{ fontFamily: "Trirong, sans-serif" }}
            >
              <RiHomeWifiFill />
              <strong className="m-3">GRHA</strong>
            </a>
          </li>
          <button onClick={handleSidebar} type="button" className="btn fs-2 mx-1">
            &#8801;
          </button>
        </ul>
        {openSidebar && (
          <ul className="sidebar">
            <button
              onClick={handleSidebar}
              type="button"
              class="btn-close m-3"
              aria-label="Close"
            ></button>
            <li>
              <a onClick={home}>Home</a>
            </li>
            <li>
              <a onClick={dashboard}>Dashboard</a>
            </li>
            <li>
              <a onClick={visual}>Energy Consumption</a>
            </li>
            <li>
              <a onClick={cam}>Security Monitoring</a>
            </li>
          </ul>
        )}
      </nav>
    </main>
  );
};

export default Navbar;
