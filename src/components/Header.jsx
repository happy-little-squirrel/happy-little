import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RemoveScroll } from 'react-remove-scroll';
import { IoIosMenu } from 'react-icons/io';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { PiCoffeeBeanFill } from 'react-icons/pi';
import { FaTelegramPlane, FaVk, FaWhatsapp  } from 'react-icons/fa';

export const Header = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <header className={`$ " font-monts font-semibold tracking-[0.8px] text-[#594e4e] text-[15px] relative z-40 flex justify-center bg-[#594e4e] w-[100vw] h-[60px] drop-shadow-xl/25 " ${modalActive && "bg-[#FFF]"}`}>
      <nav className=" z-1 w-[79%] grid grid-cols-[0.15fr_1fr_0.1fr_max-content] gap-[10px] h-[100%] items-center">
        <NavLink className=" cursor-ponter flex items-end text-[#f5eaea] " to="/">
          <PiCoffeeBeanFill className={`$ " rotate-169 w-[50%] h-[80%]  " ${modalActive && " text-[#594e4e]"}`} />
          <PiCoffeeBeanFill className={`$ " rotate-100 w-[30%] h-[50%]  " ${modalActive && " text-[#594e4e] "}`} />
          <PiCoffeeBeanFill className={`$ " rotate-135 w-[50%] h-[70%]  " ${modalActive && " text-[#594e4e] "}`} />
          <PiCoffeeBeanFill className={`$ " rotate-50 w-[30%] h-[50%] " ${modalActive && " text-[#594e4e] "}`} />
        </NavLink>
        <div className={`$ " flex justify-center gap-[10px] opacity-[0.7] " ${modalActive && ""}`}>
          <button>
            <img className=" w-[30px] " src="/src/assets/images/header/day.svg" />
          </button>
          <button>
            <img className=" w-[30px] " src="/src/assets/images/header/daynight.svg"></img>
          </button>
          <button>
            <img className=" w-[30px] " src="/src/assets/images/header/night.svg" />
          </button>
        </div>
        <li className=" list-none text-[20px] flex gap-[5px] text-[#f5eaea] ">
          <button className={`$ " uppercase  " ${modalActive && " text-[#594e4e] "}`}>ru</button>
          <p className={`$ "" ${modalActive && " text-[#594e4e] "}`} >/</p>
          <button className={`$ " uppercase " ${modalActive && " text-[#594e4e] "}`}>en</button>
        </li>
        <button className=" cursor-pointer " onClick={() => setModalActive(!modalActive)}>
          {modalActive ? <AiOutlineCloseCircle className=" text-[#594e4e] w-[40px] h-[40px] " /> : <IoIosMenu className=" text-[#f5eaea] w-[50px] h-[50px] " />}
        </button>
      </nav>
      {modalActive && (
        <RemoveScroll>
          <section className={`$ " fixed pt-15 left-0 bg-white w-[100%] h-[100vh] " `}>
            <div className=" grid grid-rows-[1.4fr_0.3fr_0.5fr_0.5fr_0.6fr]">
              <ul className=" flex flex-col gap-[10px] items-center justify-end text-[18px] ">
                <NavLink to="/" onClick={() => setModalActive(false)}>
                  Главная
                </NavLink>
                <NavLink to="/About" onClick={() => setModalActive(false)}>
                  О нас
                </NavLink>
                <NavLink to="/Menu" onClick={() => setModalActive(false)}>
                  Меню
                </NavLink>
                <NavLink to="/Franchise" onClick={() => setModalActive(false)}>
                  Франшиза
                </NavLink>
                <NavLink to="/Contacts" onClick={() => setModalActive(false)}>
                  Контакты
                </NavLink>
              </ul>
              <div className=" flex gap-[10px] items-center justify-center ">
                <button className=" w-[15%] underline ">Регистрация</button>/
                <button className=" w-[15%] underline ">Войти</button>
              </div>
              <div className=" flex gap-[10px] justify-center items-center ">
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
              <img className=" flex w-[100%] mix-blend-exclusion " src="/src/assets/images/dropdownmenu/decor.png" ></img>
              <a className=" items-center font-normal font-libre flex justify-center text-[40px] uppercase">Happy little</a>
            </div>
          </section>
        </RemoveScroll>
      )}
    </header>
  );
};

export default Header;
