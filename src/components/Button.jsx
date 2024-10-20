import React, { useState } from 'react';
import Light from './Light';

const Button = ({ type, text }) => {

  const nameOfClass = `btn btn-${type} px-3 py-2`;

  const [lightCount, setLightCount] = useState(0);
  const [cards, setCards] = useState([]);
  const [lights, setLights] = useState([]);

  const handleClick = () => {


    if (type === "green" && text === "Add Light") {
      // setLights(prevLights => [...prevLights, prevLights.length]);
      console.log(lights);

      const newId = lights.length > 0 ? Math.max(...lights.map(light => light.id)) + 1 : 1;
      setLights(prevLights => [...prevLights, { id: newId }]);

    }
    else if (type === "red" && text === "Remove Light") {
      setLights(prevLights => prevLights.filter(light => light.id !== id));
      // setLights(prevLights => [...prevLights, (prevLights.length - 1)]);
      console.log(lights)
    }
  }




  return (
    <main>

      <button type="button" className={nameOfClass} onClick={handleClick}> {text}</button >
      <div style={{ display: 'inline-flex' }} >
        <Light/>
        {lights.map((lightIndex) => (
          <Light key={lightIndex} index={lightIndex} />
        ))}
      </div>
    </main>

  )
}


export default Button