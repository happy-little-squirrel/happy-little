import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import List from '../components/List';
import { HomeSlider } from '../components/Slider';
import ModalOursCoffeeHouse from '../components/ModalOursCoffeeHouse';
import { news, coffees } from '../utils/data';

function Home() {
  const [modalActive, setModalActive] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [offset, setoffset] = useState(0);
  const handlePrev = () => {
    setoffset((currentoffset) => {
      const newoffset = currentoffset + 100;
      return Math.min(newoffset, 0);
    });
  };
  const handleNext = () => {
    setoffset((currentoffset) => {
      const newoffset = currentoffset - 100;
      const maxoffset = -(55 * (coffees.length - 1));
      return Math.max(newoffset, maxoffset);
    });
  };
  const selectedCoffee = coffees[selectedIndex];
    return (
      <section className=" blur-none dark:text-[#f5eaea] dark:bg-[#0b0005] text-[#594e4e] font-monts leading-[1.5] tracking-[1.5px] text-[18px] font-semibold ">
        <ModalOursCoffeeHouse active={modalActive} setActive={setModalActive} />
        <section className=" dark:bg-blend-overlay dark:bg-[#0b0005]/60 max-lg:px-0 max-lg:bg-center lg:px-40 lg:relative h-screen bg-[url(src/assets/images/home/home_cover.jpg)] bg-cover bg-no-repeat bg-white/30 bg-blend-lighten ">
          <img className=" dark:mix-blend-overlay max-lg:invisible absolute right-0 top-0" src="/src/assets/images/cloud01.png "></img>
          <img className=" dark:opacity-50 max-lg:invisible absolute left-0 bottom-0" src="/src/assets/images/cloud02.png "></img>
          <div className=" max-lg:w-[100%] max-lg:items-center flex lg:w-[80%] h-[100%] ">
            <div className=" max-lg:hidden h-[80%] w-[25%] flex flex-col relative">
              <figure className=" dark:bg-[#0b0005] w-[70%] h-[70%] rounded-b-[90px] bg-no-repeat bg-cover bg-[url(src/assets/images/home/stars.png)] bg-[#594e4e] "></figure>
              <img className=" dark:text-[#0b0005] lg:w-[80%] xl:w-[70%] 2xl:w-[60%] rounded-full border-3 p-2 absolute bottom-0 right-0 " src="/src/assets/images/home/coffee.png"></img>
            </div>
            <div className=" max-lg:items-center max-md:text-[75px] max-lg:text-[100px] max-lg:w-[100%] max-lg:p-0 max-lg:static lg:absolute lg:p-10 lg:w-[50%] lg:text-8xl flex flex-col gap-2 font-merri font-black uppercase ">
              <div className=" flex ">
                <h1 className=" dark:text-[#f5eaea] max-lg:text-[#594e4e] text-[#f5eaea] ">Ha</h1>
                <h1 className="">ppy</h1>
              </div>
              <h1 className=" max-sm:text-center text-right ">Little</h1>
            </div>
          </div>
        </section>
        <section className=" dark:drop-shadow-[#0b0005] dark:bg-[#0b0005] max-lg:gap-4 max-lg:drop-shadow-none lg:drop-shadow-[0px_-120px_50px_rgba(255,255,255,1)] lg:gap-[30px] bg-white flex flex-col mb-2 ">
          <section className=" relative h-auto flex justify-center ">
            <img className=" dark:mix-blend-color-burn max-sm:w-60 mix-blend-multiply absolute left-0 " src="/src/assets/images/line01.png"></img>
            <img className=" max-lg:hidden absolute w-[100%] h-[100%] " src="/src/assets/images/vector01.png"></img>
            <div className=" w-[80%] flex flex-col gap-5 items-center ">
              <h2 className=" max-md:text-[15px] lg:text-[20px] mt-5 text-center uppercase ">“HAPPY LITTLE” - Маленькое счастье - чашечка кофе</h2>
              <div className=" max-lg:h-[70vh] lg:h-[80vh] w-[100%] ">
                <HomeSlider />
              </div>
            </div>
          </section>
          <section className=" lg:relative h-auto flex flex-col items-center ">
            <ModalOursCoffeeHouse active={modalActive} setActive={setModalActive} />
            <img className=" dark:mix-blend-color-burn max-sm:w-60 mix-blend-multiply " src="/src/assets/images/line03.png"></img>
            <img className=" max-lg:hidden absolute h-[100%] w-[100%] opacity-50 " src="/src/assets/images/vector02.png"></img>
            <div className=" w-[80%] flex flex-col items-center ">
              <div className=" lg:w-[100%] mt-5 flex flex-col gap-5 ">
                <h2 className=" max-md:text-[15px] lg:text-[20px]  ">Мы — проводники в мир вкусов, ароматов и звезд</h2>
                <p className=" max-md:text-[15px] font-normal ">
                  Каждый знак зодиака уникален, и мы создаем кофе, который отражает его энергию, характер и настроение. От
                  насыщенных и смелых купажей для огненных Овнов до нежных и утонченных ноток для воздушных Весов — наш
                  кофе подобран так, чтобы подчеркнуть вашу индивидуальность и стать частью вашего дня.
                </p>
                <button onClick={() => setModalActive(true)} className=" max-md:text-[15px] lg:hidden hover:text-[#E5946D] cursor-pointer z-1 underline w-[90%] text-right ">Наши кофейни</button>
              </div>
              <div className=" dark:mix-blend-luminosity dark:opacity-70 max-lg:hidden relative hover:w-[100%] duration-1000 mt-5 w-[85%] h-[50vh] ">
                  <img className=" absolute h-[55%] left-0 " src="/src/assets/images/home/coff01.png" ></img>
                  <img className=" absolute h-[100%] bottom-[5%] left-[15%] " src="/src/assets/images/home/coff02.png"></img>
                  <img className=" absolute h-[50%] bottom-[20%] left-[40%] " src="/src/assets/images/home/coff03.png"></img>
                  <img className=" absolute h-[90%] right-[13%] " src="/src/assets/images/home/coff04.png"></img>
                  <img className=" absolute h-[60%] right-0  " src="/src/assets/images/home/coff05.png"></img>
              </div>
              <AliceCarousel disableButtonsControls = 'false' disableDotsControls = 'false'> 
                <div className=" max-sm:ml-0 max-lg:ml-20 lg:hidden mt-5 flex ">
                  <img className=" h-[50%] z-1 " src="/src/assets/images/home/coff01.png" ></img>
                  <img className=" max-md:-ml-25 max-lg:-ml-30 h-[90%] " src="/src/assets/images/home/coff02.png"></img>
                </div>
                <div className=" max-sm:ml-0 max-lg:-ml-60 lg:hidden mt-5 flex ">
                  <img className=" mt-20 z-1 h-[50%] " src="/src/assets/images/home/coff03.png"></img>
                  <img className=" -ml-15 h-[80%] " src="/src/assets/images/home/coff04.png"></img>
                  <img className=" max-md:w-[50%] -ml-20 h-[50%] " src="/src/assets/images/home/coff05.png"></img>
                </div>
              </AliceCarousel>
              <p className=" max-sm:hidden max-md:text-[15px] max-lg:mt-5 text-right w-[90%] ">По знаку зодиака. По вкусу. По душе....</p>
              <img className=" dark:mix-blend-color-burn max-sm:w-60 mix-blend-multiply mt-5 " src="/src/assets/images/line03.png"></img>
            </div>
          </section>
          <section className=" lg:relative h-auto flex justify-center ">
            <img className=" max-lg:hidden absolute top-[70%] left-0 " src="/src/assets/images/blob01.png"></img>
            <img className=" max-lg:hidden absolute top-[70%] right-0 " src="/src/assets/images/blob02.png"></img>
            <div className=" dark:p-2 dark:opacity-50 dark:mix-blend-light dark:text-[#594e4e] lg:items-center bg-white w-[80%] flex flex-col gap-5 ">
              <h2 className=" max-md:text-[15px] max-md:text-center max-lg:w-[100%] lg:w-[90%] mt-5 uppercase ">
                “HAPPY LITTLE” - не просто кофейня, а гастрономическое путешествие по созвездиям.
              </h2>
              <div className=" max-lg:w-[100%] lg:items-center w-[90%] flex flex-col gap-5 ">
                <div className=" lg:items-end flex flex-col ">
                  <div className=" max-lg:flex max-lg:flex-col max-lg:gap-5 lg:grid lg:grid-cols-[1fr_0.7fr] ">
                    {selectedCoffee && (
                      <div className=" md:items-center max-lg:gap-5 lg:h-[100%] lg:w-[90%] lg:justify-center lg:gap-10 flex flex-col ">
                        <p className=" max-md:text-[15px] text-right font-normal ">
                          В нашей кофейне каждый напиток – это загадочный персонаж, созданный по мотивам вашего знака зодиака.
                        </p>
                        <div className=" gap-2 flex flex-col w-[100%] ">
                          <div className=" max-md:text-[15px] flex gap-2 items-start ">
                            <p className=" font-normal ">Например,</p>
                            <p>{selectedCoffee.name}</p>
                          </div>
                            <p className=" max-md:text-[15px] font-normal ">{selectedCoffee.descriptions}</p>
                        </div>
                        <NavLink to={`/Menu/2/${`${selectedCoffee.id-1}`}`}className=" max-md:hidden hover:bg-[#E5946D] cursor-pointer text-[#F5EAEA] bg-[#594E4E] rounded-[90px] py-3 px-10 flex justify-center ">Подробнее</NavLink>
                      </div>
                    )}
                    {selectedCoffee && (
                      <div>
                        <img className=" lg:h-[346px] " src={selectedCoffee.bigimg} />
                      </div>
                    )}
                  </div>
                  {selectedCoffee && (
                    <div className=" max-lg:w-[100%] max-lg:items-center lg:w-[70%] lg:items-end flex flex-col gap-5 ">
                      <div className=" max-md:text-[15px] lg:text-[20px] lg:mr-15 lg:w-[50%] lg:justify-center flex gap-3 ">
                        <h4>{selectedCoffee.volume}</h4>/
                        <h4>{selectedCoffee.price}</h4>
                      </div>
                      <p className=" max-md:text-[15px] lg:h-[60px] font-normal text-right ">{selectedCoffee.composition}</p>
                    </div>
                  )}
                </div>
                <div className=" max-lg:w-[100%] w-[60%] h-[25%] flex flex-col gap-5 ">
                  <div className=" max-md:hidden max-lg:gap-10 flex items-center ">
                    <IoIosArrowBack className=" w-[20%] hover:scale-150 cursor-pointer " onClick={handlePrev} />
                    <div className=" overflow-hidden flex  ">
                      <div className=" flex gap-5 ">
                        {coffees.map((item, index) => {
                          return (
                            <div key={index} className=" duration-150 hover:opacity-100 opacity-50 w-[80px] h-[88px] cursor-pointer " style={{ transform: `translateX(${offset}px)`, }} onClick={() => setSelectedIndex(index)} >
                              <img className=" h-[100%] " src={item.img} />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <IoIosArrowForward className=" w-[20%] hover:scale-150 cursor-pointer " onClick={handleNext} />
                  </div>
                  <NavLink className=" max-md:text-[15px] underline text-center hover:text-[#E5946D] " to="/Menu/0">Посмотреть меню</NavLink>
                </div>  
              </div>
            </div>
          </section>
          <section className=" h-auto flex flex-col items-center ">
          <img className=" dark:mix-blend-color-burn max-lg:w-60 mix-blend-multiply " src="/src/assets/images/line03.png"></img>
            <div className=" lg:items-center w-[80%] flex flex-col gap-5 ">
              <h2 className=" max-md:text-[15px] max-md:text-center md:text-right lg:text-[20px] lg:w-[90%] uppercase mt-5 ">Последние новости</h2>
              <div className=" max-lg:w-[100%] max-lg:flex-col justify-center flex w-[80%] gap-5 ">
                {news.map((list, index) => {
                  return <List key={index} heading={list.heading} img={list.img} />;
                })}
              </div>
              <NavLink className=" max-md:text-[15px] max-md:text-center md:text-right lg:w-[90%] hover:text-[#E5946D] underline " to="https://vk.com/">
                Подробнее в нашем сообществе ВКонтакте
              </NavLink>
            </div>
          </section>
        </section>
      </section>
    );
  };
export default Home;
