import React from 'react';
import Navbar from '../components/Navbar';
import LineChart from '../models/LineChart';

export default function Visualization() {
  // Example data for the chart
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const TotalEnergyConsumed = [350, 420, 490, 460, 550, 700, 750, 800, 850, 600, 450, 400];
  const LightEnergyConsumed = [80, 100, 90, 80, 120, 150, 160, 170, 180, 110, 90, 70];
  const FanEnergyConsumed = [70, 90, 60, 70, 80, 100, 120, 150, 140, 90, 70, 60];
  const ACEnergyConsumed = [200, 250, 300, 350, 400, 500, 600, 650, 700, 500, 300, 250];  


  return (
    <>
      <Navbar />
      <div className='container'>
        <span className="dark-blue fs-2" style={{ fontFamily: "Trirong, sans-serif" }}>Energy Consumption Data</span>
        <br/><br />
        <div className='graphs-container ms-5' style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div className='graph border border-dark p-1 rounded-3'><LineChart label={months} info={TotalEnergyConsumed} title={"Total Energy Consumed"} /></div>
          <div className='graph border border-dark p-1 rounded-3'><LineChart label={months} info={LightEnergyConsumed} title={"Light Energy Consumed"} /></div>
          <div className='graph border border-dark p-1 rounded-3'><LineChart label={months} info={FanEnergyConsumed} title={"Fan Energy Consumed"} /></div>
          <div className='graph border border-dark p-1 rounded-3'><LineChart label={months} info={ACEnergyConsumed} title={"AC Energy Consumed"} /></div>
        </div>
      </div>
    </>
  );  
}
