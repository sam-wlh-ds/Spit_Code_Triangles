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
  return (

    <main>

      <nav>
        <ul>
          <li><a href='#'>Smart Home</a></li>
          <button onClick={handleSidebar} type="button" class="btn">&#8801;</button>
        </ul>
        {openSidebar && (
          <ul className='sidebar'>
            <button onClick={handleSidebar} type="button" class="btn-close" aria-label="Close"></button>
            <li><a onClick={dashboard}>Dashboard</a></li>
            <li><a onClick={visual}>Energy Consumption</a></li>
            <li><a href='#'>Security Monitoring</a></li>
            <li><a href='#'>Environmental Condition Tracking</a></li>
          </ul>
        )}
      </nav>

    </main>
  )
}

export default Navbar