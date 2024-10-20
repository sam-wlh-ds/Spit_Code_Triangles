import React, { useState } from "react";
import CardBasic from "../components/CardBasic";
import lightbulb from "../images/lightbulb.svg";
import Button from "./Button";
import ToggleButton from "./ToggleBtn";

const Light = ({text}) => {
  return (
    <div class="card " style={{ width: "11rem", backgroundColor: "#FEFAE0"}}>
      <img src={lightbulb} class="card-img-top" alt="light" />
      <div class="card-body">
        <h5 class="card-title text-center">{text}</h5>
        {/* <h6 class="card-title text-center">Bedroom</h6> */}

        <ToggleButton />
    
      </div>
    </div>
  );
};

export default Light;
