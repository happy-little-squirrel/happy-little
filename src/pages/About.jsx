import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Block from '../components/helpers/block/Block';
import { interiors, values } from '../utils/data';
import Slider from '../components/about/slider/Slider';
import Modal from '../components/Home/content/modal/Modal';

export const AboutContent = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <section className="">
      <section className="relative h-[calc(100vh-50px)] w-[100vw] px-27 bg-[url(src/assets/images/about/about_cover.png)] bg-cover bg-no-repeat">
        <img className="absolute top-0 right-0" src="/src/assets/images/about/cloud01.png"></img>
        <img className="absolute left-0 top-[20vh]" src="/src/assets/images/about/cloud02.png"></img>
        <div className="w-full h-[calc(100vh-50px)] flex flex-col gap-2.5 justify-center items-center text-white">
          <h1 className="font-merri text-8xl m-0 uppercase font-black tracking-widest">Happy little</h1>
          <h2 className="font-monts text-[55px] m-0 uppercase font-semibold">Маленькое счастье</h2>
          <h3 className="font-monts text-[40px] m-0 uppercase">Чашечка кофе</h3>
          <p className="mt-7 font-monts text-[20px] m-0 ml-[24%] opacity-80 leading-[30px] tracking-widest font-semibold">
            По знаку зодиака. По вкусу. По душе
          </p>
        </div>
      </section>
      <section className="">
        <img className="" src="/src/assets/images/about/line01.png"></img>
        <section className="">
          <img className="" src={'/src/assets/images/about/beans.png'}></img>
          <img className="" src={'/src/assets/images/about/vector_two.png'}></img>
          <div className="">
            <h2 className="">This is мы</h2>
            <p className="">Первый “HAPPY LITTLE” был открыт еще в 2010 году.</p>
            <Slider />
          </div>
        </section>
        <section className="">
          <Modal active={modalActive} setActive={setModalActive} />
          <img className="" src={'/src/assets/images/about/line02.png'}></img>
          <img className="" src={'/src/assets/images/about/vector.png'}></img>
          <div className="">
            <div className="">
              <h2>С самого начала мы вдохновлялись магией звезд и их влиянием на наши вкусовые предпочтения.</h2>
              <p className="">
                Это был долгий путь от идеи к открытию, а затем к тому чтобы о нас знали все. Знать свой гороскоп
                прекрасно и чувствовать свою причастность к нему тем более. Ведь данное чувство дает причастность не
                только к знаку, а к чему-то большему за ним. Наша команда прекрасно это понимала и хотела дать вам,
                нашим дорогим гостям, почувствовать это.
              </p>
            </div>
            <div className="">
              <h2 className="">Почему мы?</h2>
              <p>
                Мы верим, что кофе — это не просто напиток, а способ выразить заботу, подарить тепло и создать
                настроение.
              </p>
              <p>
                А гороскопы — это не просто предсказания, а ключ к пониманию себя и своих потребностей. В "HAPPY LITTLE"
                мы объединили эти два мира, чтобы каждый гость мог найти свой идеальный напиток, который не только
                порадует вкусом, но и зарядит энергией, вдохновением или успокоением в зависимости от вашего знака
                зодиака.
              </p>
              <button onClick={() => setModalActive(true)} className="">
                Наши кофейни
              </button>
            </div>
          </div>
        </section>
        <section className="">
          <img className="" src={'/src/assets/images/about/line01.png'}></img>
          <img className="" src={'/src/assets/images/about/left.png'}></img>
          <img className="" src={'/src/assets/images/about/right.png'}></img>
          <div className="">
            <h2>Наши ценности</h2>
            <div className="">
              {values.map((block, index) => {
                return <Block key={index} img={block.img} heading={block.heading} title={block.title} />;
              })}
            </div>
            <h2>Наша команда</h2>
            <div className="">
              <img className="" src={'/src/assets/images/about/team01.png'}></img>
              <img className="" src={'/src/assets/images/about/team02.png'}></img>
              <img className="" src={'/src/assets/images/about/team03.png'}></img>
              <img className="" src={'/src/assets/images/about/team04.png'}></img>
              <img className="" src={'/src/assets/images/about/team05.png'}></img>
              <img className="" src={'/src/assets/images/about/team06.png'}></img>
              <img className="" src={'/src/assets/images/about/team07.png'}></img>
            </div>
          </div>
        </section>
        <section className="">
          <div className="">
            <h2>Наши интерьеры</h2>
            <div className="">
              {interiors.map((int, index) => {
                return (
                  <div className="block" key={index}>
                    <img className="img" src={int.img}></img>
                  </div>
                );
              })}
            </div>
            <div className="">
              <h2>Наш путь</h2>
              <img className="" src={'/src/assets/images/about/hr_way.png'}></img>
              <div className="">
                <p className="">2010</p>
                <p className="">2015</p>
                <p className="">2017</p>
                <p className="">2020</p>
                <p className="">2021</p>
                <p className="">2022</p>
                <p className="">2023</p>
                <p className="">2025</p>
              </div>
            </div>
            <NavLink className="" to="https://vk.com/">
              <button>Мы в социальных сетях</button>
            </NavLink>
          </div>
        </section>
      </section>
    </section>
  );
};

export default AboutContent;
