import { useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import { CgProfile } from 'react-icons/cg';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

function Profile() { 
    const { parentPath } = useParams();
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const navigate = useNavigate();
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
    const handleLogout = async () => {
        try {
            const response = await fetch('/api/user/logout', { method: 'POST' });
            const data = await response.json();
            if (data.success) {
                setIsLoggedIn(false);
                 navigate(`/${parentPath}/DropDownMenu/Authorization`); // Перенаправляем на страницу входа
            }
        } catch (error) {
            alert('Ошибка сети: ' + error.message);
        }
  };
    return (
        <div className=' dark:text-[#f5eaea] dark:bg-[#0b0005] lg:text-[15px] xl:text-[18px] h-[80vh] flex justify-center text-[#594e4e] font-monts tracking-[1.5px] text-[18px] font-semibold '> 
            <img className=" max-lg:w-30 max-lg:bottom-0 absolute left-0 " src="/src/assets/images/blob01.png"></img>
            <img className=" max-lg:w-40 absolute right-0 " src="/src/assets/images/blob02.png"></img>
            <div className=" relative w-[90%] flex items-center justify-center ">
                <div className=" max-lg:dark:bg-[#0b0005]/0 max-lg:bg-white/0 dark:bg-[#0b0005] max-lg:flex-col max-lg:items-center max-lg:border-none max-lg:w-[100%] max-lg:gap-5 max-lg:h-[80vh] max-lg:w-[80%] lg:h-[70vh] lg:w-[70%] flex gap-10 bg-white rounded-r-[90px] rounded-l-[90px] border-r-10 border-[#A49986] ">
                    <div className=" max-lg:w-[100%] max-lg:h-[10vh] relative w-[50%] h-[100%] flex justify-center ">
                        <img className=" dark:mix-blend-luminosity dark:opacity-20 max-lg:hidden absolute mix-blend-exclusion object-cover h-[100%] rounded-l-[90px] " src="/src/assets/images/dropdownmenu/decor.png"></img>
                        <div className=" lg:hidden w-[90%] h-[10vh] border-dashed border flex justify-center " >
                            <AliceCarousel renderPrevButton={prevbuttons} renderNextButton={nextbuttons} disableDotsControls = 'false'> 
                                <button className=" w-[100%] h-[10vh] text-[20px] font-normal ">Аноним</button>
                                <button className=" w-[100%] h-[10vh] text-[20px] font-normal ">Мои заказы</button>
                                <button className=" w-[100%] h-[10vh] text-[20px] font-normal ">Корзина</button>
                                <button onClick={handleLogout} className=" w-[100%] h-[10vh] text-[20px] font-normal ">Выйти</button>
                            </AliceCarousel>
                        </div>
                        <div className=" max-lg:hidden w-[90%] mt-5 flex flex-col gap-5 xl:text-[20px] font-normal ">
                            <div className=" dark:bg-[#594e4e] py-0 rounded-tl-[90px] flex items-center pl-3 gap-5 drop-shadow-[0px_10px_0px_rgba(0,0,0,0.3)] mix-blend-mormal bg-[#f5eaea] uppercase ">
                                <CgProfile className=" w-[5vw] h-[10vh] rounded-tl-[90px] " />
                                <button className=" max-xl:text-[25px] xl:text-[30px] ">Аноним</button>
                                <IoIosArrowForward className=" w-[30px] h-[100px] "/>
                            </div>
                            <button className=" dark:bg-[#594e4e] py-2 text-start p-5 drop-shadow-[0px_10px_0px_rgba(0,0,0,0.3)] mix-blend-mormal bg-[#f5eaea] ">Мои заказы</button>
                            <button className=" dark:bg-[#594e4e] py-2 text-start p-5 drop-shadow-[0px_10px_0px_rgba(0,0,0,0.3)] mix-blend-mormal bg-[#f5eaea] ">Корзина</button>
                            <button onClick={handleLogout} className=" dark:bg-[#594e4e] hover:bg-[#E5946D] hover:text-[#f5eaea] cursor-pointer py-2 text-start p-5 drop-shadow-[0px_10px_0px_rgba(0,0,0,0.3)] mix-blend-mormal bg-[#f5eaea] ">Выйти</button>
                        </div>
                       
                    </div>
                    <div className=" max-lg:dark:bg-white/0 max-lg:bg-white/50 max-lg:w-[90%] max-lg:h-[80%] max-lg:border w-[40%] h-[90%] flex justify-end items-end ">
                        <NavLink to="/Menu0" className=" max-lg:p-5 hover:text-[#E5946D] cusor-pointer underline font-normal ">В меню</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Profile;
