import { useParams, NavLink } from 'react-router-dom';
import { categories } from '../utils/data';
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router';

function Drink() {
  const { idMenu, id } = useParams();
  const drink = categories[idMenu].posts[id];
  const navigate = useNavigate();
    return (
      <section className=" relative mb-5 h-auto flex flex-col justify-center items-center gap-[10px] text-[#594e4e] font-monts leading-[1.5] tracking-[1.5px] text-[18px] font-semibold ">
        <img className=" max-lg:hidden absolute left-0 " src="/src/assets/images/blob01.png"></img>
        <img className=" max-lg:hidden absolute right-0 " src="/src/assets/images/blob02.png"></img>
        <div className=" max-lg:flex max-lg:flex-col h-[85%] bg-white mt-10 w-[79%] grid grid-cols-[1fr_1fr] items-center gap-[20px] ">
          <IoIosArrowRoundBack onClick={() => {navigate(-1)}} className=" max-lg:left-5 cursor-pointer h-[7%] w-[7%] left-20 absolute top-5 "/>
          <div className=" flex flex-col gap-[20px] items-center justify-center ">
            <img className=" h-[70%] w-[90%] " src={drink.img}></img>
            <p className=" max-md:text-[13px] max-lg:text-[18px] text-[20px] ">{drink.volumecoff}</p>
            <p className=" max-lg:text-center max-md:text-[13px] max-lg:text-[18px] font-normal ">{drink.composition}</p>
          </div>
          <div className=" max-lg:gap-5 flex flex-col gap-[80px] h-[90%] ">
            <h3 className=" max-lg:text-center max-md:text-[13px] max-lg:text-[18px]uppercase w-[100%] mt-10 ">{drink.namecoff}</h3>
            <p className=" max-md:text-[13px] max-lg:text-[18px] font-normal text-right flex items-center h-[80%] ">{drink.description}</p>
            <NavLink to="https://vk.com/" className=" max-md:text-[13px] max-lg:text-[18px] underline w-[100%] text-right ">Открыть предсказание на день</NavLink>
          </div>
        </div>
        <button className=" max-md:text-[13px] max-lg:text-[18px] cursor-pointer text-[#F5EAEA] mt-5 bg-[#594E4E] rounded-[90px] px-30 py-1  ">В корзину</button>
        <button className=" max-md:text-[13px] max-lg:text-[18px] cursor-pointer underline w-[100%] ">Перейти в корзину</button>
      </section>
  );
};

export default Drink;

