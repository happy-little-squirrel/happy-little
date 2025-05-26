import { FaTelegramPlane, FaVk, FaWhatsapp  } from 'react-icons/fa';
import List from '../components/List';
import ModalOpenFranhise from '../components/ModalOpenFranchise';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { coffeehouse } from '../utils/data';

function Contacts() {
  const [modalActive, setModalActive] = useState(false);
    return (
      <section className=" text-[#594e4e] font-monts leading-[1.5] tracking-[1.5px] text-[18px] font-semibold ">
        <section className=" max-lg:px-0 h-screen text-center flex flex-col justify-end gap-[30px text-[#F5EAEA] w-[100vw] px-27 bg-[url(src/assets/images/contacts/contacts_cover.png)] bg-cover bg-no-repeat ">
          <h1 className=" max-lg:text-[45px] text-[69px] uppercase h-[30%] w-[100%] text-right ">Ты знаешь где искать</h1>
        </section>
        <section className=" max-lg:mb-2 max-sm:gap-4 max-lg:drop-shadow-none drop-shadow-[0px_-120px_50px_rgba(255,255,255,1)] bg-white flex flex-col gap-[30px]">
          <img className=" max-lg:w-60 absolute right-0 " src="/src/assets/images/line02.png"></img>
          <section className=" max-lg:h-auto h-screen relative flex justify-center ">
            <ModalOpenFranhise active={modalActive} setActive={setModalActive} />
            <img className=" max-lg:hidden absolute w-[100%] h-[100%] -z-1 " src="/src/assets/images/vector01.png"></img>
            <div className=" w-[79%] flex items-center flex-col gap-[20px] ">
              <div className=" w-[90%] flex justify-start mt-5 gap-[20px] justify-center items-center ">
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
              <div className=" max-lg:border-none max-lg:h-[80vh] max-lg:flex-col max-lg:w-[100%] max-lg:gap-3 w-[80%] flex gap-[40px] z-1 bg-white border-l-10 border-[#A49986] rounded-l-[90px] ">
                <div className=" max-lg:w-[100%] max-lg:gap-3 w-[50%] flex flex-col gap-[40px] items-center justify-center ">
                  <h2 className=" max-md:text-[15px] max-lg:text-[18px] uppercase text-[20px] text-center w-[90%] ">Телефон и почта для связи с нами</h2>
                  <a className=" max-md:text-[15px] max-lg:text-[18px] text-[20px] tracking-[3px] hover:text-[#E5946D] " href="tel:+7(495)136-55-12">+7(495)136-55-12</a>
                  <div className=" max-md:text-[15px] max-lg:text-[18px] flex flex-col text-center gap-[5px] w-[90%] ">
                    <p>По вопросам сотрудничества: in@mail.ru.</p> 
                    <p>Отдел закупки: zakupka@google.com.</p> 
                    <p>Отдел B2B: b2b@yandex.ru.</p>
                    <p>Отдел кадров: hr@inbox.com</p>
                  </div>
                </div>
                <img className=" max-lg:w-[100%] max-lg:min-h-[40%] object-cover w-[50%] " src="/src/assets/images/contacts/connection.png"></img>
              </div>
              <button onClick={() => setModalActive(true)} className=" max-md:text-[15px] max-lg:text-[18px] hover:text-[#E5946D] cursor-pointer z-1 underline w-[90%] text-left ">Открыть кофейню</button>
            </div>
          </section>
          <section className=" h-screen relative flex justify-center ">
            <img className=" max-lg:w-60 absolute left-0 " src="/src/assets/images/line01.png"></img>
            <img className=" max-lg:hidden absolute w-[100%] h-[100%] " src="/src/assets/images/vector02.png"></img>
            <div className=" max-lg:gap-3 max-lg:justify-between w-[79%] flex flex-col items-center gap-[30px] ">
              <h2 className=" max-md:text-[15px] max-lg:text-[18px] max-lg:mt-5 uppercase mt-10 ">Наши кофейни</h2>
              <div className=" max-lg:flex-col max-lg:w-[100%] max-lg:h-[85vh] max-lg:gap-3 rounded-r-[90px] w-[80%] flex gap-[20px] ">
                {coffeehouse.map((list, index) => {
                  return <List key={index} heading={list.heading} img={list.img} />;
                })}
              </div>
              <NavLink className=" max-md:text-[15px] max-lg:text-[18px] hover:text-[#E5946D] z-1 w-[90%] underline " to="https://yandex.ru/maps/213/moscow/search/кофейня/?ll=37.619303%2C55.759910&sll=37.620948%2C55.770643&source=serp_navig&sspn=1.145325%2C0.411840&z=13">Открыть в картах</NavLink>
            </div>
          </section>
          <section className=" max-lg:h-auto relative h-screen flex justify-center ">
            <img className=" max-lg:hidden absolute left-0 " src="/src/assets/images/blob01.png"></img>
            <div className=" w-[79%] flex flex-col items-center gap-[20px] ">
            <img className=" max-lg:w-60 absolute " src="/src/assets/images/line03.png"></img>
              <h2 className=" max-md:text-[15px] max-lg:text-[18px] mt-5 uppercase text-[20px] ">Написать руководителю</h2>
              <div className=" border-none max-lg:w-[100%] max-lg:h-[100%] max-lg:flex-col max-lg:gap-3 w-[90%] h-[80%] border-r-10 border-[#A49986] rounded-r-[90px] flex gap-[30px] ">
                <div className=" max-lg:hidden max-xl:w-[50%] bg-cover object-cover bg-no-repeat bg-[url(src/assets/images/contacts/director.png)] flex flex-col gap-[10px] items-center justify-end text-[#F5EAEA] ">
                  <h3 className=" uppercase w-[100%] text-center ">Миронов Анатолий Олегович</h3>
                  <p className=" text-center w-[80%] h-[80px] ">Основатель сети кофеен HAPPY LITTLE</p>
                </div>
                <div className=" max-lg:gap-3 max-lg:w-[100%] max-lg:h-[100%] flex flex-col w-[50%] items-center gap-[20px] justify-center ">
                  <h3 className=" max-md:text-[15px] max-lg:text-[18px] text-center w-[100%] ">Вы можете написать руководству Ваши пожелания и предложения</h3>
                  <form className=" max-md:w-[100%] max-lg:w-[50%] lg:w-[80%] flex flex-col items-center gap-[10px] ">
                    <label className=" max-md:text-[15px] max-lg:text-[18px] w-[70%] text-center ">
                      Имя
                      <input className=" max-md:text-[15px] max-lg:text-[18px] border-dashed border-b outline-none " type="text"></input>
                    </label>
                    <label className=" max-md:text-[15px] max-lg:text-[18px] w-[70%] text-center">
                      Телефон
                      <input className=" max-md:text-[15px] max-lg:text-[18px] border-dashed border-b outline-none " type="text" ></input>
                    </label>
                    <label className=" max-md:text-[15px] max-lg:text-[18px] w-[80%] font-normal p-3 h-[20%] border border-dashed  ">
                      <input type="text" className=" max-md:text-[15px] max-lg:text-[18px] outline-none "></input>
                    </label>
                    <button className=" max-md:text-[15px] max-lg:text-[18px] hover:bg-[#E5946D] cursor-pointer text-[#F5EAEA] bg-[#594E4E] rounded-[90px] px-15 py-1 ">Отправить</button>
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
