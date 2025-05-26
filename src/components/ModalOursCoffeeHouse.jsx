import List from '../components/List';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { coffeehouse } from '../utils/data';

export const ModalOursCoffeeHouse = ({ active, setActive }) => {
  return (
    <div className={`${active ? 'fixed' : 'hidden'} w-[100vw] h-screen border top-0 left-0 z-10 backdrop-blur-sm`}>
      <div className=" h-[99%] flex flex-col items-center relative w-[100%] ">
        <AiOutlineCloseCircle className=" absolute cursor-pointer right-10 w-[7%] h-[7%] " onClick={() => setActive(false)} /> 
        <div className=" flex flex-col w-[90%] h-[100%] justify-between items-center "> 
          <h2 className=" max-md:text-[13px] max-lg:text-[18px] text-[20px] uppercase mt-5 ">Наши кофейни</h2>
          <div className=" max-lg:flex-col max-lg:h-[75%] border flex gap-4 item-center justify-center w-[100%] ">
            {coffeehouse.map((list, index) => {
              return <List key={index} heading={list.heading} img={list.img} />;
            })}
          </div>
          <NavLink
            className=" max-md:text-[13px] max-lg:text-[18px] w-[90%] text-right underline font-normal "
            to="https://yandex.ru/maps/213/moscow/search/кофейня/?ll=37.619303%2C55.759910&sll=37.620948%2C55.770643&source=serp_navig&sspn=1.145325%2C0.411840&z=13"
          >
            Открыть в картах
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ModalOursCoffeeHouse;
