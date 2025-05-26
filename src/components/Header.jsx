import { NavLink } from 'react-router-dom';
import { IoIosMenu } from 'react-icons/io';
import { PiCoffeeBeanFill } from 'react-icons/pi';

export const Header = () => {
  return (
    <header className=" font-monts font-semibold tracking-[0.8px] text-[#f5eaea] text-[15px] relative z-40 flex justify-center bg-[#594e4e] w-screen h-[60px] drop-shadow-xl/25 ">
      <nav className=" max-lg:flex  max-lg:justify-between z-1 w-[79%] grid grid-cols-[0.15fr_1fr_0.1fr_max-content] gap-[10px] h-[100%] items-center">
        <NavLink className=" focus:outline-none hover:animate-bounce cursor-ponter flex items-end text-[#f5eaea] " to="/">
          <PiCoffeeBeanFill className=" max-lg:w-9 rotate-169 w-[50%] h-[80%]  " />
          <PiCoffeeBeanFill className=" max-lg:hidden rotate-100 w-[30%] h-[50%] " />
          <PiCoffeeBeanFill className=" max-lg:hidden rotate-135 w-[50%] h-[70%] " />
          <PiCoffeeBeanFill className=" max-lg:hidden rotate-50 w-[30%] h-[50%] " />
        </NavLink>
        <div className=" max-lg:hidden flex justify-center gap-[10px] opacity-[0.7] " >
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
        <li className=" max-lg:hidden list-none text-[20px] flex gap-[5px] ">
          <button className=" uppercase ">ru</button>
          <p>/</p>
          <button className=" uppercase ">en</button>
        </li>
        <NavLink to="/DropDownMenu">
          <IoIosMenu className=" max-sm:w-9 hover:text-[#E5946D] w-[50px] h-[50px] " />
        </NavLink>
      </nav>
    </header>
  );
};
export default Header;
