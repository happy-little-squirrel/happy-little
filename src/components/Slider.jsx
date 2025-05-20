import { homeSlider } from '../utils/data';
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { NavLink } from 'react-router-dom'
import { aboutSlider } from '../utils/data';

const HomeSlide = ({img, heading, btn, path}) => {
    const setActive = ({ isActive }) => (isActive ? " text-[#E5946D] underline " : " hover:bg-[#E5946D] focus:outline-none ")
    return (
        <div className=" font-monts text-[#594e4e] font-semibold tracking-[2px] w-[100%] h-[600px] flex justify-center ">
            <div className=" w-[85%] h-[100%] relative ">
                <figure className=" absolute z-1 left-10 bg-white w-[15%] h-[50%] rounded-b-[90px] opacity-[0.8] flex flex-col gap-[60px] justify-center ">
                    <h3 className=" text-center ">{heading}</h3>
                    <NavLink to={path} className=" hover:text-[#E5946D] ">
                        <button className=" underline cursor-pointer text-[15px] text-center w-[100%] ">{btn}</button>
                    </NavLink>
                </figure>
                <img className=" drop-shadow-[0px_0px_10px_rgba(0,0,0,1)] h-[100%] p-5 relative " src={img}></img>
            </div>
        </div>
    )
};

const AboutSlide = ({img}) => {
    return (
        <div className=" font-monts text-[#594e4e] font-semibold tracking-[2px] w-[100%] h-[600px] flex justify-center ">
            <div className=" w-[85%] h-[100%] relative ">
                <img className=" drop-shadow-[0px_0px_10px_rgba(0,0,0,1)] h-[100%] p-5 relative " src={img}></img>
            </div>
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
    


