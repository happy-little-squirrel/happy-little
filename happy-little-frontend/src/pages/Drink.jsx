import { useParams, NavLink, useNavigate } from 'react-router-dom';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { categories } from '../utils/data';

function Drink() {
  const { idMenu, id } = useParams();
  const drink = categories[parseInt(idMenu.replace('Menu', ''))].posts[parseInt(id.replace('drink', ''))];
  const navigate = useNavigate();
    return (
      <section className=" dark:text-[#f5eaea] dark:bg-[#0b0005] relative mb-2 h-auto flex flex-col items-center gap-5 text-[#594e4e] font-monts leading-[1.5] tracking-[1.5px] text-[18px] font-semibold ">
        <img className=" max-lg:hidden absolute left-0 bottom-0 " src="/src/assets/images/blob01.png"></img>
        <img className=" max-lg:hidden absolute right-0 " src="/src/assets/images/blob02.png"></img>
        <div className=" dark:bg-white dark:mix-blend-light dark:opacity-30 dark:text-[#594e4e] max-lg:flex max-lg:flex-col bg-white mt-5 p-5 w-[75%] grid grid-cols-2 items-center gap-10 ">
          <IoIosArrowRoundBack onClick={() => {navigate("..", { relative: "path" })}} className=" dark:text-[#f5eaea] max-lg:left-5 lg:left-15 cursor-pointer h-[7%] w-[7%] absolute top-5 "/>
          <div className=" flex flex-col gap-5 items-center ">
            <img className=" h-[70%] w-[90%] " src={drink.img}></img>
            <p className=" max-md:text-[13px] lg:text-[20px] ">{drink.volumecoff}</p>
            <p className=" max-lg:text-center max-md:text-[13px] font-normal ">{drink.composition}</p>
          </div>
          <div className=" max-lg:gap-5 flex flex-col gap-20 h-[90%] ">
            <h3 className=" max-lg:text-center max-md:text-[13px] max-lg:text-[18px]uppercase ">{drink.namecoff}</h3>
            <p className=" max-md:text-[13px] font-normal text-right flex items-center ">{drink.description}</p>
            <NavLink to="https://vk.com/" className=" max-md:text-[13px] underline text-right mb-2 ">Открыть предсказание на день</NavLink>
          </div>
        </div>
        <button className=" max-md:text-[13px] cursor-pointer text-[#F5EAEA] bg-[#594E4E] rounded-[90px] px-30 py-1 ">В корзину</button>
        <button className=" max-md:text-[13px] cursor-pointer underline w-[100%] ">Перейти в корзину</button>
      </section>
  );
};

export default Drink;

