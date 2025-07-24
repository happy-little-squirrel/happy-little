import { NavLink } from 'react-router-dom';
import { IoIosMenu } from 'react-icons/io';
import { PiCoffeeBeanFill } from 'react-icons/pi';

export const Header = () => {
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
  const currentPath = location.pathname.endsWith('/') ? location.pathname.slice(0, -1) : location.pathname;
  return (
    <header className=" dark:text-[#f5eaea] dark:bg-[#0b0005] bg-[#594e4e] text-[#f5eaea] h-[10vh] flex justify-center ">
      <nav className=" w-[80%] flex justify-between items-center ">
        <NavLink to="/Home">
          <PiCoffeeBeanFill className=" hover:text-[#E5946D] hover:animate-spin max-sm:w-8 cursor-pointer w-[40px] h-[40px] " />
        </NavLink>
        <div className=" flex gap-5 opacity-[0.7] " >
          <button onClick={light} className=" hover:animate-spin max-md:w-[30px] max-md:h-[30px] md:w-[40px] md:h-[40px] cursor-pointer bg-cover bg-[url(src/assets/images/header/day.svg)] " ></button>
          <button onClick={dark} className=" hover:animate-spin max-md:w-[30px] max-md:h-[30px] md:w-[40px] md:h-[40px] cursor-pointer bg-cover bg-[url(src/assets/images/header/night.svg)] " ></button>
        </div>
        <NavLink to={`${currentPath}/DropDownMenu`} state={{ from: location.pathname }}>
          <IoIosMenu className=" cursor-pointer max-sm:w-10 hover:text-[#E5946D] w-[60px] h-[60px] " />
        </NavLink>
      </nav>
    </header>
  
  );
};
export default Header;
