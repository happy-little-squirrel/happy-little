import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { NavLink } from 'react-router-dom';
import { categories } from '../utils/data';

export const Menu = () => {
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
        <TabGroup className=" w-[79%] h-[768px] flex flex-col items-center gap-[15px] mt-5 ">
          <TabList className=" h-[20%] w-[100%] flex gap-[20px] justify-center text-[15px] ">
            {categories.map(({ name }) => (
              <Tab key={name} className=" w-[15%] flex bg-no-repeat bg-[url(src/assets/images/menu/beans.png)] bg-cover justify-center items-center uppercase ">
                {name}
              </Tab>
            ))}
          </TabList>
          <TabPanels>
            {categories.map(({ id, posts }) => (
              <TabPanel key={id}>
                <ul className=" w-[100%] grid grid-cols-[1fr_1fr_1fr_1fr] gap-y-[10px] gap-x-[20px] items-center ">
                  {posts.map((post, index) => (
                    <NavLink to={`/drink/${id - 1}/${index}`} key={index}>
                      <div className=" w-[185px] h-[263px] flex flex-col justify-center items-center ">
                        <li key={post.id} className=" w-[100%] h-[227px] flex flex-col gap-[8px] h-[100%] justify-end mb-1 items-center ">
                          <img src={post.img} className=" h-[155px] w-[90%] "></img>
                          <h3 className=" text-[13px] text-center h-[15%] flex items-center ">{post.namecoff}</h3>
                          <ul className=" uppercase text-[15px] text-center font-normal " aria-hidden="true">
                            <li>{post.volumecoff}</li>
                          </ul>
                        </li>
                        <button className=" text-[#F5EAEA] bg-[#594E4E] rounded-b-[30px] w-[100%] py-5text-[15px] ">Заказать</button>
                      </div>
                    </NavLink>
                  ))}
                </ul>
              </TabPanel>
            ))}
          </TabPanels>
          <button className=" cursor-pointer underline ">В корзину</button>
        </TabGroup>        
      </section>
    </section>
  );
};
export default Menu;
