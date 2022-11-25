import React, {useState} from 'react';
import './Slider.css';
import dataSlider from './dataSlider';
import BtnSlider from '../BtnSlider';

export function Slider() {
  const [sliderAnim, setSliderAnim] = useState({
    index: 1,
    inProgress: false
  });

  function preventSpam(i, p){
    setTimeout(() => {
        setSliderAnim({index: i ,inProgress: p})
    }, 400);
  }

  const nextSlide = () => {
    if(sliderAnim.index !== dataSlider.length && !sliderAnim.inProgress){
        preventSpam(sliderAnim.index + 1,false);
    }else if(sliderAnim.index === dataSlider.length){
        preventSpam(1,false);
    }
  }

  const prevSlide = () => {
    if(sliderAnim.index !== 1 && !sliderAnim.inProgress && !sliderAnim.inProgress){
        preventSpam(sliderAnim.index - 1,false);
    }else if(sliderAnim.index === 1){
        preventSpam(dataSlider.length, false);
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
        

        <div className='container-dots'>
            {
                Array.from({length: 5}).map((item, index) => {
                    return (
                        <div 
                        onClick={() => preventSpam(index + 1, false)}
                        className={sliderAnim.index === index +1 ? "dot active" : "dot"}>
                        </div>
                    )
                })
            }
            
        </div>
    </div>
  )
}
export default Slider