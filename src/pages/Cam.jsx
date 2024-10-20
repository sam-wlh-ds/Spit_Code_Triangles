import React from 'react';
import Navbar from '../components/Navbar';
import Cam1 from '../videos/cam1.mp4';

function Cam() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <span className="dark-blue fs-2" style={{ fontFamily: "Trirong, sans-serif" }}>Security Monitoring</span>
        <br/><br />
        <div className='graphs-container ms-5' style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div className='graph border border-dark p-1 rounded-3'>
            <video className="card-img-top" autoPlay loop muted>
              <source src={Cam1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cam;
