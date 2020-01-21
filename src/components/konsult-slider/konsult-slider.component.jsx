import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick"
import SliderItem from '../konsult-slider-item/konsult-slider-item.component'



const SliderCont = styled.div`
    position: fixed;
    top: 15%;
    left: 15%;
    width: 70%;
    z-index: 1;
    cursor: auto;
    opacity: 0;
    transition: opacity  0.1s ease-in-out;
`
const SliderSlider = styled(Slider)`
    height: 70vh;
`

  const SliderBackground = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.5);
  cursor: pointer;
  pointer-events: none;
  opacity: 0;
  transition: opacity  0.1s ease-in-out;
`

const KonsultSlider = ({konsulter, showing,click}) => {
    
    console.log(showing)
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <div>
            <SliderBackground onClick={() => click({
            pointerEvents: 'none',
            opacity: 0
        })} style={{pointerEvents: showing.pointerEvents, opacity: showing.opacity}}>
        </SliderBackground>
        <SliderCont style={{pointerEvents: showing.pointerEvents, opacity: showing.opacity}}>
                <SliderSlider {...settings} >
                    {konsulter.map((konsult, id) => <SliderItem key={id} konsult={konsult} />)}
                </SliderSlider>
            </SliderCont>
        </div>
        
    )
}

export default KonsultSlider
