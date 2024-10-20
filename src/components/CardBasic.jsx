import React from 'react';

// <CardBasic title={"Hello World"} desc={"This is a card"} img={img3} btn={'Start'} btnColor={"btn-secondary"}/>

function CardBasic({ title, img, desc, btn, btnColor }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      {img && <img src={img} className="card-img-top" alt={title} />}
      <div className="card-body">
        {title && <h5 className="card-title">{title}</h5>}
        {desc && <p className="card-text">{desc}</p>}
        {btn && <a href="#" className={`btn ${btnColor}`}>{btn}</a>}
      </div>
    </div>
  );
}

export default CardBasic;