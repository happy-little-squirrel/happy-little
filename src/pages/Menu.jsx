import { NavLink, useParams } from 'react-router-dom';
import { categories } from '../utils/data';

function Menu() {
  const { idMenu } = useParams();
  const category = categories[idMenu]
  const setActive = ({ isActive }) => (isActive ? " text-[#E5946D] " : " hover:text-[#E5946D] focus:outline-none ")
  return (
    <section className=" text-[#594e4e] font-monts leading-[1.5] tracking-[1.5px] text-[18px] font-semibold ">
      <div className=" w-[100%] h-[708px] bg-[url(src/assets/images/menu/menu_cover.png)] bg-cover bg-no-repeat flex ">
        <div className=" w-[50%] flex justify-center items-center ">
          <div className=" w-[50%] flex flex-col gap-[10px] border-l-4 border-t-1 rounded-b-[50px] items-center ">
            <div className=" w-[100%] pl-5 uppercase text-[70px] ">
              <h1 className=" font-normal ">Твой</h1>
              <h1>кофе</h1>
              <h1 className=" font-black ">у нас</h1>
            </div>
            <p className=" text-[#f5eaea] bg-[#594e4e] uppercase py-2 w-[100%] font-normal px-14 rounded-[0_0_60px_60px] ">Закажи заранее</p>
          </div>
        </div>
        <div className=" bg-black opacity-[0.6] w-[50%] h-[100%] "></div>
      </div>
      <section className=" drop-shadow-[0px_-120px_50px_rgba(255,255,255,1)] bg-white flex justify-center ">
        <img className=" absolute right-0 " src="/src/assets/images/line02.png"></img>
        <div className=" w-[79%] h-[768px] flex flex-col items-center gap-[15px] ">
          <div className=" relative h-[20%] w-[100%] flex justify-center gap-[20px] text-[15px] ">
            {categories.map(({ name, id, index }) => (
                <div key={name} className=" hover:duration-700 duration-700 hover:scale-110 w-[15%] flex items-center justify-center ">
                  <NavLink to={`/Menu/${id - 1}`} className={setActive} key={index}>
                    <h3 className=" uppercase text-center ">{name}</h3>
                  </NavLink>
                  <img className=" -z-1 absolute bottom-0 " src="/src/assets/images/menu/beans.png"></img>
                </div> 
            ))}
          </div>
          <section className=" w-[80%] grid grid-cols-[1fr_1fr_1fr_1fr] gap-y-[20px] gap-x-[20px] items-center">
            {category.posts.map(({ img, namecoff, volumecoff, id, index }) => (
              <NavLink to={`${id-1}`}  key={index}>
                <div className=" hover:duration-150 duration-150 hover:text-[#E5946D] w-[185px] h-[263px] flex flex-col justify-center items-center ">
                  <li key={id} className=" w-[100%] h-[227px] flex flex-col gap-[8px] h-[100%] justify-end mb-1 items-center ">
                    <img src={img} className=" h-[155px] w-[90%] "></img>
                    <h3 className=" text-[13px] text-center h-[15%] flex items-center ">{namecoff}</h3>
                      <ul className=" uppercase text-[15px] text-center font-normal " aria-hidden="true">
                        <li>{volumecoff}</li>
                      </ul>
                  </li>
                  <button className=" hover:duration-150 duration-150 hover:bg-[#E5946D] text-[#F5EAEA] bg-[#594E4E] rounded-b-[30px] w-[100%] py-5text-[15px] ">Заказать</button>
                </div>
              </NavLink>
            ))}
          </section>
          <button className=" hover:text-[#E5946D] cursor-pointer underline ">В корзину</button>
        </div>        
      </section>
    </section>
  );
};
export default Menu;

