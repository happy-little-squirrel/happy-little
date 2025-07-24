import { useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import { FaTelegramPlane, FaVk, FaWhatsapp } from 'react-icons/fa';

function Authorization() { 
    const navigate = useNavigate();
    const { parentPath } = useParams();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ login, password }),
            });
            const data = await response.json();
            if (data.success) {
                setIsLoggedIn(true);
                setMessage('Вы успешно авторизованы!');
                navigate(`/${parentPath}/DropDownMenu/Profile`);
            } else {
                setMessage(data.message || 'Ошибка авторизации');
            }
            } catch (error) {
                setMessage('Ошибка соединения с сервером');
            }
    };
    return (
         <div className=' dark:text-[#f5eaea] dark:bg-[#0b0005] lg:text-[15px] xl:text-[18px] h-[80vh] flex justify-center text-[#594e4e] font-monts tracking-[1.5px] text-[18px] font-semibold '> 
            <div className=" relative bg-white h-[100%] w-[90%] flex items-center justify-center ">
                <img className=" dark:mix-blend-luminosity dark:opacity-20 max-lg:opacity-50 absolute mix-blend-exclusion blur-sm h-[98%] w-[98%] " src="/src/assets/images/dropdownmenu/decor.png"></img>
                    <div className=" max-lg:bg-white/0 max-lg:dark:bg-white/0 max-lg:dark:text-[#f5eaea] max-lg:drop-shadow-none lg:dark:bg-white/20 lg:bg-white w-[30%] h-[85%] gap-5 rounded-[90px] flex flex-col items-center justify-center drop-shadow-[0px_0px_10px_rgba(0,0,0,1)] ">
                        <CgProfile className= " w-[50px] h-[50px] " />  
                        <form onSubmit={handleLogin} className=" xl:gap-5 w-[90%] flex flex-col gap-5 items-center ">
                            <div className=" xl:gap-3 flex flex-col items-center ">
                                <label className=" w-[50%] text-center ">Логин</label>
                                <input 
                                    type='text' 
                                    placeholder="Введите Email" 
                                    value={login}
                                    onChange={(e) => setLogin(e.target.value)}
                                    required
                                    className=" hover:outline-none focus:outline-none border-dashed border-b ">
                                </input>
                            </div>
                            <div className=" xl:gap-3 flex flex-col items-center ">
                                <label className=" w-[50%] text-center ">Пароль</label>
                                <input 
                                    type="password"
                                    placeholder="Введите Пароль"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className=" hover:outline-none focus:outline-none border-dashed border-b ">
                                </input>
                            </div>
                            <input 
                                type="submit" 
                                value="Войти"
                                className=" hover:bg-[#E5946D] cursor-pointer text-[#F5EAEA] bg-[#594E4E] rounded-[90px] px-15 py-1 ">
                            </input>
                        </form>
                        <button onClick={() => {navigate("..", { relative: "path" })}} className=" hover:text-[#E5946D] cursor-pointer text-[15px] underline ">Назад</button>
                        <div className=" flex gap-3 justify-center ">
                            <NavLink to="https://web.telegram.org/a/" >
                                <FaTelegramPlane className=" hover:text-[#E5946D] border rounded-full p-1 w-[25px] h-[25px] " />
                            </NavLink>
                            <NavLink to="https://vk.com/" >
                                <FaVk className=" hover:text-[#E5946D] border rounded-full p-1 w-[25px] h-[25px] "/>
                            </NavLink>
                            <NavLink to="https://www.whatsapp.com/?lang=ru_RU">
                                <FaWhatsapp className=" hover:text-[#E5946D] border rounded-full p-1 w-[26px] h-[26px] " />
                            </NavLink>
                        </div>
                    </div>
            </div>
        </div> 
    );
};
export default Authorization;
