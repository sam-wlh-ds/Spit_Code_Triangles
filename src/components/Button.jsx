import React, { useState } from 'react';
import CardBasic from '/CardBasic.jsx';

const Button = ({ type, text }) => {

  const nameOfClass = `btn btn-${type} px-3 py-2`;

  const [lightCount, setLightCount] = useState(0);
  const [cards, setCards] = useState([]);

  const handleClick = () => {


    if (type === "green" && text === "Add Light") {
      console.log("add light");
      setLightCount(lightCount + 1);
      console.log(lightCount);
      setCards(prevCards => [...prevCards, prevCards.length]);
    }
  }




  return (
    <main>

      <button type="button" className={nameOfClass} onClick={handleClick}> {text}</button >
      <div>
        {cards.map((cardIndex) => (
          <Card key={cardIndex} index={cardIndex} />
        ))}
      </div>
    </main>

  )
}


export default Button