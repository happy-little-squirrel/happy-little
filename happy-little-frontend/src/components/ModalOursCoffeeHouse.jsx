import { NavLink } from 'react-router-dom';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { coffeehouse } from '../utils/data';
import List from '../components/List';

export const ModalOursCoffeeHouse = ({ active, setActive }) => {
  return (
    <div className={`${active ? 'fixed' : 'hidden'} dark:bg-[#0b0005] drop-shadow-[0px_0px_20px_rgba(0,0,0,0.5)] w-[100%] h-screen top-0 left-0 z-10 bg-white `}>
      <div className=" h-[100%] flex flex-col items-center  ">
        <AiOutlineCloseCircle className=" hover:text-[#E5946D] absolute cursor-pointer right-[10%] w-[7%] h-[7%] " onClick={() => setActive(false)} /> 
        <div className=" border flex flex-col w-[80%] h-[100%] justify-between items-center "> 
          <h2 className=" max-md:text-[13px] lg:text-[20px] uppercase mt-[5%] ">Наши кофейни</h2>
          <div className=" border max-lg:w-[100%] max-lg:flex-col lg:justify-center flex gap-5 lg:w-[80%] ">
            {coffeehouse.map((list, index) => {
              return <List key={index} heading={list.heading} img={list.img} />;
            })}
          </div>
          <NavLink
            className=" max-md:text-[13px] max-lg:text-[18px] mb-2 w-[90%] text-right underline font-normal "
            to="https://yandex.ru/maps/213/moscow/search/кофейня/?ll=37.619303%2C55.759910&sll=37.620948%2C55.770643&source=serp_navig&sspn=1.145325%2C0.411840&z=13">
            Открыть в картах
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ModalOursCoffeeHouse;
