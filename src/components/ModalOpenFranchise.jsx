import { AiOutlineCloseCircle } from 'react-icons/ai';

export const ModalOpenFranchise = ({ active, setActive }) => {
  return (
    <div className={`${active ? 'fixed' : 'hidden'} w-[100vw] h-[768px] top-0 left-0 z-10 backdrop-blur-sm`}>
      <div className=" h-[100%] flex flex-col relative w-[100%] items-center ">
        <AiOutlineCloseCircle className=" absolute cursor-pointer right-10 w-[7%] h-[7%] " onClick={() => setActive(false)} /> 
        <div className=" flex flex-col w-[79%] bg-white h-[100%] gap-[30px] items-center ">
          <h2 className=" text-[20px] uppercase mt-5 ">Оставьте вашу заявку</h2>
          <div className=" w-[80%] flex gap-[20px] border-r-10 border-[#A49986] rounded-r-[90px] rounded-l-[90px] ">
            <img src="/src/assets/images/franchise/application02.png"></img>
            <div className=" flex flex-col gap-[40px] w-[47%] justify-center ">
              <p className=" text-center font-normal ">Оставьте заявку на открытие Франшизы</p>
              <form className=" flex flex-col items-center gap-[30px] ">
                <label className=" w-[70%] text-center ">
                  Имя
                  <input className=" border-dashed border-b " type="text"></input>
                </label>
                <label className=" w-[70%] text-center">
                  Телефон
                  <input className=" border-dashed border-b " type="text"></input>
                </label>
                <button className=" cursor-pointer text-[#F5EAEA] bg-[#594E4E] rounded-[90px] px-15 py-1 ">Отправить</button>
                <p className=" font-normal text-[12px] text-center ">
                  Нажимая на кнопку, вы даёте разрешение на обработкой персональных данных и принимаете условия
                  пользовательского соглашения отправить
                </p>
              </form>
            </div>
          </div>
          <h3 className=" uppercase text-[20px] w-[90%] text-right">Мы обязательно свяжемся с вами</h3>
        </div>
      </div>
    </div>
  );
};

export default ModalOpenFranchise;
