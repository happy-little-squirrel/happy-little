import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Block from '../components/Block';
import { interiors, values } from '../utils/data';
import { AboutSlider } from '../components/Slider';
import ModalOursCoffeeHouse from '../components/ModalOursCoffeeHouse';
import AliceCarousel from 'react-alice-carousel';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';

function About() {
  const [modalActive, setModalActive] = useState(false);
  const prevbuttons = () => (
    <div className=" absolute top-[50%] -left-5 ">
      <IoIosArrowBack />
    </div>
  );
  const nextbuttons = () => (
    <div className=" absolute top-[50%] -right-5 ">
      <IoIosArrowForward />
    </div>
  );
  return (
    <section className=" text-[#594e4e] font-monts leading-[1.5] tracking-[1.5px] text-[18px] font-semibold ">
      <section className=" max-lg:bg-center max-lg:flex max-lg:justify-center max-lg:px-0 relative h-screen w-[100vw] px-27 bg-[url(src/assets/images/about/about_cover.png)] bg-cover bg-no-repeat ">
        <img className=" max-lg:hidden absolute z-10 top-0 right-0 " src="/src/assets/images/cloud01.png "></img>
        <img className=" max-lg:hidden absolute z-1 left-0 bottom-0 " src="/src/assets/images/cloud02.png "></img>
        <div className=" h-[100%] flex flex-col gap-2.5 justify-center items-center text-white ">
          <h1 className=" max-lg:text-[75px] text-center w-full font-merri text-8xl m-0 uppercase font-black tracking-widest ">Happy little</h1>
          <h2 className=" max-lg:text-[45px] max-lg:text-center font-monts text-[55px] m-0 uppercase font-semibold ">Маленькое счастье</h2>
          <h3 className=" max-lg:text-[25px] font-monts text-[40px] m-0 uppercase font-normal ">Чашечка кофе</h3>
          <p className=" max-lg:text-center max-lg:ml-0 mt-7 font-monts text-[20px] m-0 ml-[24%] opacity-80 leading-[30px] tracking-widest font-semibold ">
            По знаку зодиака. По вкусу. По душе
          </p>
        </div>
      </section>
      <section className=" max-lg:mb-2 max-sm:gap-4 max-lg:drop-shadow-none drop-shadow-[0px_-120px_50px_rgba(255,255,255,1)] bg-white flex flex-col gap-[30px] ">
        <img className=" max-sm:w-60 absolute " src="/src/assets/images/line01.png"></img>
        <section className=" relative h-screen mt-[2%] flex justify-center ">
          <img className=" max-lg:hidden absolute w-[100%] h-[100%] "src="/src/assets/images/vector02.png"></img>
          <div className=" w-[79%] flex flex-col items-center justify-between ">
            <h2 className=" max-md:text-[20px] max-lg:text-[40px] max-lg:m-3 xl:text-[30px] text-[20px] w-[90%] uppercase m-5 ">This is мы</h2>
            <p className=" max-md:text-[15px] max-lg:text-[18px] xl:text-[20px] text-right w-[90%] text-[18px] ">Первый “HAPPY LITTLE” был открыт еще в 2010 году.</p>
            <div className=" w-[90%] h-[80%] ">
              <AboutSlider />
            </div>
          </div>
        </section>
        <section className=" relative max-lg:h-auto h-screen flex justify-center ">
          <ModalOursCoffeeHouse active={modalActive} setActive={setModalActive} />
          <img className=" max-lg:w-60 absolute right-0 " src="/src/assets/images/line02.png"></img>
          <img className=" max-lg:hidden absolute w-[100%] h-[100%] opacity-50 " src="/src/assets/images/vector01.png"></img>
          <div className=" max-lg:gap-5 max-lg:h-[100%] max-lg:gap-0 justify-between w-[79%] flex flex-col items-end ">
            <div className=" max-lg:gap-5 max-xl:mt-5 max-xl:mr-0 max-xl:w-[100%] max-xl:gap-[40px] gap-[20px] flex mt-20 flex-col items-end w-[90%] mr-5 ">
              <h2 className=" max-md:text-center max-md:text-[15px] max-lg:text-[18px] text-[20px] uppercase ">С самого начала мы вдохновлялись магией звезд и их влиянием на наши вкусовые предпочтения.</h2>
              <p className=" max-lg:w-[100%] max-md:text-[15px] max-lg:text-[18px] w-[80%] font-normal text-right ">
                Это был долгий путь от идеи к открытию, а затем к тому чтобы о нас знали все. Знать свой гороскоп
                прекрасно и чувствовать свою причастность к нему тем более. Ведь данное чувство дает причастность не
                только к знаку, а к чему-то большему за ним. Наша команда прекрасно это понимала и хотела дать вам,
                нашим дорогим гостям, почувствовать это.
              </p>
            </div>
            <div className=" max-md:text-[15px] max-lg:text-[18px] max-lg:w-[100%] max-md:h-[20vh] max-lg:h-[60%] max-md:justify-center max-lg:justify-between flex flex-col gap-[20px] ">
              <h2 className=" max-md:hidden text-[20px] uppercase ">Почему мы?</h2>
              <p className=" max-xl:w-[100%] font-normal w-[65%] ">
                Мы верим, что кофе — это не просто напиток, а способ выразить заботу, подарить тепло и создать
                настроение.
              </p>
              <p className=" max-md:hidden font-normal ">
                А гороскопы — это не просто предсказания, а ключ к пониманию себя и своих потребностей. В "HAPPY LITTLE"
                мы объединили эти два мира, чтобы каждый гость мог найти свой идеальный напиток, который не только
                порадует вкусом, но и зарядит энергией, вдохновением или успокоением в зависимости от вашего знака
                зодиака.
              </p>
              <button onClick={() => setModalActive(true)} className=" max-md:text-[15px] max-lg:text-[18px] hover:text-[#E5946D] cursor-pointer z-1 underline text-right w-[90%] ">
                Наши кофейни
              </button>
            </div>
          </div>
        </section>
        <section className=" relative h-screen flex justify-center">
          <img className=" absolute left-0 " src="/src/assets/images/line01.png"></img>
          <img className=" max-lg:hidden absolute bottom-0 left-0 " src="/src/assets/images/left.png"></img>
          <img className=" max-lg:hidden absolute bottom-0 right-0" src="/src/assets/images/right.png"></img>
          <div className=" w-[79%] flex flex-col gap-[15px] items-center ">
            <h2 className=" max-md:text-[15px] max-lg:text-[18px] text-[20px] uppercase mt-10 ">Наши ценности</h2>
            <div className=" lg:hidden flex-col w-[100%]">
              <AliceCarousel renderPrevButton={prevbuttons} renderNextButton={nextbuttons} disableDotsControls = 'false'> 
                {values.map((block, index) => {
                  return <Block key={index} img={block.img} heading={block.heading} title={block.title} />;
                })}
              </AliceCarousel>  
            </div>
            <div className=" max-lg:hidden w-[80%] h-[45%] flex gap-[20px] border-r-10 border-l-10 border-[#A49986] rounded-r-[90px] rounded-l-[90px]  bg-[url(src/assets/images/values.png)]">
              {values.map((block, index) => {
                return <Block key={index} img={block.img} heading={block.heading} title={block.title} />;
              })}
            </div>
            <h2 className=" max-md:text-[15px] max-lg:text-[18px] text-[20px] uppercase ">Наша команда</h2>
            <div className=" max-lg:hidden hover:w-[110%] hover:duration-1000 duration-1000 w-[80%] h-[40%] relative">
              <img className=" absolute bottom-[10%] " src="/src/assets/images/about/team01.png"></img>
              <img className=" absolute left-[13%] bottom-0 z-5 " src="/src/assets/images/about/team02.png"></img>
              <img className=" absolute left-[23%] z-4 " src="/src/assets/images/about/team03.png"></img>
              <img className=" absolute left-[38%] bottom-[18%] z-3 " src="/src/assets/images/about/team04.png"></img>
              <img className=" absolute right-[25%] bottom-0 z-2 " src="/src/assets/images/about/team05.png"></img>
              <img className=" absolute right-[15%] bottom-[2%] z-1 " src="/src/assets/images/about/team06.png"></img>
              <img className=" absolute right-0 bottom-[2%] " src="/src/assets/images/about/team07.png"></img>
            </div>
            <AliceCarousel disableButtonsControls = 'false' disableDotsControls = 'false'> 
              <div className=" lg:hidden flex h-[40vh] ">
                <img className=" h-[50%]  " src="/src/assets/images/about/team01.png"></img>
                <img className=" -ml-15 h-[100%]  z-5 " src="/src/assets/images/about/team02.png"></img>
              </div>
              <div className=" lg:hidden flex h-[40vh] ">
                <img className=" h-[50%] z-4 " src="/src/assets/images/about/team03.png"></img>
                <img className=" -ml-15 h-[100%] z-3 " src="/src/assets/images/about/team04.png"></img>
              </div>
              <div className=" lg:hidden flex h-[40vh] ">
                <img className=" h-[50%] z-2 " src="/src/assets/images/about/team05.png"></img>
                <img className=" -ml-15 h-[100%] z-1 " src="/src/assets/images/about/team06.png"></img>
                <img className=" -ml-15 h-[50%] " src="/src/assets/images/about/team07.png"></img>
              </div>
            </AliceCarousel> 
          </div>
        </section>
        <section className=" h-screen flex justify-center ">
          <div className=" max-lg:gap-5 max-lg:justify-between w-[79%] flex flex-col items-center gap-[20px] ">
            <h2 className=" text-[20px] uppercase mt-5 ">Наши интерьеры</h2>
            <div className=" max-lg:flex-col max-lg:w-[100%] w-[80%] flex gap-[20px] justify-center ">
              {interiors.map((int, index) => {
                return (
                  <div className=" max-lg:h-[18vh] " key={index}>
                    <img className=" max-lg:w-[100%] max-lg:h-[100%] object-cover" src={int.img}></img>
                  </div>
                );
              })}
            </div>
            <div className=" max-lg:hidden flex flex-col gap-[10px] ">
              <h2 className=" max-md:text-[15px] max-lg:text-[18px] text-[20px] uppercase text-center " >Наш путь</h2>
              <img className="" src="/src/assets/images/about/hr_way.png"></img>
              <div className=" flex gap-[35px] ">
                <p className=" -rotate-45 ">2010</p>
                <p className=" -rotate-45 ">2015</p>
                <p className=" -rotate-45 ">2017</p>
                <p className=" -rotate-45 ">2020</p>
                <p className=" -rotate-45 ">2021</p>
                <p className=" -rotate-45 ">2022</p>
                <p className=" -rotate-45 ">2023</p>
                <p className=" -rotate-45 ">2025</p>
              </div>
            </div>
            <NavLink className=" max-md:text-[15px] max-lg:text-[18px] max-lg:w-[100%] underline w-[90%] text-right " to="https://vk.com/">
              Мы в социальных сетях
            </NavLink>
          </div>
        </section>
      </section>
    </section>
  );
};

export default About;
