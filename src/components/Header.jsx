import { NavLink } from 'react-router-dom';
import { IoIosMenu } from 'react-icons/io';
import { PiCoffeeBeanFill } from 'react-icons/pi';

export const Header = () => {
  return (
    <header className=" font-monts font-semibold tracking-[0.8px] text-[#f5eaea] text-[15px] relative z-40 flex justify-center bg-[#594e4e] w-[100vw] h-[60px] drop-shadow-xl/25 ">
      <nav className=" z-1 w-[79%] grid grid-cols-[0.15fr_1fr_0.1fr_max-content] gap-[10px] h-[100%] items-center">
        <NavLink className=" focus:outline-none hover:animate-bounce cursor-ponter flex items-end text-[#f5eaea] " to="/">
          <PiCoffeeBeanFill className=" rotate-169 w-[50%] h-[80%]  " />
          <PiCoffeeBeanFill className=" rotate-100 w-[30%] h-[50%] " />
          <PiCoffeeBeanFill className=" rotate-135 w-[50%] h-[70%] " />
          <PiCoffeeBeanFill className=" rotate-50 w-[30%] h-[50%] " />
        </NavLink>
        <div className=" flex justify-center gap-[10px] opacity-[0.7] " >
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
        <li className=" list-none text-[20px] flex gap-[5px] ">
          <button className=" uppercase ">ru</button>
          <p>/</p>
          <button className=" uppercase ">en</button>
        </li>
        <NavLink to="/DropDownMenu">
          <IoIosMenu className=" hover:text-[#E5946D] w-[50px] h-[50px] " />
        </NavLink>
      </nav>
    </header>
  );
};
export default Header;
