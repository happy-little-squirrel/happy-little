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
        <div className=" absolute left-10 top-60 hover:scale-130 ">
            <IoIosArrowBack />
        </div>
    );
    const nextbuttons = () => (
      <div className=" absolute right-10 top-60 hover:scale-130 ">
        <IoIosArrowForward />
      </div>
    );
  return (
        <section className=" text-[#594e4e] font-monts leading-[1.5] tracking-[1.5px] text-[18px] font-semibold ">
            <section className=" h-[708px] text-center flex flex-col gap-[30px] justify-center text-[#F5EAEA] w-[100vw] px-27 bg-[url(src/assets/images/franchise/franchise_cover.png)] bg-cover bg-no-repeat ">
                <h1 className=" text-[69px] uppercase ">Франшиза кофейни</h1>
                <h2 className=" text-[30px] uppercase ">Откройте свою кофейню с прибылью от 290 000 рублей в месяцев</h2>
            </section>
            <section className=" mb-5 drop-shadow-[0px_-120px_50px_rgba(255,255,255,1)] bg-white flex flex-col gap-[30px]">
                <img className=" absolute " src="/src/assets/images/line01.png"></img>
                <section className=" h-[768px] flex justify-center ">
                    <img className=" absolute right-0 " src="/src/assets/images/blob02.png"></img>
                    <div className=" w-[79%] flex flex-col gap-[20px] h-[100%] ">
                        <div className=" mt-10 flex gap-[40px] ">
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
                        <video className=" p-10 z-1 drop-shadow-[0px_0px_10px_rgba(0,0,0,1)] " src="/src/assets/video.mp4" autoPlay muted controls/>
                    </div>
                </section>
                <section className=" relative h-[768px] flex justify-center ">
                    <ModalOpenFranhise active={modalActive} setActive={setModalActive} />
                    <img className=" absolute right-0 " src="/src/assets/images/line02.png"></img>
                    <img className=" absolute bottom-0 left-0 " src="/src/assets/images/left.png"></img>
                    <img className=" absolute bottom-0 right-0 " src="/src/assets/images/right.png"></img>
                    <div className=" h-[100%] w-[79%] flex flex-col items-center gap-[50px] ">
                        <h2 className=" text-[20px] uppercase m-10 w-[90%] ">Поможем во всех вопросах</h2>
                        <div className="  w-[80%] h-[369px] flex gap-[20px] border-r-10 border-l-10 border-[#A49986] rounded-r-[90px] rounded-l-[90px]  bg-[url(src/assets/images/values.png)] ">
                            {help.map((block, index) => {
                                return <Block key={index} img={block.img} heading={block.heading} title={block.title} />;
                            })}
                        </div>
                        <div className=" w-[80%] flex flex-col gap-[30px] items-center ">
                            <h2 className=" text-[20px] uppercase ">Только для новых городов</h2>
                            <p>Станьте первым партнёром HAPPY LITTLE в вашем городе и займите лидирующую позицию на рынке!</p>
                            <button onClick={() => setModalActive(true)} className=" hover:text-[#E5946D] cursor-pointer underline w-[90%] text-right ">Открыть кофейню</button>
                        </div>
                    </div>
                </section>
                <section className=" h-[768px] w-[100%] flex justify-center ">
                    <ModalFinancialModel active={modelActive} setActive={setModelActive} />
                    <img className=" absolute " src="/src/assets/images/line03.png"></img>
                    <div className=" w-[79%] flex flex-col items-center ">
                        <img className=" absolute bottom-0 left-0 " src="/src/assets/images/blob01.png"></img>
                        <h2 className=" text-[20px] uppercase mt-10 ">Выбери подходящий формат</h2>
                        <AliceCarousel disableDotsControls="false" renderPrevButton={prevbuttons} renderNextButton={nextbuttons}>
                            {formats.map((format, index) => {
                                return (
                                    <div key={index} className=" flex justify-center relative ">
                                        <div className=" w-[80%] h-[558px] flex gap-[40px] border-r-10 border-[#A49986] rounded-r-[90px] ">
                                            <img className=" w-[50%] " src={format.img}></img>
                                            <div className=" w-[50%] flex flex-col items-center gap-[20px] ">
                                                <h2 className=" text-[20px] uppercase mt-5 ">{format.heading}</h2>
                                                <p className=" font-normal text-center ">{format.title}</p>
                                                <div className=" h-[50%] w-[95%] flex flex-col justify-center gap-[20px] ">
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
                        <button onClick={() => setModelActive(true)} className=" hover:text-[#E5946D] cursor-pointer underline ">Запросить финансовую модель</button>
                    </div> 
                </section>
            </section>
        </section>
    );
};
export default Franchise;
