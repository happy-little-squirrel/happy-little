import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import AliceCarousel from 'react-alice-carousel';

import Block from '../components/Block';
import { AboutSlider } from '../components/Slider';
import ModalOursCoffeeHouse from '../components/ModalOursCoffeeHouse';
import { interiors, values } from '../utils/data';

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
    <section className=" dark:text-[#f5eaea] dark:bg-[#0b0005] text-[#594e4e] font-monts leading-[1.5] tracking-[1.5px] text-[18px] font-semibold ">
      <ModalOursCoffeeHouse active={modalActive} setActive={setModalActive} />
      <section className=" dark:bg-blend-overlay dark:bg-[#0b0005]/80 max-lg:bg-center max-lg:px-0 lg:relative h-screen flex justify-center bg-[url(src/assets/images/about/about_cover.png)] bg-cover bg-no-repeat ">
        <img className=" dark:mix-blend-overlay max-lg:hidden absolute z-1 top-0 right-0 " src="/src/assets/images/cloud01.png "></img>
        <img className=" dark:opacity-50 max-lg:hidden absolute z-1 left-0 bottom-0 " src="/src/assets/images/cloud02.png "></img>
        <div className=" h-[100%] w-[80%] flex flex-col gap-5 justify-center text-center text-[#f5eaea] uppercase ">
          <h1 className=" max-lg:text-[75px] lg:text-8xl font-merri font-black ">Happy little</h1>
          <h2 className=" max-lg:text-[40px] lg:text-[55px]  ">Маленькое счастье</h2>
          <h3 className=" max-lg:text-[25px] lg:text-[40px] font-normal  ">Чашечка кофе</h3>
          <p className=" max-lg:text-center max-lg:ml-0 lg:text-[20px] lg:text-right lg:w-[90%] opacity-80 normal-case ">
            По знаку зодиака. По вкусу. По душе
          </p>
        </div>
      </section>
      <section className=" dark:drop-shadow-[#0b0005] dark:bg-[#0b0005] max-lg:gap-4 max-lg:drop-shadow-none lg:gap-[30px] lg:drop-shadow-[0px_-120px_50px_rgba(255,255,255,1)] mb-2 bg-white flex flex-col ">
        <section className=" relative h-auto flex justify-center ">
          <img className=" dark:mix-blend-color-burn max-sm:w-60 mix-blend-multiply absolute left-0 " src="/src/assets/images/line01.png"></img>
          <img className=" max-lg:hidden absolute w-[100%] h-[100%] "src="/src/assets/images/vector02.png"></img>
          <div className=" w-[80%] flex flex-col gap-5  ">
            <h2 className=" max-md:text-[20px] max-lg:text-[40px] lg:text-[20px] xl:text-[30px] w-[90%] mt-5 uppercase ">This is мы</h2>
            <p className=" max-md:text-[15px] lg:text-[20px] lg:text-right lg:w-[90%]   ">Первый “HAPPY LITTLE” был открыт еще в 2010 году.</p>
            <div className=" max-lg:h-[70vh] lg:h-[80vh] w-[100%] ">
              <AboutSlider />
            </div>
          </div>
        </section>
        <section className=" relative max-lg:h-auto h-auto flex justify-center ">
          <img className=" dark:mix-blend-color-burn max-sm:w-60 mix-blend-multiply absolute right-0 " src="/src/assets/images/line02.png"></img>
          <img className=" max-lg:hidden absolute w-[100%] h-[100%] opacity-50 " src="/src/assets/images/vector01.png"></img>
          <div className=" lg:items-end w-[80%] flex flex-col gap-10 ">
            <div className=" lg:w-[90%] mt-10 flex flex-col gap-5 items-end ">
              <h2 className=" max-md:text-[15px] lg:text-[20px] text-right uppercase ">С самого начала мы вдохновлялись магией звезд и их влиянием на наши вкусовые предпочтения.</h2>
              <p className=" max-md:text-[15px] lg:w-[80%] font-normal text-right ">
                Это был долгий путь от идеи к открытию, а затем к тому чтобы о нас знали все. Знать свой гороскоп
                прекрасно и чувствовать свою причастность к нему тем более. Ведь данное чувство дает причастность не
                только к знаку, а к чему-то большему за ним. Наша команда прекрасно это понимала и хотела дать вам,
                нашим дорогим гостям, почувствовать это.
              </p>
            </div>
            <div className=" max-md:text-[15px] flex flex-col gap-5 ">
              <h2 className=" max-md:text-[15px] lg:text-[20px] uppercase ">Почему мы?</h2>
              <p className=" max-md:text-[15px] lg:w-[65%] font-normal ">
                Мы верим, что кофе — это не просто напиток, а способ выразить заботу, подарить тепло и создать
                настроение.
              </p>
              <p className=" max-md:text-[15px] font-normal ">
                А гороскопы — это не просто предсказания, а ключ к пониманию себя и своих потребностей. В "HAPPY LITTLE"
                мы объединили эти два мира, чтобы каждый гость мог найти свой идеальный напиток, который не только
                порадует вкусом, но и зарядит энергией, вдохновением или успокоением в зависимости от вашего знака
                зодиака.
              </p>
              <button onClick={() => setModalActive(true)} className=" max-md:text-[15px] lg:hidden hover:text-[#E5946D] cursor-pointer underline text-right ">Наши кофейни</button>
                <button onClick={() => setModalActive(true)} className=" max-md:text-[15px] max-lg:text-[18px] max-lg:hidden hover:text-[#E5946D] cursor-pointer z-1 underline text-right ">Наши кофейни</button>
            </div>
          </div>
        </section>
        <section className=" relative h-auto flex justify-center">
          <img className=" dark:mix-blend-color-burn max-sm:w-60 mix-blend-multiply absolute left-0 " src="/src/assets/images/line01.png"></img>
          <img className=" max-lg:hidden absolute bottom-0 left-0 " src="/src/assets/images/left.png"></img>
          <img className=" max-lg:hidden absolute bottom-0 right-0" src="/src/assets/images/right.png"></img>
          <div className=" w-[80%] flex flex-col gap-5 items-center ">
            <h2 className=" max-md:text-[15px] lg:text-[20px] uppercase mt-10 ">Наши ценности</h2>
            <div className=" lg:hidden flex w-[100%]">
              <AliceCarousel renderPrevButton={prevbuttons} renderNextButton={nextbuttons} disableDotsControls = 'false'> 
                {values.map((block, index) => {
                  return <Block key={index} img={block.img} heading={block.heading} title={block.title} />;
                })}
              </AliceCarousel>  
            </div>
            <div className=" dark:bg-none max-lg:hidden w-[90%] h-[45%] p-3 flex gap-5 border-r-10 border-l-10 border-[#A49986] rounded-r-[90px] rounded-l-[90px] bg-[url(src/assets/images/values.png)] ">
              {values.map((block, index) => {
                return <Block key={index} img={block.img} heading={block.heading} title={block.title} />;
              })}
            </div>
            <h2 className=" max-md:text-[15px] lg:text-[20px] uppercase ">Наша команда</h2>
            <div className=" dark:mix-blend-luminosity dark:opacity-70 max-lg:hidden hover:w-[110%] duration-1000 w-[80%] h-[40vh] relative">
              <img className=" absolute bottom-[10%] " src="/src/assets/images/about/team01.png"></img>
              <img className=" absolute left-[13%] bottom-0 z-5 " src="/src/assets/images/about/team02.png"></img>
              <img className=" absolute left-[23%] z-4 " src="/src/assets/images/about/team03.png"></img>
              <img className=" absolute left-[38%] bottom-[18%] z-3 " src="/src/assets/images/about/team04.png"></img>
              <img className=" absolute right-[25%] bottom-0 z-2 " src="/src/assets/images/about/team05.png"></img>
              <img className=" absolute right-[15%] bottom-[2%] z-1 " src="/src/assets/images/about/team06.png"></img>
              <img className=" absolute right-0 bottom-[10%] " src="/src/assets/images/about/team07.png"></img>
            </div>
            <div className=" lg:hidden w-[100%] h-[100%] dark:mix-blend-luminosity dark:opacity-70 ">
            <AliceCarousel disableButtonsControls = 'false' disableDotsControls = 'false'> 
              <div className=" flex h-[40vh] ">
                <img className=" h-[50%] " src="/src/assets/images/about/team01.png"></img>
                <img className=" -ml-15 h-[100%] w-[100%] z-5 " src="/src/assets/images/about/team02.png"></img>
              </div>
              <div className=" flex h-[40vh] ">
                <img className=" h-[50%] z-4 " src="/src/assets/images/about/team03.png"></img>
                <img className=" -ml-15 h-[100%] z-3 " src="/src/assets/images/about/team04.png"></img>
              </div>
              <div className=" flex h-[40vh] ">
                <img className=" h-[50%] z-2 " src="/src/assets/images/about/team05.png"></img>
                <img className=" -ml-15 h-[100%] z-1 " src="/src/assets/images/about/team06.png"></img>
                <img className=" -ml-15 h-[50%] " src="/src/assets/images/about/team07.png"></img>
              </div>
            </AliceCarousel> 
            </div>
          </div>
        </section>
        <section className=" max-lg:h-auto lg:h-screen flex justify-center ">
          <div className=" w-[80%] flex flex-col items-center gap-5 ">
            <h2 className=" lg:text-[20px] uppercase mt-5 ">Наши интерьеры</h2>
            <div className=" max-lg:flex-col max-lg:w-[100%] lg:w-[80%] h-[100%] flex gap-10  ">
              {interiors.map((int, index) => {
                return (
                  <div className=" max-lg:h-[18vh] " key={index}>
                    <img className=" hover:scale-105 duration-1000 dark:mix-blend-luminosity dark:opacity-50 max-lg:w-[100%] lg:w-[20vw] h-[100%] object-cover " src={int.img}></img>
                  </div>
                );
              })}
            </div>
            <NavLink className=" max-md:text-[15px] max-lg:w-[100%] lg:w-[90%] underline text-right " to="https://vk.com/">
              Мы в социальных сетях
            </NavLink>
          </div>
        </section>
      </section>
    </section>
  );
};

export default About;
