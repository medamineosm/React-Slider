import React from 'react'
import leftArrow from './Slider/icons/left-arrow.svg';
import rightArrow from './Slider/icons/right-arrow.svg';

function BtnSlider({direction, moveSlide}) {
    return (
    <button 
        onClick={moveSlide}
        className={`btn-slide ${direction}`}
    >
        <img src={direction === "next" ? rightArrow : leftArrow} alt="icon arrow"/>
    </button>
  )
}

export default BtnSlider