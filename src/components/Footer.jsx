import { NavLink } from 'react-router-dom'
import { PiCoffeeBeanFill } from "react-icons/pi";
import { FaTelegramPlane, FaVk, FaWhatsapp  } from 'react-icons/fa';

export const Footer = () => {
    const setActive = ({ isActive }) => (isActive ? " text-[#E5946D] " : " hover:text-[#E5946D] focus:outline-none ")
    return (
        <footer className=" text-[#f5eaea] h-[377px] flex justify-center items-center bg-[#594E4E] ">
            <div className=" flex flex-col gap-[20px] items-center">
                <NavLink className=" flex items-end w-[60%] hover:animate-bounce " to='/'>
                    <PiCoffeeBeanFill className=" rotate-169 w-[50%] h-[80%] " />
                    <PiCoffeeBeanFill className=" rotate-100 w-[30%] h-[50%] " />
                    <PiCoffeeBeanFill className=" rotate-135 w-[50%] h-[70%] " />
                    <PiCoffeeBeanFill className=" rotate-50 w-[30%] h-[50%] "/>
                </NavLink>
                <ul className=" flex flex-col gap-[10px] items-center justify-end font-monts text-[18px] font-semibold ">
                    <NavLink to='/' className={setActive}>
                    Главная
                    </NavLink>
                    <NavLink to='/About' className={setActive}>
                    О нас
                    </NavLink>
                    <NavLink to='/Menu/0' className={setActive}>
                    Меню
                    </NavLink>
                    <NavLink to='/Franchise' className={setActive}>
                    Франшиза
                    </NavLink>
                    <NavLink to='/Contacts' className={setActive}>
                    Контакты
                    </NavLink>
                </ul>
                 <div className=" flex gap-[10px] justify-center items-center ">
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
                <a className=" font-libre font-normal text-[40px] uppercase ">Happy little</a>
            </div>
        </footer>
    )
  }
  
  export default Footer