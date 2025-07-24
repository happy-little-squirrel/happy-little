import { NavLink, useLocation } from 'react-router-dom'
import { PiCoffeeBeanFill } from "react-icons/pi";
import { FaTelegramPlane, FaVk, FaWhatsapp  } from 'react-icons/fa';

export const Footer = () => {
    const setActive = ({ isActive }) => (isActive ? " text-[#E5946D] " : " hover:text-[#E5946D] focus:outline-none ")
    const location = useLocation();
    const isMenuActive = () => {
    return location.pathname.toLowerCase().includes('menu');
  };
    return (
        <footer className=" dark:text-[#f5eaea] dark:bg-[#0b0005] max-md:h-[60px] text-[#f5eaea] h-[377px] flex justify-center items-center bg-[#594E4E] ">
            <div className=" flex flex-col gap-[20px] items-center">
                <NavLink className=" max-md:w-[15vh] flex items-end w-[60%] hover:animate-bounce " to='/'>
                    <PiCoffeeBeanFill className=" rotate-169 w-[50%] h-[80%] " />
                    <PiCoffeeBeanFill className=" rotate-100 w-[30%] h-[50%] " />
                    <PiCoffeeBeanFill className=" rotate-135 w-[50%] h-[70%] " />
                    <PiCoffeeBeanFill className=" rotate-50 w-[30%] h-[50%] "/>
                </NavLink>
                <ul className=" max-md:hidden flex flex-col gap-[10px] items-center justify-end font-monts text-[18px] font-semibold ">
                    <NavLink to='/Home' onClick={() => window.scrollTo(0, 0)} className={setActive}>
                    Главная
                    </NavLink>
                    <NavLink to='/About' onClick={() => window.scrollTo(0, 0)} className={setActive}>
                    О нас
                    </NavLink>
                    <NavLink to='/Menu0' onClick={() => window.scrollTo(0, 0)} className={({ isActive }) => 
                        (isActive || isMenuActive()) ? "text-[#E5946D]" : "hover:text-[#E5946D] focus:outline-none"}>
                    Меню
                    </NavLink>
                    <NavLink to='/Franchise' onClick={() => window.scrollTo(0, 0)} className={setActive}>
                    Франшиза
                    </NavLink>
                    <NavLink to='/Contacts' onClick={() => window.scrollTo(0, 0)} className={setActive}>
                    Контакты
                    </NavLink>
                </ul>
                 <div className=" max-md:hidden flex gap-[10px] justify-center items-center ">
                    <NavLink to="https://web.telegram.org/a/">
                        <FaTelegramPlane className=" hover:text-[#E5946D] border rounded-full p-1 w-[25px] h-[25px]  " />
                    </NavLink>
                    <NavLink to="https://vk.com/">
                        <FaVk className=" hover:text-[#E5946D] border rounded-full p-1 w-[25px] h-[25px]  " />
                    </NavLink>
                    <NavLink to="https://www.whatsapp.com/?lang=ru_RU">
                        <FaWhatsapp className=" hover:text-[#E5946D] border rounded-full p-1 w-[26px] h-[26px] " />
                    </NavLink>
                </div>
                <a className=" max-md:hidden font-libre font-normal text-[40px] uppercase ">Happy little</a>
            </div>
        </footer>
    )
  }
  
  export default Footer