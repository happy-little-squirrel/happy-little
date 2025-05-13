import List from '../components/List';
import { HomeSlider } from '../components/Slider';
import React, { useState } from 'react';
import ModalOursCoffeeHouse from '../components/ModalOursCoffeeHouse';
import { NavLink } from 'react-router-dom';
import { news } from '../utils/data';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import { coffees } from '../utils/data';

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
        <section className=" relative h-[708px] w-[100vw] px-27 bg-[url(src/assets/images/home/home_cover.jpg)] bg-cover bg-no-repeat  bg-white/30 bg-blend-lighten ">
          <img className="  absolute right-0 top-0" src="/src/assets/images/cloud01.png "></img>
          <img className=" absolute left-0 bottom-0" src="/src/assets/images/cloud02.png "></img>
          <div className=" flex w-[79%] h-[100%] pl-20">
            <div className=" flex flex-col w-[25%] relative h-[80%] ">
              <figure className=" w-[70%] rounded-b-[90px] h-[75%] bg-no-repeat bg-cover bg-[url(src/assets/images/home/stars.png)] bg-[#594e4e] "></figure>
              <img className=" rounded-full border-3 p-2 absolute bottom-0 right-0 " src="/src/assets/images/home/coffee.png"></img>
            </div>
            <div className=" absolute p-10 w-[50%] flex flex-col gap-[20px] font-merri text-8xl font-black uppercase ">
              <div className=" flex ">
                <h1 className=" text-[#f5eaea] ">Ha</h1>
                <h1 className="">ppy</h1>
              </div>
              <h1 className=" text-right">Little</h1>
            </div>
          </div>
        </section>
        <section className=" drop-shadow-[0px_-120px_50px_rgba(255,255,255,1)] bg-white flex flex-col gap-[30px] ">
          <img className=" absolute right-0 " src="/src/assets/images/line02.png"></img>
          <section className=" relative h-[768px] mt-[2%] flex justify-center ">
            <img className=" absolute w-[100%] h-[100%] " src="/src/assets/images/vector01.png"></img>
            <img className=" absolute bottom-0 left-0" src="/src/assets/images/line01.png"></img>
            <div className=" w-[79%] flex flex-col items-center gap-[40px] ">
              <h2 className=" font-monts mt-5 text-[20px] uppercase">“HAPPY LITTLE” - Маленькое счастье - чашечка кофе</h2>
              <HomeSlider />
            </div>
          </section>
          <section className=" flex justify-center h-[768px] relative ">
            <ModalOursCoffeeHouse active={modalActive} setActive={setModalActive} />
            <img className=" absolute h-[100%] w-[100%] top-[10%] " src="/src/assets/images/vector02.png"></img>
            <div className=" w-[79%] flex flex-col items-center gap-[30px] ">
              <div className=" p-5 w-[100%] flex flex-col gap-[30px] ">
                <h2 className=" text-[20px] w-[50%]  ">Мы — проводники в мир вкусов, ароматов и звезд</h2>
                <p className=" font-normal w-[70%] ">
                  Каждый знак зодиака уникален, и мы создаем кофе, который отражает его энергию, характер и настроение. От
                  насыщенных и смелых купажей для огненных Овнов до нежных и утонченных ноток для воздушных Весов — наш
                  кофе подобран так, чтобы подчеркнуть вашу индивидуальность и стать частью вашего дня.
                </p>
                <button className=" cursor-pointer z-6 underline w-[60%] " onClick={() => setModalActive(true)}>
                  Наши кофейни
                </button>
              </div>
              <div className=" w-[95%] h-[60%] flex relative  ">
                <img className=" absolute bottom-[32%] z-5 " src="/src/assets/images/home/coff01.png"></img>
                <img className=" absolute left-[8%] z-4 " src="/src/assets/images/home/coff02.png"></img>
                <img className=" absolute bottom-0 left-[35%] z-3 " src="/src/assets/images/home/coff03.png"></img>
                <img className=" absolute bottom-0 right-[30%] z-2 " src="/src/assets/images/home/coff04.png"></img>
                <img className=" absolute bottom-[12%] right-[15%] " src="/src/assets/images/home/coff05.png"></img>
              </div>
              <p className=" text-right w-[90%] ">По знаку зодиака. По вкусу. По душе....</p>
              <img className=" w-[50%] " src="/src/assets/images/line03.png"></img>
            </div>
          </section>
          <section className=" h-[768px] flex justify-center relative ">
            <img className=" absolute top-[70%] left-0 " src="/src/assets/images/blob01.png"></img>
            <img className=" absolute top-[70%] right-0 " src="/src/assets/images/blob02.png"></img>
            <div className=" w-[79%] flex flex-col items-center gap-[30px] ">
              <h2 className=" w-[90%] mt-5 uppercase ">
                “HAPPY LITTLE” - не просто кофейня, а гастрономическое путешествие по созвездиям.
              </h2>
              <div className=" w-[90%] flex flex-col items-center gap-[30px] ">
                <div className=" flex flex-col items-end gap-[10px] ">
                  <div className=" pl-5 h-[356px] w-[100%] grid grid-cols-[1fr_0.7fr] gap-[20px] ">
                    {selectedCoffee && (
                      <div className=" w-[90%] flex flex-col justify-center items-center gap-[60px] ">
                        <p className=" text-right font-normal ">
                          В нашей кофейне каждый напиток – это загадочный персонаж, созданный по мотивам вашего знака зодиака.
                        </p>
                        <div className=" flex flex-col gap-[5px] w-[100%] ">
                          <div className=" flex gap-[3px] ">
                            <p>Например,</p>
                            <p>{selectedCoffee.name}</p>
                          </div>
                            <p className=" font-normal ">{selectedCoffee.descriptions}</p>
                        </div>
                        <button className=" cursor-pointer text-[#F5EAEA] bg-[#594E4E] rounded-[90px] px-15 py-1  ">Подробнее</button>
                      </div>
                    )}
                    {selectedCoffee && (
                      <div className=" flex justify-center w-[100%] h-[351px] ">
                        <img className=" w-[306px] " src={selectedCoffee.bigimg} />
                      </div>
                    )}
                  </div>
                  {selectedCoffee && (
                    <div className=" w-[60%] flex flex-col justify-end items-end gap-[10px] ">
                      <div className=" mr-15 w-[40%] flex gap-[5px] text-[20px] ">
                        <h4>{selectedCoffee.volume}</h4>/
                        <h4>{selectedCoffee.price}</h4>
                      </div>
                      <p className=" h-[60px] font-normal text-right ">{selectedCoffee.composition}</p>
                    </div>
                  )}
                  </div>
                  <div className=" w-[50%] h-[25%] flex flex-col gap-[20px] ">
                    <div className=" flex items-center gap-[10px]  ">
                      <div className=" flex ">
                        <IoIosArrowBack 
                        className=" cursor-pointer "
                        onClick={handlePrev} />
                      </div>
                      <div className=" overflow-hidden flex  ">
                        <div className=" flex gap-[20px]   ">
                          {coffees.map((item, index) => {
                            return (
                              <div
                                key={index}
                                className=" w-[80px] h-[88px] "
                                style={{
                                transform: `translateX(${offset}px)`,
                                }}
                                onClick={() => setSelectedIndex(index)}
                                >
                                <img className=" h-[100%] cursor-pointer " src={item.img} />
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    <div>
                      <IoIosArrowForward
                      className=" cursor-pointer "
                      onClick={handleNext}
                      />
                    </div>
                  </div>
                  <NavLink className=" underline text-center " to="/Menu">Посмотреть меню</NavLink>
                </div>
              </div>
            </div>
          </section>
          <section className=" h-[768px] flex justify-center ">
            <div className=" w-[79%] flex flex-col items-center gap-[30px] ">
              <h2 className=" w-[90%] text-right uppercase text-[20px] mt-5 ">Последние новости</h2>
              <div className=" flex w-[80%] h-[80%] justify-center gap-[20px] ">
                {news.map((list, index) => {
                  return <List key={index} heading={list.heading} img={list.img} />;
                })}
              </div>
              <NavLink className=" w-[90%] text-right underline " to="https://vk.com/">
                Подробнее в нашем сообществе ВКонтакте
              </NavLink>
            </div>
          </section>
        </section>
      </section>
    );
  };
export default Home;
