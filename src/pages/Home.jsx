import List from '../components/List';
import { HomeSlider } from '../components/Slider';
import React, { useState } from 'react';
import ModalOursCoffeeHouse from '../components/ModalOursCoffeeHouse';
import { NavLink } from 'react-router-dom';
import { news } from '../utils/data';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import { coffees } from '../utils/data';
import AliceCarousel from 'react-alice-carousel';

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
      <section className=" text-[#594e4e] font-monts leading-[1.5] tracking-[1.5px] text-[18px] font-semibold ">
        <section className=" max-lg:px-0 max-lg:bg-center max-lg:flex max-lg:justify-center relative h-screen w-[100vw] px-27 bg-[url(src/assets/images/home/home_cover.jpg)] bg-cover bg-no-repeat  bg-white/30 bg-blend-lighten ">
          <img className=" max-lg:invisible absolute right-0 top-0" src="/src/assets/images/cloud01.png "></img>
          <img className=" max-lg:invisible absolute left-0 bottom-0" src="/src/assets/images/cloud02.png "></img>
          <div className=" max-lg:pl-0 max-lg:items-center max-lg:justify-center flex w-[79%] h-[100%] pl-20 ">
            <div className=" max-lg:hidden flex flex-col w-[25%] relative h-[70%] ">
              <figure className=" w-[70%] rounded-b-[90px] h-[75%] bg-no-repeat bg-cover bg-[url(src/assets/images/home/stars.png)] bg-[#594e4e] "></figure>
              <img className=" 2xl:w-[60%] xl:w-[70%] lg:w-[80%] rounded-full border-3 p-2 absolute bottom-0 right-0 " src="/src/assets/images/home/coffee.png"></img>
            </div>
            <div className=" max-lg:items-center max-md:text-[75px] max-lg:text-[100px] max-lg:w-100 max-lg:p-0 max-lg:static absolute p-10 w-[50%] flex flex-col gap-[20px] font-merri text-8xl font-black uppercase ">
              <div className=" flex ">
                <h1 className=" max-lg:text-[#594e4e] text-[#f5eaea] ">Ha</h1>
                <h1 className="">ppy</h1>
              </div>
              <h1 className=" max-sm:text-center text-right ">Little</h1>
            </div>
          </div>
        </section>
        <section className=" max-sm:gap-4 max-lg:drop-shadow-none drop-shadow-[0px_-120px_50px_rgba(255,255,255,1)] bg-white flex flex-col gap-[30px] mb-2 ">
          <section className=" relative h-screen flex justify-center ">
            <img className=" max-sm:w-60 absolute left-0 top-0 " src="/src/assets/images/line01.png"></img>
            <img className=" max-lg:invisible absolute w-[100%] h-[100%] " src="/src/assets/images/vector01.png"></img>
            <img className=" max-sm:w-60 absolute -bottom-5 " src="/src/assets/images/line03.png"></img>
            <div className=" max-sm:gap-5 w-[79%] mb-1 flex flex-col justify-between gap-[5%] h-[100%] items-center ">
              <h2 className=" max-md:text-[15px] max-lg:text-[18px] font-monts text-[20px] mt-10 text-center uppercase ">“HAPPY LITTLE” - Маленькое счастье - чашечка кофе</h2>
              <div className=" w-[90%] h-[83%] ">
                <HomeSlider />
              </div>
            </div>
          </section>
          <section className=" flex justify-center h-screen relative ">
            <ModalOursCoffeeHouse active={modalActive} setActive={setModalActive} />
            <img className=" max-lg:invisible absolute h-[100%] w-[100%] opacity-55 " src="/src/assets/images/vector02.png"></img>
            <div className=" max-md:h-[100vh] max-lg:min-h-[75vh] w-[79%] flex flex-col items-center justify-between ">
              <div className=" max-md:h-[52%] max-lg:p-0 max-lg:mt-5 max-lg:gap-3 max-lg:h-[30%] p-5 w-[100%] h-[50%] flex flex-col justify-between items-end ">
                <h2 className=" max-md:text-[15px] max-lg:text-[18px] text-[20px] w-[100%]  ">Мы — проводники в мир вкусов, ароматов и звезд</h2>
                <p className=" max-md:text-[15px] max-lg:text-[18px] font-normal w-[100%] ">
                  Каждый знак зодиака уникален, и мы создаем кофе, который отражает его энергию, характер и настроение. От
                  насыщенных и смелых купажей для огненных Овнов до нежных и утонченных ноток для воздушных Весов — наш
                  кофе подобран так, чтобы подчеркнуть вашу индивидуальность и стать частью вашего дня.
                </p>
                <button className=" max-md:text-[15px] max-lg:text-[18px] max-sm:w-[100%] hover:text-[#E5946D] cursor-pointer z-6 underline " onClick={() => setModalActive(true)}>
                  Наши кофейни
                </button>
              </div>
              <div className=" max-lg:hidden hover:w-[90%] hover:duration-1000 duration-1000 w-[75%] h-[50%] relative ">
                  <img className=" h-[55%] absolute left-0 " src="/src/assets/images/home/coff01.png" ></img>
                  <img className=" h-[100%] absolute bottom-[10%] left-[15%] " src="/src/assets/images/home/coff02.png"></img>
                  <img className=" h-[50%] absolute bottom-[20%] left-[40%] " src="/src/assets/images/home/coff03.png"></img>
                  <img className=" h-[90%] absolute right-[13%] bottom-0 " src="/src/assets/images/home/coff04.png"></img>
                  <img className=" h-[60%] absolute right-0  " src="/src/assets/images/home/coff05.png"></img>
              </div>
              <AliceCarousel disableButtonsControls = 'false' disableDotsControls = 'false'> 
                <div className=" max-sm:h-[40vh] flex items-center h-[49vh] w-[100%] lg:hidden ">
                  <img className=" static h-[50%] z-1 " src="/src/assets/images/home/coff01.png" ></img>
                  <img className=" static -ml-25 h-[90%] object-cover " src="/src/assets/images/home/coff02.png"></img>
                </div>
                <div className=" h-[50vh] flex items-center max-sm:ml-0 max-lg:-ml-30 lg:hidden ">
                  <img className=" static mt-20 z-1 h-[50%] " src="/src/assets/images/home/coff03.png"></img>
                  <img className=" static -ml-15 h-[80%] object-cover " src="/src/assets/images/home/coff04.png"></img>
                  <img className=" static -ml-30 h-[50%] " src="/src/assets/images/home/coff05.png"></img>
                </div>
              </AliceCarousel>
              <p className=" max-sm:hidden max-lg:mb-10 max-md:text-[15px] max-lg:text-[18px] text-right w-[90%] ">По знаку зодиака. По вкусу. По душе....</p>
              <img className=" max-lg:absolute max-sm:w-60 bottom-0 w-[50%] " src="/src/assets/images/line03.png"></img>
            </div>
          </section>
          <section className=" h-screen flex justify-center relative ">
            <img className=" max-lg:w-20 max-lg:top-60 absolute top-[70%] left-0 " src="/src/assets/images/blob01.png"></img>
            <img className=" max-lg:w-20 max-lg:top-80 absolute top-[70%] right-0 " src="/src/assets/images/blob02.png"></img>
            <div className=" max-lg:h-[100%] w-[79%] flex flex-col justify-between items-center ">
              <h2 className=" max-md:text-[15px] max-lg:text-[18px] max-lg:mt-2 max-md:text-center w-[90%] mt-5 uppercase ">
                “HAPPY LITTLE” - не просто кофейня, а гастрономическое путешествие по созвездиям.
              </h2>
              <div className=" max-lg:h-[88%] max-lg:w-[100%] w-[90%] flex flex-col justify-between items-center ">
                <div className=" max-md:h-[85%] max-lg:h-[70%] max-lg:items-center max-lg:justify-between max-lg:gap-2 flex flex-col items-end w-[100%] ">
                  <div className=" max-lg:pl-0 max-lg:h-[80%] max-lg:flex max-lg:flex-col max-lg:justify-between pl-5 w-[100%] grid grid-cols-[1fr_0.7fr] items-center ">
                    {selectedCoffee && (
                      <div className=" max-lg:h-[45%] h-[60%] flex flex-col justify-between items-center ">
                        <p className=" max-md:text-[15px] max-lg:text-[18px] max-lg:mt-0 text-right font-normal mt-5 ">
                          В нашей кофейне каждый напиток – это загадочный персонаж, созданный по мотивам вашего знака зодиака.
                        </p>
                        <div className=" max-lg:gap-1 max-lg:h-[50%] flex flex-col justify-center w-[100%] ">
                          <div className=" max-md:text-[15px] max-lg:text-[18px] flex gap-3 ">
                            <p className=" font-normal ">Например,</p>
                            <p className=" max-md:text-right ">{selectedCoffee.name}</p>
                          </div>
                            <p className=" max-md:text-[15px] max-lg:text-[18px] max-sm:text-right font-normal ">{selectedCoffee.descriptions}</p>
                        </div>
                        <NavLink to={`/Menu/2/${`${selectedCoffee.id-1}`}`}className=" max-md:hidden max-lg:text-[18px] hover:bg-[#E5946D] hover:duration-350 duration-700 cursor-pointer text-[#F5EAEA] bg-[#594E4E] rounded-[90px] px-15 py-2  ">Подробнее</NavLink>
                      </div>
                    )}
                    {selectedCoffee && (
                      <div className=" max-lg:w-[100%] max-lg:h-[50%] max-lg:flex max-lg:justify-center ">
                        <img className=" max-lg:h-[100%] " src={selectedCoffee.bigimg} />
                      </div>
                    )}
                  </div>
                  {selectedCoffee && (
                    <div className=" max-lg:justify-between max-lg:w-[100%] max-lg:h-[15%] max-lg:items-center w-[60%] flex flex-col items-end ">
                      <div className=" max-md:text-[15px] max-lg:text-[18px] max-lg:w-[100%] max-lg:h-auto max-lg:justify-center max-lg;gap-0 max-lg:mr-0 mr-15 w-[40%] flex gap-[5px] text-[20px] ">
                        <h4>{selectedCoffee.volume}</h4>/
                        <h4>{selectedCoffee.price}</h4>
                      </div>
                      <p className=" max-lg:h-[50%] max-md:text-[15px] max-lg:text-[18px] h-[60px] font-normal text-right ">{selectedCoffee.composition}</p>
                    </div>
                  )}
                </div>
                <div className=" max-md:h-[10%] max-lg:w-[100%] w-[60%] h-[25%] flex flex-col justify-center gap-[20px] ">
                  <div className=" max-md:hidden flex items-center gap-[20px]  ">
                    <IoIosArrowBack className=" w-[20%] hover:scale-150 cursor-pointer " onClick={handlePrev} />
                    <div className=" overflow-hidden flex  ">
                      <div className=" flex gap-[20px] ">
                        {coffees.map((item, index) => {
                          return (
                            <div key={index} className=" cusor-pointer hover:duration-150 duration-150 hover:opacity-100 opacity-50 w-[80px] h-[88px] cursor-pointer " style={{ transform: `translateX(${offset}px)`, }} onClick={() => setSelectedIndex(index)} >
                              <img className=" h-[100%] " src={item.img} />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <IoIosArrowForward className=" w-[20%] hover:scale-150 cursor-pointer " onClick={handleNext} />
                  </div>
                  <NavLink className=" max-md:text-[15px] max-lg:text-[18px] underline text-center hover:text-[#E5946D] " to="/Menu/0">Посмотреть меню</NavLink>
                </div>  
              </div>
            </div>
          </section>
          <section className=" h-screen relative flex justify-center ">
          <img className=" max-lg:w-60 max-sm:top-0 absolute " src="/src/assets/images/line03.png"></img>
            <div className=" w-[79%] flex flex-col items-center justify-between ">
              <h2 className=" max-md:text-[15px] max-lg:text-[18px] max-md:text-center w-[90%] text-right uppercase text-[20px] mt-8 ">Последние новости</h2>
              <div className=" max-lg:flex-col max-lg:h-[75%] max-lg:gap-3 flex w-[80%] h-auto justify-center items-center gap-[20px] ">
                {news.map((list, index) => {
                  return <List key={index} heading={list.heading} img={list.img} />;
                })}
              </div>
              <NavLink className=" max-md:text-[15px] max-lg:text-[18px] max-md:text-center max-lg:w-[100%] hover:text-[#E5946D] w-[90%] text-right underline " to="https://vk.com/">
                Подробнее в нашем сообществе ВКонтакте
              </NavLink>
            </div>
          </section>
        </section>
      </section>
    );
  };
export default Home;
