import { NavLink, useParams } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { categories } from '../utils/data';

function Menu() {
  const { idMenu } = useParams();
  const category = categories[parseInt(idMenu.replace('Menu', ''))];
  const prevbuttons = () => (
    <div className=" absolute top-[30%] -left-5 ">
      <IoIosArrowBack />
    </div>
  );
  const nextbuttons = () => (
    <div className=" absolute top-[30%] -right-5 ">
      <IoIosArrowForward />
    </div>
  );
  const setActive = ({ isActive }) => (isActive ? " text-[#E5946D] " : " hover:text-[#E5946D] focus:outline-none ")
  return (
    <section className="  dark:text-[#f5eaea] dark:bg-[#0b0005] text-[#594e4e] font-monts tracking-[1.5px] text-[18px] font-semibold ">
      <div className=" dark:bg-blend-overlay dark:bg-[#0b0005]/80 max-lg:justify-center h-screen flex bg-[url(src/assets/images/menu/menu_cover.png)] bg-cover bg-no-repeat ">
        <div className=" max-lg:w-[80%] w-[50%] flex items-center justify-center ">
          <div className=" flex flex-col gap-5 border-l-4 rounded-b-[50px] ">
            <div className=" w-[100%] pl-5 uppercase lg:text-[70px] ">
              <h1 className=" max-lg:text-[65px] font-normal ">Твой</h1>
              <h2 className=" max-lg:text-[55px] ">кофе</h2>
              <h3 className=" max-lg:text-[35px] font-black ">у нас</h3>
            </div>
            <p className=" max-lg:hidden text-[#f5eaea] bg-[#594e4e] uppercase py-2 w-[100%] font-normal px-14 rounded-[0_0_60px_60px] ">Закажи заранее</p>
          </div>
        </div>
        <div className=" max-lg:hidden bg-black opacity-[0.6] w-[50%] h-[100%] "></div>
      </div>
      <section className=" dark:drop-shadow-[#0b0005] dark:bg-[#0b0005] max-lg:drop-shadow-none lg:drop-shadow-[0px_-120px_50px_rgba(255,255,255,1)] mb-2 bg-white flex justify-center ">
        <img className=" dark:mix-blend-color-burn max-lg:w-60 mix-blend-multiply absolute right-0 " src="/src/assets/images/line02.png"></img>
        <div className=" dark:bg-white dark:mix-blend-light dark:opacity-30 dark:text-[#594e4e] dark:m-2 max-lg:items-center w-[80%] flex flex-col gap-5 ">
          <div className=" lg:hidden mt-5 h-[10vh] w-[50%] ">
            <AliceCarousel renderPrevButton={prevbuttons} renderNextButton={nextbuttons} disableDotsControls = 'false'> 
            {categories.map(({ name, id, index }) => (
                <div key={name} className=" flex items-center justify-center h-[10vh] ">
                  <NavLink to={`/Menu${id - 1}`} className={setActive} key={index}>
                    <h3 className=" text-[15px] uppercase text-center ">{name}</h3>
                  </NavLink>
                </div> 
            ))}
            </AliceCarousel>
          </div>
          <div className=" max-lg:hidden relative h-[22vh] w-[100%] flex justify-center gap-5 text-[15px] ">
            {categories.map(({ name, id, index }) => (
                <div key={name} className=" hover:scale-110  duration-700 w-[15%] flex items-center justify-center ">
                  <NavLink to={`/Menu${id - 1}`} className={setActive} key={id}>
                    <h3 className=" uppercase text-center ">{name}</h3>
                  </NavLink>
                  <img className=" -z-1 absolute bottom-0 " src="/src/assets/images/menu/beans.png"></img>
                </div> 
            ))}
          </div>
            <section className=" max-sm:flex max-sm:flex-col max-sm:items-center max-sm:w-[100%] md:grid-cols-3 lg:grid-cols-4 grid gap-10 ">
              {category.posts.map(({ img, namecoff, volumecoff, id }) => (
                <NavLink to={`${id-1}`}  onClick={() => window.scrollTo(0, 0)} key={id}>
                  <div className=" max-sm:w-[60vw] hover:text-[#E5946D] duration-150 h-[290px] flex flex-col  ">
                    <div key={id} className=" h-[250px] flex flex-col gap-3 items-center mb-1 ">
                      <img src={img} className=" h-[165px] "></img>
                      <h3 className=" max-md:text-[15px] max-lg:text-[18px] lg:text-[13px] text-center h-[40px] flex items-center ">{namecoff}</h3>
                        <ul className=" max-md:text-[15px] max-lg:text-[18px] uppercase text-[15px] text-center font-normal " aria-hidden="true">
                          <li>{volumecoff}</li>
                        </ul>
                    </div>
                    <button className=" hover:bg-[#E5946D] duration-150 text-[#F5EAEA] bg-[#594E4E] rounded-b-[30px] w-[100%] text-[15px] py-1 ">Заказать</button>
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

