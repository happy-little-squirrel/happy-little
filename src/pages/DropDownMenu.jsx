import { useLocation, useParams, NavLink } from "react-router-dom";
import { FaTelegramPlane, FaVk, FaWhatsapp  } from 'react-icons/fa';

function DropDownMenu() {
    const { state } = useLocation();
    const currentPath = state?.from || "/"; 
    const isMenuActive = currentPath.toLowerCase().includes('menu');
    const { parentPath } = useParams()
    return (
        <section className= " h-[80vh] bg-white text-[#594e4e] font-monts tracking-[1.5px] text-[18px] font-semibold ">
            <div className=" dark:text-[#f5eaea] dark:bg-[#0b0005] max-sm:text-[15px] h-[100%] w-[100%] flex flex-col justify-between ">
                <ul className=" mt-10 flex flex-col gap-2 items-center ">
                    <NavLink to="/Home" className={currentPath === "/Home" ? "text-[#E5946D]" : "hover:text-[#E5946D]"}>
                        Главная
                    </NavLink>
                    <NavLink to="/About" className={currentPath === "/About" ? "text-[#E5946D]" : "hover:text-[#E5946D]"}>
                        О нас
                    </NavLink>
                    <NavLink to="/Menu0" className={isMenuActive ? "text-[#E5946D]" : "hover:text-[#E5946D]"}>
                        Меню
                    </NavLink>
                    <NavLink to="/Franchise" className={currentPath === "/Franchise" ? "text-[#E5946D]" : "hover:text-[#E5946D]"}>
                        Франшиза
                    </NavLink>
                    <NavLink to="/Contacts" className={currentPath === "/Contacts" ? "text-[#E5946D]" : "hover:text-[#E5946D]"}>
                        Контакты
                    </NavLink>
                </ul>
                <div className=" max-lg:flex-col flex gap-1 justify-center ">
                    <NavLink to={`/${parentPath}/DropDownMenu/Registration`} className=" cursor-pointer hover:text-[#E5946D] max-lg:w-[100%] text-center w-[20%] underline ">Регистрация</NavLink>
                    <p className=" max-lg:hidden ">/</p>
                    <NavLink to={`/${parentPath}/DropDownMenu/Authorization`} className=" cursor-pointer hover:text-[#E5946D] max-lg:w-[100%] text-center w-[20%] underline ">Войти</NavLink>
                </div>
                <div className=" flex gap-3 justify-center ">
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
                <img className=" dark:mix-blend-luminosity dark:opacity-20 h-[20vh] object-cover w-[100%] mix-blend-exclusion " src="/src/assets/images/dropdownmenu/decor.png" ></img>
            </div>
        </section>
    )
}
export default DropDownMenu;