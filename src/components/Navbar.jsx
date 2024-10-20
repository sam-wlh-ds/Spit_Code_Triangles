import React, { useState } from 'react'
import {useNavigate} from "react-router-dom";

const Navbar = () => {
  const [openSidebar, setOpenSideBar] = useState(false);

  const handleSidebar = () => {
    setOpenSideBar(!openSidebar);
  }

  const navigate = useNavigate();

  const dashboard = ()=>{
    navigate("/dashboard");
  }

  const visual = ()=>{
    navigate("/visualization");
  }

  const cam = ()=>{
    navigate("/cam");
  }

  const home = ()=>{
    navigate("/");
  }
  return (

    <main>

      <nav>
        <ul>
          <li><a href='#'>Smart Home</a></li>
          <button onClick={handleSidebar} type="button" className="btn">&#8801;</button>
        </ul>
        {openSidebar && (
          <ul className='sidebar'>
            <button onClick={handleSidebar} type="button" class="btn-close" aria-label="Close"></button>
            <li><a onClick={home}>Home</a></li>
            <li><a onClick={dashboard}>Dashboard</a></li>
            <li><a onClick={visual}>Energy Consumption</a></li>
            <li><a onClick={cam}>Security Monitoring</a></li>
          </ul>
        )}
      </nav>

    </main>
  )
}

export default Navbar