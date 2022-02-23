import React from 'react';
// import styled from 'styled-components'
import SliderImgData from "../Data/SliderImgData";

const Slider = () => {
    {SliderImgData.map((slide, index)=>{
        return(
            <>
                <img src={slide.image} alt='events images' />
            </>
        )
    })}
}

export default Slider;