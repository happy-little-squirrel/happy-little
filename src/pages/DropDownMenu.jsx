import { FaTelegramPlane, FaVk, FaWhatsapp  } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { RemoveScroll } from 'react-remove-scroll';

function DropDownMenu() {
    return (
        <RemoveScroll>
        <section className=" bg-white w-[100%] text-[#594e4e] font-monts leading-[1.5] tracking-[1.5px] text-[18px] font-semibold ">
            <div className=" grid grid-rows-[1.4fr_0.3fr_0.5fr_0.5fr_0.6fr]">
                <ul className=" flex flex-col gap-[10px] items-center justify-end text-[18px] ">
                    <NavLink to="/" className=" hover:text-[#E5946D] ">
                        Главная
                    </NavLink>
                    <NavLink to="/About" className=" hover:text-[#E5946D] ">
                        О нас
                    </NavLink>
                    <NavLink to="/Menu/0" className=" hover:text-[#E5946D] ">
                        Меню
                    </NavLink>
                    <NavLink to="/Franchise" className=" hover:text-[#E5946D] ">
                        Франшиза
                    </NavLink>
                    <NavLink to="/Contacts" className=" hover:text-[#E5946D] ">
                        Контакты
                    </NavLink>
                </ul>
                <div className=" flex gap-[10px] items-center justify-center ">
                    <button className=" w-[15%] underline ">Регистрация</button>/
                    <button className=" w-[15%] underline ">Войти</button>
                </div>
                <div className=" flex gap-[10px] justify-center items-center ">
                    <NavLink to="https://web.telegram.org/a/" >
                        <FaTelegramPlane className=" hover:text-[#E5946D] border rounded-full p-1 w-[25px] h-[25px] " />
                    </NavLink>
                    <NavLink to="https://vk.com/" >
                        <FaVk className=" hover:text-[#E5946D] border rounded-full p-1 w-[25px] h-[25px] "/>
                    </NavLink>
                    <NavLink to="https://www.whatsapp.com/?lang=ru_RU">
                        <FaWhatsapp className=" hover:text-[#E5946D] border rounded-full p-1 w-[26px] h-[26px] " />
                    </NavLink>
                </div>
                <img className="  w-[100%] mix-blend-exclusion  " src="/src/assets/images/dropdownmenu/decor.png" ></img>
                <a className=" items-center font-normal font-libre flex justify-center text-[40px] uppercase">Happy little</a>
            </div>
        </section>
        </RemoveScroll>
    )
}
export default DropDownMenu;