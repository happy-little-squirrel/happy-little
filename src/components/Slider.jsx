import { homeSlider } from '../utils/data';
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { NavLink } from 'react-router-dom'
import { aboutSlider } from '../utils/data';

const HomeSlide = ({img, heading, btn, path}) => {
    return (
        <div className=" w-[100%] h-[80vh] flex justify-center relative  ">
            <figure className=" max-lg:hidden lg:left-30 lg:w-[15%] absolute z-1 left-15 bg-white w-[20%] h-[55%] rounded-b-[90px] opacity-[0.8] flex flex-col gap-10 justify-center items-center ">
                <h3 className=" w-[90%] text-center ">{heading}</h3>
                <NavLink to={path} className=" hover:text-[#E5946D] ">
                    <button className=" underline cursor-pointer text-[15px] text-center w-[100%] ">{btn}</button>
                </NavLink>
            </figure>
            <img className=" max-sm:h-[100%] max-sm:drop-shadow-[0px_0px_5px_rgba(0,0,0,1)] max-sm:p-2 object-cover drop-shadow-[0px_0px_10px_rgba(0,0,0,1)] p-5 " src={img}></img>
        </div> 
    )
};

const AboutSlide = ({img}) => {
    return (
            <div className=" w-[100%] h-[80vh] flex justify-center ">
                <img className="  max-sm:h-[100%] max-sm:drop-shadow-[0px_0px_5px_rgba(0,0,0,1)] max-sm:p-2 object-cover drop-shadow-[0px_0px_10px_rgba(0,0,0,1)] h-[100%] p-5 " src={img}></img>
            </div>
    )
};

const dots = () => (
    <div className=" hover:bg-[#E5946D] relative cursor-pointer bottom-[110px] rounded-full m-5 bg-white opacity-[0.8] w-[20px] h-[20px] "></div>
);
    
export const HomeSlider = () => (
    <AliceCarousel 
        disableButtonsControls = 'false'
        renderDotsItem={dots}
    >
    {homeSlider.map((homeslide, index) => {
        return (
            <HomeSlide key={index} img={homeslide.img} heading={homeslide.heading} btn={homeslide.btn} path={homeslide.path}/>
        )
    })}
    </AliceCarousel>
);

export const AboutSlider = () => (
    <AliceCarousel 
        disableButtonsControls = 'false'
        renderDotsItem={dots}
    >
    {aboutSlider.map((aboutslide, index) => {
        return (
            <AboutSlide key={index} img={aboutslide.img} />
        )
    })}
    </AliceCarousel>
);
    
