import React, {useState} from 'react';
import './Slider.css';
import dataSlider from './dataSlider';
import BtnSlider from '../BtnSlider';

export function Slider() {
  const [sliderAnim, setSliderAnim] = useState({
    index: 1,
    inProgress: false
  });

  const nextSlide = () => {
    if(sliderAnim.index !== dataSlider.length){
        setSliderAnim({index: sliderAnim.index + 1, inProgress: true});
    }else if(sliderAnim.index === dataSlider.length){
        setSliderAnim({index: 1, inProgress: true});
    }
  }

  const prevSlide = () => {
    if(sliderAnim.index !== 1){
        setSliderAnim({index: sliderAnim.index - 1 , inProgress: true});   
    }else if(sliderAnim.index === 1){
        setSliderAnim({index: dataSlider.length, inProgress: true});
    }
  }

  return (
    <div className='container-slider'>
        {
            dataSlider.map((obj, index) => {
                return (
                    <div
                        key={obj.id}
                        className={sliderAnim.index === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img src={process.env.PUBLIC_URL + `/Imgs/img${ index +1 }.jpg`} alt=""/>
                    </div>
                )
            })
        }
        <BtnSlider moveSlide={nextSlide} direction={"next"}/>
        <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
    </div>
  )
}
export default Slider