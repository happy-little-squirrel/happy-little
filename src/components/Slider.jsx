import { NavLink } from 'react-router-dom'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { homeSlider, aboutSlider } from '../utils/data';

const HomeSlide = ({img, heading, btn, path}) => {
    return (
        <div className=" lg:flex lg:justify-center lg:relative  ">
            <figure className=" dark:bg-[#0b0005] max-lg:hidden lg:w-[20%] xl:w-[15%] left-50 absolute z-1 bg-white h-[55%] rounded-b-[90px] opacity-[0.8] flex flex-col gap-10 justify-center items-center ">
                <h3 className=" w-[90%] text-center ">{heading}</h3>
                <NavLink to={path} className=" hover:text-[#E5946D] ">
                    <button className=" underline cursor-pointer text-[15px] text-center w-[100%] ">{btn}</button>
                </NavLink>
            </figure>
            <img className=" max-sm:drop-shadow-[0px_0px_5px_rgba(0,0,0,1)] max-sm:p-2 md:drop-shadow-[0px_0px_10px_rgba(0,0,0,1)] md:p-5 max-lg:h-[70vh] max-lg:object-cover lg:h-[80vh]  " src={img}></img>
        </div> 
    )
};

const AboutSlide = ({img}) => {
    return (
            <div className=" lg:flex lg:justify-center ">
                <img className=" max-sm:drop-shadow-[0px_0px_5px_rgba(0,0,0,1)] max-sm:p-2 md:drop-shadow-[0px_0px_10px_rgba(0,0,0,1)] md:p-5 max-lg:h-[70vh] max-lg:object-cover lg:h-[80vh] " src={img}></img>
            </div>
    )
};

const dots = () => (
    <div className=" dark:mix-blend-difference hover:bg-[#E5946D] relative cursor-pointer bottom-[110px] rounded-full m-5 bg-white opacity-[0.8] w-[20px] h-[20px] "></div>
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
    
