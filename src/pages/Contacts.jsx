import { FaTelegramPlane, FaVk, FaWhatsapp  } from 'react-icons/fa';
import List from '../components/List';
import ModalOpenFranhise from '../components/ModalOpenFranchise';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { coffeehouse } from '../utils/data';

export const Contacts = () => {
  const [modalActive, setModalActive] = useState(false);
    return (
      <section className=" text-[#594e4e] font-monts leading-[1.5] tracking-[1.5px] text-[18px] font-semibold ">
        <section className=" h-[708px] text-center flex flex-col justify-end gap-[30px text-[#F5EAEA] w-[100vw] px-27 bg-[url(src/assets/images/contacts/contacts_cover.png)] bg-cover bg-no-repeat ">
          <h1 className=" text-[69px] uppercase h-[30%] w-[100%] text-right ">Ты знаешь где искать</h1>
        </section>
        <section className=" drop-shadow-[0px_-120px_50px_rgba(255,255,255,1)] bg-white flex flex-col gap-[30px]">
          <img className=" absolute right-0 " src="/src/assets/images/line02.png"></img>
          <section className=" h-[768px] relative flex justify-center ">
            <ModalOpenFranhise active={modalActive} setActive={setModalActive} />
            <img className=" absolute w-[100%] h-[100%] " src="/src/assets/images/vector01.png"></img>
            <div className=" w-[79%] flex items-center flex-col gap-[20px] ">
              <div className=" w-[90%] flex justify-start mt-5 gap-[20px] justify-center items-center ">
                <NavLink to="https://web.telegram.org/a/">
                  <FaTelegramPlane className=" border rounded-full p-1 w-[25px] h-[25px] " />
                </NavLink>
                <NavLink to="https://vk.com/">
                  <FaVk className=" border rounded-full p-1 w-[25px] h-[25px] "/>
                </NavLink>
                <NavLink to="https://www.whatsapp.com/?lang=ru_RU">
                  <FaWhatsapp className=" border rounded-full p-1 w-[30px] h-[30px] " />
                </NavLink>
              </div>
              <div className=" text-right w-[100%] ">
                <h2>Центральный офис: г. Москва, ул. Новгородняя, д.22</h2>
                <p>По будням: 9:00–17:30</p>
              </div>
              <div className=" w-[80%] flex gap-[40px] z-1 bg-white border-l-10 border-[#A49986] rounded-l-[90px] ">
                <div className=" w-[50%] flex flex-col gap-[40px] items-center justify-center ">
                  <h2 className=" uppercase text-[20px] text-center w-[90%] ">Телефон и почта для связи с нами</h2>
                  <a className=" text-[20px] tracking-[3px] " href="tel:+7(495)136-55-12">+7(495)136-55-12</a>
                  <div className=" flex flex-col text-center gap-[5px] w-[90%] ">
                    <p>По вопросам сотрудничества: in@mail.ru.</p> 
                    <p>Отдел закупки: zakupka@google.com.</p> 
                    <p>Отдел B2B: b2b@yandex.ru.</p>
                    <p>Отдел кадров: hr@inbox.com</p>
                  </div>
                </div>
                <img className=" w-[50%] " src="/src/assets/images/contacts/connection.png"></img>
              </div>
              <button onClick={() => setModalActive(true)} className=" cursor-pointer z-1 underline w-[90%] text-left ">Открыть кофейню</button>
            </div>
          </section>
          <section className=" h-[768px] relative flex justify-center ">
            <img className=" absolute left-0 " src="/src/assets/images/line01.png"></img>
            <img className=" absolute w-[100%] h-[100%] " src="/src/assets/images/vector02.png"></img>
            <div className=" w-[79%] flex flex-col items-center gap-[30px] ">
              <h2 className=" uppercase mt-10 ">Наши кофейни</h2>
              <div className=" w-[80%] flex gap-[20px] ">
                {coffeehouse.map((list, index) => {
                  return <List key={index} heading={list.heading} img={list.img} />;
                })}
              </div>
              <NavLink className=" z-1 w-[90%] underline " to="https://yandex.ru/maps/213/moscow/search/кофейня/?ll=37.619303%2C55.759910&sll=37.620948%2C55.770643&source=serp_navig&sspn=1.145325%2C0.411840&z=13">Открыть в картах</NavLink>
            </div>
          </section>
          <section className=" relative h-[768px] flex justify-center ">
            <img className=" absolute left-0 " src="/src/assets/images/blob01.png"></img>
            <div className=" w-[79%] flex flex-col items-center gap-[20px] ">
            <img className=" absolute " src="/src/assets/images/line03.png"></img>
              <h2 className=" mt-10 uppercase text-[20px] ">Написать руководителю</h2>
              <div className=" w-[80%] h-[80%] border-r-10 border-[#A49986] rounded-r-[90px] flex gap-[40px] ">
                <div className=" bg-no-repeat bg-[url(src/assets/images/contacts/director.png)] flex flex-col gap-[10px] items-center justify-end text-[#F5EAEA] ">
                  <h3 className=" uppercase w-[100%] text-center ">Миронов Анатолий Олегович</h3>
                  <p className=" text-center w-[80%] h-[80px] ">Основатель сети кофеен HAPPY LITTLE</p>
                </div>
                <div className=" flex flex-col w-[48%] items-center gap-[30px] justify-center ">
                  <h3 className=" text-center w-[80%] ">Вы можете написать руководству Ваши пожелания и предложения</h3>
                  <form className=" flex flex-col items-center gap-[20px] ">
                    <label className=" w-[70%] text-center ">
                      Имя
                      <input className=" border-dashed border-b " type="text"></input>
                    </label>
                    <label className=" w-[70%] text-center">
                      Телефон
                      <input className=" border-dashed border-b " type="text"></input>
                    </label>
                    <label className=" w-[80%] font-normal p-3 h-[124px] border border-dashed  ">
                      Ваш комментарий
                      <input type="text"></input>
                    </label>
                    <button className=" cursor-pointer text-[#F5EAEA] bg-[#594E4E] rounded-[90px] px-15 py-1 ">Отправить</button>
                    <p className=" font-normal text-[15px] text-center ">
                      Нажимая на кнопку, вы даёте разрешение на обработкой персональных данных и принимаете условия
                      пользовательского соглашения отправить
                    </p>
                  </form>
                </div>
              </div>
              <p className=" w-[90%] text-right "> По знаку зодиака. По вкусу. По душе....</p>
            </div>
          </section>
        </section>
      </section>
  );
};

export default Contacts;
