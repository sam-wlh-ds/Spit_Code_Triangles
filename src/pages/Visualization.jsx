import React from 'react'
import Card from '../components/CardBasic'
import img from "../images/404.png"
import Navbar from '../components/Navbar'

export default function Visualization() {
  return (
    <>
    <Navbar/>
    <div>
      <Card title={"xyz"} img={img}/>
    </div>
    </>
  )
}
