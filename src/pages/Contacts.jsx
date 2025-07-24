import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaTelegramPlane, FaVk, FaWhatsapp } from 'react-icons/fa';
import { coffeehouse } from '../utils/data';
import List from '../components/List';
import ModalOpenFranhise from '../components/ModalOpenFranchise';

function Contacts() {
  const [modalActive, setModalActive] = useState(false);
  const scrollToViewport = (vh) => {
    const scroll = (vh / 100 )* window.innerHeight;
    window.scrollTo({top: scroll , left:0, behavior:'smooth'})
  }
    return (
      <section className=" dark:text-[#f5eaea] dark:bg-[#0b0005] text-[#594e4e] font-monts leading-[1.5] tracking-[1.5px] text-[18px] font-semibold ">
        <ModalOpenFranhise active={modalActive} setActive={setModalActive} />
        <section className=" dark:bg-blend-overlay dark:bg-[#0b0005]/70 h-screen text-[#F5EAEA] bg-[url(src/assets/images/contacts/contacts_cover.png)] bg-cover bg-no-repeat ">
          <h1 className=" max-lg:text-[45px] lg:text-[69px] p-5 uppercase h-[90%] w-[100%] flex items-end justify-end text-right ">Ты знаешь где искать</h1>
        </section>
        <section className=" dark:drop-shadow-[#0b0005] dark:bg-[#0b0005] max-lg:gap-4 max-lg:drop-shadow-none lg:drop-shadow-[0px_-120px_50px_rgba(255,255,255,1)] lg:gap-[30px] bg-white flex flex-col mb-2 ">
          <section className=" relative h-auto flex justify-center items-center ">
            <img className=" dark:mix-blend-color-burn max-lg:w-60 absolute right-0 top-0 mix-blend-multiply " src="/src/assets/images/line02.png"></img>
            <img className=" max-lg:hidden absolute w-[100%] h-[100%] -z-1 " src="/src/assets/images/vector01.png"></img>
            <div className=" w-[80%] flex flex-col items-center gap-5 ">
              <div className=" w-[90%] flex justify-start mt-5 gap-5 justify-center items-center ">
                <NavLink to="https://web.telegram.org/a/">
                  <FaTelegramPlane className=" hover:text-[#E5946D] border rounded-full p-1 w-[25px] h-[25px] " />
                </NavLink>
                <NavLink to="https://vk.com/">
                  <FaVk className=" hover:text-[#E5946D] border rounded-full p-1 w-[25px] h-[25px] "/>
                </NavLink>
                <NavLink to="https://www.whatsapp.com/?lang=ru_RU">
                  <FaWhatsapp className=" hover:text-[#E5946D] border rounded-full p-1 w-[26px] h-[26px] " />
                </NavLink>
              </div>
              <div className=" max-lg:hidden text-right w-[100%] ">
                <h2>Центральный офис: г. Москва, ул. Новгородняя, д.22</h2>
                <p>По будням: 9:00–17:30</p>
              </div>
              <div className=" dark:bg-[#0b0005] max-lg:border-none max-lg:flex-col max-lg:w-[100%] lg:w-[90%] lg:h-[80vh] flex gap-5 z-1 bg-white border-l-10 border-[#A49986] rounded-l-[90px] ">
                <div className=" max-lg:w-[100%] lg:w-[50%] flex flex-col gap-5 items-center justify-center ">
                  <h2 className=" max-md:text-[15px] lg:text-[20px] uppercase text-center w-[90%] ">Телефон и почта для связи с нами</h2>
                  <a className=" max-md:text-[15px] lg:text-[20px] tracking-[3px] hover:text-[#E5946D] " href="tel:+7(495)136-55-12">+7(495)136-55-12</a>
                  <div className=" max-md:text-[15px] max-lg:text-[18px] flex flex-col text-center gap-[5px] w-[90%] ">
                    <p>По вопросам сотрудничества: in@mail.ru.</p> 
                    <p>Отдел закупки: zakupka@google.com.</p> 
                    <p>Отдел B2B: b2b@yandex.ru.</p>
                    <p>Отдел кадров: hr@inbox.com</p>
                  </div>
                </div>
                <img className=" lg:rounded-r-[90px] max-lg:w-[100%] lg:w-[50%] object-cover " src="/src/assets/images/contacts/connection.png"></img>
              </div>
              <button onClick={() => setModalActive(true)} className=" max-md:text-[15px] hover:text-[#E5946D] cursor-pointer underline w-[90%] text-left ">Открыть кофейню</button>
            </div>
          </section>
          <section className=" h-auto relative flex justify-center ">
            <img className=" dark:mix-blend-color-burn max-lg:w-60 mix-blend-multiply absolute left-0 " src="/src/assets/images/line01.png"></img>
            <img className=" max-lg:hidden absolute w-[100%] h-[100%] " src="/src/assets/images/vector02.png"></img>
            <div className=" w-[80%] flex flex-col items-center gap-5 ">
              <h2 className=" max-md:text-[15px] lg:text-[20px] uppercase mt-5 ">Наши кофейни</h2>
              <div className=" max-lg:flex-col max-lg:w-[100%] flex gap-5 ">
                {coffeehouse.map((list, index) => {
                  return <List key={index} heading={list.heading} img={list.img} />;
                })}
              </div>
              <NavLink className=" max-md:text-[15px] lg:w-[90%] hover:text-[#E5946D] z-1 underline " to="https://yandex.ru/maps/213/moscow/search/кофейня/?ll=37.619303%2C55.759910&sll=37.620948%2C55.770643&source=serp_navig&sspn=1.145325%2C0.411840&z=13">Открыть в картах</NavLink>
            </div>
          </section>
          <section className=" lg:relative h-auto  flex flex-col items-center gap-5 ">
            <img className=" dark:mix-blend-color-burn max-lg:w-60  " src="/src/assets/images/line03.png"></img>
            <img className=" max-lg:hidden absolute left-0 " src="/src/assets/images/blob01.png"></img>
            <div className="  w-[80%] h-[100%] flex flex-col gap-5 items-center ">
              <h2 className=" max-md:text-[15px] lg:text-[20px] mt-5 uppercase ">Написать руководителю</h2>
              <div className=" max-lg:border-none lg:w-[90%] flex gap-5 border-r-10 border-[#A49986] rounded-r-[90px] rounded-l-[90px] ">
                <div className=" max-lg:hidden bg-cover w-[50%] rounded-l-[90px] bg-no-repeat bg-[#594e4e]/100 bg-blend-overlay z-1 bg-[url(src/assets/images/contacts/director.png)] flex flex-col gap-3 items-center justify-end text-[#F5EAEA] ">
                  <h3 className=" uppercase w-[100%] text-center  ">Миронов Анатолий Олегович</h3>
                  <p className=" text-center w-[80%] h-[80px] ">Основатель сети кофеен HAPPY LITTLE</p>
                </div>
                <div className=" lg:w-[50%] p-5 flex flex-col gap-10 items-center ">
                  <h3 className=" max-md:text-[15px] lg:mt-5 text-center w-[100%] ">Вы можете написать руководству Ваши пожелания и предложения</h3>
                  <form className=" flex flex-col gap-5 items-center ">
                    <p className=" flex flex-col items-center ">
                      <label className=" w-[50%] text-center ">Имя</label>
                      <input className=" border-dashed border-b " type="text"></input>
                    </p>
                    <p className=" flex flex-col items-center " >
                      <label className=" w-[50%] text-center">Телефон</label>
                      <input className=" border-dashed border-b " type="text"></input>
                    </p>
                    <input type="text" className=" w-[100%] h-[20vh] border border-dashed outline-none "></input>
                    <button className=" hover:bg-[#E5946D] max-md:text-[15px] hover:bg-[#E5946D] cursor-pointer w-[50%] text-[#F5EAEA] bg-[#594E4E] rounded-[90px] py-1 ">Отправить</button>
                    <p className=" font-normal text-[12px] text-center ">
                      Нажимая на кнопку, вы даёте разрешение на обработкой персональных данных и принимаете условия
                      пользовательского соглашения отправить
                    </p>
                  </form>
                </div>
              </div>
              <p className=" max-md:hidden w-[90%] text-right "> По знаку зодиака. По вкусу. По душе....</p>
            </div>
          </section>
        </section>
      </section>
  );
};

export default Contacts;
