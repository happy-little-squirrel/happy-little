import { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward  } from 'react-icons/io';
import AliceCarousel from 'react-alice-carousel';
import { help, mainStatistics, formats } from '../utils/data';
import ModalOpenFranhise from '../components/ModalOpenFranchise';
import ModalFinancialModel from '../components/ModalFinancialModel';
import Block from '../components/Block';

function Franchise() {
    const [modalActive, setModalActive] = useState(false);
    const [modelActive, setModelActive] = useState(false);
    const prevbuttons = () => (
        <div className=" absolute max-lg:-left-5 max-lg:top-[50%] left-0 top-60 hover:scale-130 duration-300 ">
            <IoIosArrowBack />
        </div>
    );
    const nextbuttons = () => (
      <div className=" absolute max-lg:-right-5 max-lg:top-[50%] right-0 top-60 hover:scale-130 duration-300 ">
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
        <section className=" dark:text-[#f5eaea] dark:bg-[#0b0005] text-[#594e4e] font-monts leading-[1.5] tracking-[1.5px] text-[18px] font-semibold ">
            <ModalOpenFranhise active={modalActive} setActive={setModalActive} />
            <ModalFinancialModel active={modelActive} setActive={setModelActive} />
            <section className=" dark:bg-blend-overlay dark:bg-[#0b0005]/80 text-[#F5EAEA] text-center h-screen flex flex-col gap-10 justify-center items-center bg-[url(src/assets/images/franchise/franchise_cover.png)] bg-cover bg-no-repeat ">
                <h1 className=" max-lg:text-[45px] lg:text-[69px] uppercase ">Франшиза кофейни</h1>
                <h2 className=" max-lg:text-[20px] lg:text-[30px] uppercase w-[80%] ">Откройте свою кофейню с прибылью от 290 000 рублей в месяц</h2>
            </section>
              <section className=" dark:drop-shadow-[#0b0005] dark:bg-[#0b0005] max-lg:gap-4 max-lg:drop-shadow-none lg:drop-shadow-[0px_-120px_50px_rgba(255,255,255,1)] lg:gap-[30px] bg-white flex flex-col mb-2 ">
                <section className=" max-lg:h-screen lg:h-auto lg:justify-center flex ">
                    <img className=" dark:mix-blend-color-burn max-lg:w-60 absolute mix-blend-multiply left-0 " src="/src/assets/images/line01.png"></img>
                    <img className=" max-lg:hidden absolute right-0 " src="/src/assets/images/blob02.png"></img>
                    <div className=" max-lg:w-[100%] lg:w-[80%] lg:flex lg:flex-col lg:gap-5 ">
                        <div className=" max-lg:hidden mt-5 flex gap-20 ">
                            {mainStatistics.map((statistic, index) => {
                                return (
                                    <div className=" flex flex-col gap-5 w-[100%] " key={index}>
                                        <h3 className="text-[30px] ">{statistic.number}</h3>            
                                        <hr></hr>
                                        <p className=" text-right ">{statistic.info}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <video className=" h-[100%] object-cover p-10 z-1 drop-shadow-[0px_0px_10px_rgba(0,0,0,1)]  " src="/src/assets/video.mp4" autoPlay muted controls/>
                    </div>
                </section>
                <section className=" lg:relative h-auto flex justify-center ">
                    <img className=" dark:mix-blend-color-burn max-sm:w-60 mix-blend-multiply absolute right-0 " src="/src/assets/images/line02.png"></img>
                    <img className=" max-lg:hidden absolute bottom-0 left-0 " src="/src/assets/images/left.png"></img>
                    <img className=" max-lg:hidden absolute bottom-0 right-0 " src="/src/assets/images/right.png"></img>
                    <div className=" w-[80%] flex flex-col items-center gap-10 ">
                        <h2 className=" max-md:text-[15px] lg:text-[20px] lg:w-[90%] uppercase mt-5 ">Поможем во всех вопросах</h2>
                        <div className=" lg:hidden flex-col w-[100%] ">
                            <AliceCarousel renderPrevButton={buttons01} renderNextButton={buttons02} disableDotsControls = 'false'> 
                                {help.map((block, index) => {
                                    return <Block key={index} img={block.img} heading={block.heading} title={block.title} />;
                                })}
                            </AliceCarousel>  
                        </div>
                        <div className=" dark:bg-none max-lg:hidden w-[90%] h-[45vh] flex gap-10 border-r-10 border-l-10 border-[#A49986] rounded-r-[90px] rounded-l-[90px]  bg-[url(src/assets/images/values.png)] ">
                            {help.map((block, index) => {
                                return <Block key={index} img={block.img} heading={block.heading} title={block.title} />;
                            })}
                        </div>
                        <div className=" lg:h-[35vh] lg:w-[80%] lg:justify-center flex flex-col gap-10 items-center ">
                            <h2 className=" max-md:text-[15px] max-lg:text-center lg:text-[20px] uppercase ">Только для новых городов</h2>
                            <p className=" max-md:text-[15px] ">Станьте первым партнёром HAPPY LITTLE в вашем городе и займите лидирующую позицию на рынке!</p>
                            <button onClick={() => setModalActive(true)} className=" l max-md:text-[15px] hover:text-[#E5946D] cursor-pointer underline ">Открыть кофейню</button>
                        </div>
                    </div>
                </section>
                <section className=" h-auto w-[100%] flex flex-col gap-5 items-center  ">
                    <img className=" dark:mix-blend-color-burn max-sm:w-60 mix-blend-multiply " src="/src/assets/images/line03.png"></img>
                    <div className=" w-[80%] flex flex-col items-center ">
                        <img className=" max-lg:hidden absolute bottom-0 left-0 opacity-50 " src="/src/assets/images/blob01.png"></img>
                        <h2 className=" max-md:text-[15px] lg:text-[20px] uppercase ">Выбери подходящий формат</h2>
                        <AliceCarousel disableDotsControls="false" renderPrevButton={prevbuttons} renderNextButton={nextbuttons}>
                            {formats.map((format, index) => {
                                return (
                                    <div key={index} className=" max-lg:flex-col lg:justify-center flex relative mt-5 ">
                                        <div className=" max-lg:flex-col max-lg:gap-5 lg:w-[90%] lg:h-[558px] lg:gap-10 lg:border-r-10 lg:border-[#A49986] lg:rounded-r-[90px] flex ">
                                            <img className=" max-lg:w-[100%] max-lg:h-[40vh] max-lg:object-cover lg:w-[45%] " src={format.img}></img>
                                            <div className=" max-lg:h-[30vh] lg:w-[50%] flex flex-col justify-center items-center gap-5 ">
                                                <h2 className=" max-md:text-[15px] lg:text-[20px] uppercase ">{format.heading}</h2>
                                                <p className=" max-md:text-[15px] font-normal text-center ">{format.title}</p>
                                                <div className=" max-lg:hidden w-[95%] flex flex-col gap-5 ">
                                                    <div className= " flex flex-col gap-3 ">
                                                        <h3>Инвестиции</h3>
                                                        <hr></hr>
                                                        <p className=" text-right font-normal ">{format.investment}</p>
                                                    </div>
                                                    <div className= " flex flex-col gap-3 ">
                                                        <h3>Средний оборот</h3>
                                                        <hr></hr>
                                                        <p className=" text-right font-normal ">{format.average}</p>
                                                    </div>
                                                    <div className= " flex flex-col gap-3 ">
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
                        <button onClick={() => setModelActive(true)} className=" max-md:text-[15px] hover:text-[#E5946D] cursor-pointer underline ">Запросить финансовую модель</button>
                        
                    </div> 
                </section>
            </section>
        </section>
    );
};
export default Franchise;
