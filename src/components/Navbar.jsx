import React, { useState } from 'react'

const Navbar = () => {
  const [openSidebar, setOpenSideBar] = useState(false);

  const handleSidebar = () => {
    setOpenSideBar(!openSidebar);
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
            <button onClick={handleSidebar} type="button" className="btn-close" aria-label="Close"></button>
            <li><a href='#'>Dashboard</a></li>
            <li><a href='#'>Energy Consumption</a></li>
            <li><a href='#'>Security Monitoring</a></li>
            <li><a href='#'>Environmental Condition Tracking</a></li>
          </ul>
        )}
      </nav>

    </main>
  )
}

export default Navbar