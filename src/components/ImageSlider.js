import React, { useState } from 'react';

import img1 from '../img/liv1.jpeg';
import img2 from '../img/liv2.jpeg';
import img3 from '../img/liv3.jpeg';
import img4 from '../img/liv4.jpeg';
import img5 from '../img/liv5.jpeg';

function ImageSlider() {
  const [activePanel, setActivePanel] = useState(0);

  const handleClick = (panelIndex) => {
    setActivePanel(panelIndex);
  };

  const panels = [
    { image: img1, title: '1st card' },
    { image: img2, title: '2nd card' },
    { image: img3, title: '3rd card' },
    { image: img4, title: '4th card' },
    { image: img5, title: '5th card' }
  ];

  return (
    <div>
        <div style={{textAlign:"center",fontSize:"3rem", padding:"40px 10px 40px 10px"}}>GALLARY</div>
      <div className="ImageSlider">
        {panels.map((panel, index) => (
          <div
            key={index}
            className={`panel ${activePanel === index ? 'active' : ''}`}
            style={{ backgroundImage: `url(${panel.image})`}}
            onClick={() => handleClick(index)}
          >
            {/* <h3>{panel.title}</h3> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;