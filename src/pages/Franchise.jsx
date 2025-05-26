import Block from '../components/Block';
import React, { useState } from 'react';
import ModalOpenFranhise from '../components/ModalOpenFranchise';
import ModalFinancialModel from '../components/ModalFinancialModel';
import { help, mainStatistics, formats } from '../utils/data';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';

function Franchise() {
    const [modalActive, setModalActive] = useState(false);
    const [modelActive, setModelActive] = useState(false);
    const prevbuttons = () => (
        <div className=" absolute max-lg:-left-5 max-lg:top-[50%] left-0 top-60 hover:scale-130 ">
            <IoIosArrowBack />
        </div>
    );
    const nextbuttons = () => (
      <div className=" absolute max-lg:-right-5 max-lg:top-[50%] right-0 top-60 hover:scale-130 ">
        <IoIosArrowForward />
      </div>
    );
    const buttons01 = () => (
        <div className=" absolute top-[50%] -left-5 ">
          <IoIosArrowBack />
        </div>
    );
    const buttons02 = () => (
        <div className=" absolute top-[50%] -right-5 ">
          <IoIosArrowForward />
        </div>
    );
  return (
        <section className=" text-[#594e4e] font-monts leading-[1.5] tracking-[1.5px] text-[18px] font-semibold ">
            <section className=" max-lg:px-0 h-screen text-center flex flex-col gap-[30px] justify-center text-[#F5EAEA] w-[100vw] px-27 bg-[url(src/assets/images/franchise/franchise_cover.png)] bg-cover bg-no-repeat ">
                <h1 className=" max-lg:text-[45px] text-[69px] uppercase ">Франшиза кофейни</h1>
                <h2 className=" max-lg:text-[20px] text-[30px] uppercase ">Откройте свою кофейню с прибылью от 290 000 рублей в месяцев</h2>
            </section>
            <section className=" max-lg:mb-2 max-sm:gap-4 max-lg:drop-shadow-none mb-5 drop-shadow-[0px_-120px_50px_rgba(255,255,255,1)] bg-white flex flex-col gap-[30px]">
                <img className=" max-lg:w-60 absolute " src="/src/assets/images/line01.png"></img>
                <section className=" h-screen flex justify-center ">
                    <img className=" max-lg:hidden absolute right-0 " src="/src/assets/images/blob02.png"></img>
                    <div className=" max-lg:w-[100%] w-[79%] flex flex-col gap-[20px] h-[100%] ">
                        <div className=" max-lg:hidden mt-10 flex gap-[40px] ">
                            {mainStatistics.map((statistic, index) => {
                                return (
                                    <div className=" flex flex-col gap-[10px] w-[100%] " key={index}>
                                        <h3 className="text-[30px] ">{statistic.number}</h3>            
                                        <hr></hr>
                                        <p className=" text-right ">{statistic.info}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <video className=" max-lg:h-[100%] object-cover p-10 z-1 drop-shadow-[0px_0px_10px_rgba(0,0,0,1)] " src="/src/assets/video.mp4" autoPlay muted controls/>
                    </div>
                </section>
                <section className=" relative h-auto flex justify-center ">
                    <ModalOpenFranhise active={modalActive} setActive={setModalActive} />
                    <img className=" absolute right-0 " src="/src/assets/images/line02.png"></img>
                    <img className=" max-lg:hidden absolute bottom-0 left-0 " src="/src/assets/images/left.png"></img>
                    <img className=" max-lg:hidden absolute bottom-0 right-0 " src="/src/assets/images/right.png"></img>
                    <div className=" max-lg:gap-3 w-[79%] flex flex-col items-center gap-[50px] ">
                        <h2 className=" max-md:text-[15px] max-lg:text-[18px] text-[20px] uppercase m-10 w-[90%] ">Поможем во всех вопросах</h2>
                        <div className=" lg:hidden flex-col w-[100%] ">
                            <AliceCarousel renderPrevButton={buttons01} renderNextButton={buttons02} disableDotsControls = 'false'> 
                                {help.map((block, index) => {
                                    return <Block key={index} img={block.img} heading={block.heading} title={block.title} />;
                                })}
                            </AliceCarousel>  
                        </div>
                        <div className=" max-lg:hidden w-[80%] h-[369px] flex gap-[20px] border-r-10 border-l-10 border-[#A49986] rounded-r-[90px] rounded-l-[90px]  bg-[url(src/assets/images/values.png)] ">
                            {help.map((block, index) => {
                                return <Block key={index} img={block.img} heading={block.heading} title={block.title} />;
                            })}
                        </div>
                        <div className=" w-[80%] flex flex-col gap-[30px] items-center ">
                            <h2 className=" max-md:text-[15px] max-lg:text-[18px] text-[20px] uppercase ">Только для новых городов</h2>
                            <p className=" max-md:text-[15px] max-lg:text-[18px] ">Станьте первым партнёром HAPPY LITTLE в вашем городе и займите лидирующую позицию на рынке!</p>
                            <button onClick={() => setModalActive(true)} className=" max-md:text-[15px] max-lg:text-[18px] hover:text-[#E5946D] cursor-pointer underline w-[90%] text-right ">Открыть кофейню</button>
                        </div>
                    </div>
                </section>
                <section className=" h-auto w-[100%] flex justify-center ">
                    <ModalFinancialModel active={modelActive} setActive={setModelActive} />
                    <img className=" max-lg:w-60 absolute " src="/src/assets/images/line03.png"></img>
                    <div className=" max-lg:gap-5 w-[79%] flex flex-col items-center ">
                        <img className=" max-lg:hidden absolute bottom-0 left-0 opacity-50 " src="/src/assets/images/blob01.png"></img>
                        <h2 className=" max-md:text-[15px] max-lg:text-[18px] text-[20px] uppercase mt-10 ">Выбери подходящий формат</h2>
                        <AliceCarousel disableDotsControls="false" renderPrevButton={prevbuttons} renderNextButton={nextbuttons}>
                            {formats.map((format, index) => {
                                return (
                                    <div key={index} className=" max-lg:flex-col flex justify-center relative ">
                                        <div className=" max-lg:flex-col max-lg:justify-between max-lg:items-center max-lg:border-none max-lg:gap-3 max-lg:w-[100%] max-lg:h-[50vh] w-[90%] h-[558px] flex gap-[40px] border-r-10 border-[#A49986] rounded-r-[90px] ">
                                            <img className=" max-lg:w-[100%] max-lg:h-[50%] object-cover w-[50%] " src={format.img}></img>
                                            <div className=" max-lg:w-[90%] max-lg:h-[60%] w-[50%] flex flex-col items-center gap-[20px] ">
                                                <h2 className=" max-md:text-[15px] max-lg:text-[18px] text-[20px] uppercase mt-5 ">{format.heading}</h2>
                                                <p className=" max-md:text-[15px] max-lg:text-[18px] font-normal text-center ">{format.title}</p>
                                                <div className=" max-lg:hidden h-[50%] w-[95%] flex flex-col justify-center gap-[20px] ">
                                                    <div className= " flex flex-col gap-[10px] ">
                                                        <h3>Инвестиции</h3>
                                                        <hr></hr>
                                                        <p className=" text-right font-normal ">{format.investment}</p>
                                                    </div>
                                                    <div className= " flex flex-col gap-[10px] ">
                                                        <h3>Средний оборот</h3>
                                                        <hr></hr>
                                                        <p className=" text-right font-normal ">{format.average}</p>
                                                    </div>
                                                    <div className= " flex flex-col gap-[10px] ">
                                                        <h3>Средний срок окупаемости</h3>
                                                        <hr></hr>
                                                        <p className=" text-right font-normal ">{format.term}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </AliceCarousel>
                        <button onClick={() => setModelActive(true)} className=" max-md:text-[15px] max-lg:text-[18px] hover:text-[#E5946D] cursor-pointer underline ">Запросить финансовую модель</button>
                    </div> 
                </section>
            </section>
        </section>
    );
};
export default Franchise;
