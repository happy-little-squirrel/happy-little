import { NavLink } from 'react-router-dom';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { PiCoffeeBeanFill } from 'react-icons/pi';
import { useNavigate } from 'react-router';

export const HeaderMenu = () => {
  const navigate = useNavigate();
  return (
    <header className=" bg-white font-monts font-semibold tracking-[0.8px] text-[#594e4e] text-[15px] relative z-40 flex justify-center w-[100vw] h-[60px] ">
      <nav className=" max-lg:flex max-lg:justify-between z-1 w-[79%] grid grid-cols-[0.15fr_1fr_0.1fr_max-content] gap-[10px] h-[100%] items-center">
        <NavLink className=" hover:animate-bounce cursor-ponter flex items-end text-[#594e4e] " to="/">
          <PiCoffeeBeanFill className=" max-lg:w-9 rotate-169 w-[50%] h-[80%] " />
          <PiCoffeeBeanFill className=" max-lg:hidden rotate-100 w-[30%] h-[50%] " />
          <PiCoffeeBeanFill className=" max-lg:hidden rotate-135 w-[50%] h-[70%] " />
          <PiCoffeeBeanFill className=" max-lg:hidden rotate-50 w-[30%] h-[50%] " />
        </NavLink>
        <div className=" max-lg:w-40 max-lg:gap-3 flex justify-center gap-[10px] opacity-[0.7] ">
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
        <li className=" max-lg:hidden list-none text-[20px] flex gap-[5px]  ">
          <button className=" uppercase  ">ru</button>
          <p>/</p>
          <button className=" uppercase ">en</button>
        </li>
        <AiOutlineCloseCircle onClick={() => {navigate(-1)}} className=" max-sm:w-9 hover:text-[#E5946D] cursor-pointer w-[50px] h-[50px] " />
      </nav>
    </header>
  );
};

export default HeaderMenu;