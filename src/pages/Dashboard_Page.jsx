import React from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Light from "../components/Light";
import Fan from '../components/Fan'
import AC from '../components/AC'

const Dashboard_Page = () => {


  const cards = [
    { title: 'Light 1', content: 'This is the content for Card 1' },
    { title: 'Light 2', content: 'This is the content for Card 2' },
    { title: 'Light 3', content: 'This is the content for Card 3' },
    { title: 'Fan 1', content: 'This is the content for Card 4' },
    { title: 'Fan 2', content: 'This is the content for Card 5' },
    { title: 'AC 1', content: 'This is the content for Card 5' }
  ];

  return (
    <>
    <Navbar />
    <div className="container mt-4">
      <span className="dark-blue fs-2" style={{ fontFamily: "Trirong, sans-serif" }}>Bedroom</span>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', marginTop: '10px', marginLeft:'10px', padding:'5px'}}>
        <Light text={"Light 1"} />
        <Light text={"Light 2"} />
        <Fan text={"Fan 1"} />
        <Fan text={"Fan 2"} />
        <AC text={"AC 1"} />
      </div>
    </div>

    <div className="container mt-4">
      <span className="dark-blue fs-2" style={{ fontFamily: "Trirong, sans-serif" }}>Kitchen</span>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', marginTop: '10px', marginLeft:'10px', padding:'5px'}}>
        <Light text={"Light 1"} />
        <Light text={"Light 2"} />
        <Fan text={"Fan 1"} />
      </div>
    </div>

    <div className="container mt-4">
      <span className="dark-blue fs-2" style={{ fontFamily: "Trirong, sans-serif" }}>Hall</span>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', marginTop: '10px', marginLeft:'10px', padding:'5px'}}>
        <Light text={"Light 1"} />
        <Light text={"Light 2"} />
        <Light text={"Light 3"} />
        <Fan text={"Fan 1"} />
        <Fan text={"Fan 2"} />
        <AC text={"AC 1"} />
      </div>
    </div>

    </>
  );
};

export default Dashboard_Page;
