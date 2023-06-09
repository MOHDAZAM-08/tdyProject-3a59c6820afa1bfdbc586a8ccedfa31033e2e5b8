import React from 'react'
import Navbar from './Navbar'
import Carousel from './Carousel'
import Footer from './Footer'
import kit from '../img/liv (16).jpeg';
import team from '../img/liv (12).jpeg';
import FlipCard from './FlipCard';
import ImageSlider from './ImageSlider';
import PanelComponent from './ImageSlider';
import Slider from './Slider';
import yardf from '../img/liv (10).jpeg'
import yards from '../img/liv (12).jpeg'
import yardt from '../img/liv (17).jpeg'

function LandingPage(...images) {
  const slides = [
    {
      image:`${yardf}`,
      text: 'interior',
      location: 'In Delhi',
    },
    {
      image: `${yards}`,
      text: 'top architecture',
      location: 'In Bangalore',
    },
    {
      image:`${yardt}`,
      text: 'ongoing',
      location: 'In Gujrat',
    },
  ];
  return (
    <div className='LandingPage'>
      <Navbar /> 
      <Slider slides={slides} />
     
      <div className="about">
        <div className="head">ABOUT</div>

      <div className="image-description">

      <div className="image-container">
      <img src={kit} className='yard-img'></img>
      </div>

      <div className="description-container"> 
         <div className='yard-head'>The Design Yard</div>
         <div className='yard-line'></div>
        <div className='yard-para'>Architecture is the art and technique of designing and building, as distinguished from the skills associated with construction. It is both the process and the product of sketching, conceiving, planning, designing, and constructing buildings or other structures.</div>
      </div>

    </div>
    </div>

    <div className="team-description">

    <div className="description-container"> 
       <div className='yard-head'>About Team</div>
       <div className='yard-line'></div>
      <div className='yard-para'>Architecture is the art and technique of designing and building, as distinguished from the skills associated with construction. It is both the process and the product of sketching, conceiving, planning, designing, and constructing buildings or other structures.</div>
    </div>

    <div className="image-container">
    <img src={team} className='yard-img'></img>
    </div>

  </div>
   
      <FlipCard/>
      <ImageSlider/>
    
    </div>
  );
}

export default LandingPage;

