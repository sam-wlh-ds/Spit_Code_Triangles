import React from "react";
// import lightbulb from "../images/lightbulb.svg";
import mode_fan from "../images/mode_fan.svg";
import ToggleButton from "./ToggleBtn";

const Fan = ({text}) => {
  return (
    <div>
      <div class="card " style={{ width: "11rem", backgroundColor: "#FAEDCD" }}>
        <img src={mode_fan} class="card-img-top" alt="light" />
        <div class="card-body">
          <h5 class="card-title text-center">{text}</h5>
          {/* <h6 class="card-title text-center">Bedroom</h6> */}

          <ToggleButton />
        </div>
      </div>
    </div>
  );
};

export default Fan;
