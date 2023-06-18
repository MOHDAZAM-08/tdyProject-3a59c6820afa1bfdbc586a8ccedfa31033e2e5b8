import React from 'react';
import Card from './Card';
import { useState } from 'react';

import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

import img1 from '../img/liv1.jpeg';
import img2 from '../img/liv2.jpeg';
import img3 from '../img/liv3.jpeg';
import img4 from '../img/liv4.jpeg';

const ReviewSection = (props) => {
  const [index, setIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      name: 'John Doe',
      job: 'Web Developer',
      text: `   I recently hired The Design Yard for my interior design needs, and I couldn't be happier with the results. Their team of talented designers transformed my living room into a stylish and functional space that perfectly reflects my taste. From selecting the furniture to choosing the color scheme, their attention to detail was commendable.`,
      image: img1,
    },
    {
      id: 2,
      name: 'Jane Smith',
      job: 'Designer',
      text: `I recently hired The Design Yard for my interior design needs, and I couldn't be happier with the results. Their team of talented designers transformed my living room into a stylish and functional space that perfectly reflects my taste. From selecting the furniture to choosing the color scheme, their attention to detail was commendable.`,
      image: img2,
    },
    {
      id: 3,
      name: 'Mike Johnson',
      job: 'Marketing Specialist',
      text: `I recently hired The Design Yard for my interior design needs, and I couldn't be happier with the results. Their team of talented designers transformed my living room into a stylish and functional space that perfectly reflects my taste. From selecting the furniture to choosing the color scheme, their attention to detail was commendable.`,
      image: img3,
    },
    {
      id: 4,
      name: 'Sarah Thompson',
      job: 'Project Manager',
      text: `I recently hired The Design Yard for my interior design needs, and I couldn't be happier with the results. Their team of talented designers transformed my living room into a stylish and functional space that perfectly reflects my taste. From selecting the furniture to choosing the color scheme, their attention to detail was commendable.`,
      image: img4,
    },
    // Add more review objects as needed
  ];

  function lefthandler() {
    if (index - 1 < 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function righthandler() {
    if (index + 1 >= reviews.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  return (
    <div className="review-section">
      <div className="review-button">
        <button onClick={lefthandler}><MdArrowBackIosNew/></button>
      </div>

      <Card className="review-card" reviews={reviews[index]}></Card>

      <div className="review-button">
        <button onClick={righthandler}><MdArrowForwardIos/></button>
        {/* <button onClick={righthandler}>&#10233;</button> */}
      </div>
    </div>
  );
};

export default ReviewSection;