import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { PiCoffeeBeanFill } from 'react-icons/pi';

export const HeaderMenu = () => {
  const dark = () => {
    document.documentElement.classList.add('dark',
      localStorage.theme === "dark"
    )
  } 
  const light = () => {
    document.documentElement.classList.remove('dark',
      localStorage.theme === "dark"
    )
  }  
  const navigate = useNavigate();
  const location = useLocation();
  const getBasePath = () => {
  const segments = location.pathname.split('/');
  return segments.slice(0, segments.indexOf('DropDownMenu')).join('/') || '/';
};

const handleClose = () => navigate(getBasePath());
  return (
    <header className=" dark:text-[#f5eaea] dark:bg-[#0b0005] text-[#594e4e] h-[10vh] flex justify-center ">
      <nav className=" w-[80%] flex justify-between items-center ">
        <NavLink to="/Home">
          <PiCoffeeBeanFill className=" hover:text-[#E5946D] hover:animate-spin max-sm:w-8 cursor-pointer w-[40px] h-[40px] " />
        </NavLink>
        <div className=" flex gap-5 opacity-[0.7] " >
          <button onClick={light} className=" hover:animate-spin max-md:w-[30px] max-md:h-[30px] md:w-[40px] md:h-[40px] cursor-pointer bg-cover bg-[url(src/assets/images/header/day.svg)] " ></button>
          <button onClick={dark} className=" hover:animate-spin max-md:w-[30px] max-md:h-[30px] md:w-[40px] md:h-[40px] cursor-pointer bg-cover bg-[url(src/assets/images/header/night.svg)] " ></button>
        </div>
        <AiOutlineCloseCircle  onClick={handleClose} className=" cursor-pointer max-sm:w-10 hover:text-[#E5946D] w-[60px] h-[60px] " />
      </nav>
    </header>
  );
};

export default HeaderMenu;