import React from "react";
import ToggleButton from "./ToggleBtn";
import { TbAirConditioning } from "react-icons/tb";

const AC = () => {
  return (
    <div>
      <div class="card " style={{ width: "11rem" }}>
        <TbAirConditioning
          style={{
            width: "100%",
            height: "9rem",
          }}
        />
        <div class="card-body">
          <h5 class="card-title text-center">AIR CONDITIONER</h5>
       

          <ToggleButton />
        </div>
      </div>
    </div>
  );
};

export default AC;
