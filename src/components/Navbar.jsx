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
          <li><a href='#'>Code Triangles</a></li>
          <li onClick={handleSidebar}>X</li>
        </ul>
        {openSidebar && (
          <ul className='sidebar'>
            <li onClick={handleSidebar}>X</li>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About Us</a></li>
            <li><a href='#'>Contact Us</a></li>
          </ul>
        )}
      </nav>

    </main>
  )
}

export default Navbar