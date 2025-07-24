import { AiOutlineCloseCircle } from 'react-icons/ai';

export const ModalFinancialModel = ({ active, setActive }) => {
  return (
    <div className={`${active ? 'fixed' : 'hidden'} dark:bg-[#0b0005] h-screen drop-shadow-[0px_0px_20px_rgba(0,0,0,0.5)] flex top-0 z-10 bg-white `}>
      <div className=" relative h-[100%] w-[100%] flex flex-col items-center ">
        <AiOutlineCloseCircle className=" hover:text-[#E5946D] absolute cursor-pointer right-10 w-[7%] h-[7%] " onClick={() => setActive(false)} /> 
        <div className=" max-lg:gap-10 lg:gap-5 lg:w-[80%] h-[100%] flex flex-col justify-center items-center ">
          <h2 className=" lg:text-[20px] uppercase mt-5 text-center ">Оставьте вашу заявку</h2>
          <div className="  max-lg:border-none max-lg:flex-col max-lg:w-[100%] lg:w-[90%] lg:h-[80vh] flex gap-5 border-r-10 border-[#A49986] rounded-r-[90px] rounded-l-[90px] ">
            <img className=" max-lg:hidden w-[50%] " src="/src/assets/images/franchise/application03.png"></img>
            <div className=" max-lg:w-[100%] max-lg:items-center max-lg:gap-10 lg:gap-5 flex flex-col w-[50%] justify-center ">
              <p className=" lg:px-5 text-center font-normal ">Оставьте заявку на открытие Франшизы</p>
              <form className=" max-lg:h-[100%] max-md:w-[100%] max-lg:w-[50%] flex flex-col items-center gap-5 ">
                <p className=" flex flex-col items-center ">
                  <label className=" w-[50%] text-center ">Имя</label>
                  <input className=" border-dashed border-b " type="text"></input>
                </p>
                <p className=" flex flex-col items-center " >
                  <label className=" w-[50%] text-center">Город</label>
                  <input className=" border-dashed border-b " type="text"></input>
                </p>
                <p className=" flex flex-col items-center " >
                  <label className=" w-[50%] text-center">Телефон</label>
                  <input className=" border-dashed border-b " type="text"></input>
                </p>
                <button className=" hover:bg-[#E5946D] cursor-pointer text-[#F5EAEA] bg-[#594E4E] rounded-[90px] px-15 py-1 ">Отправить</button>
                <p className=" max-md:px-5 lg:px-2 font-normal text-[12px] text-center ">
                  Нажимая на кнопку, вы даёте разрешение на обработкой персональных данных и принимаете условия
                  пользовательского соглашения отправить
                </p>
              </form>
            </div>
          </div>
         <h3 className=" max-md:text-[15px] lg:text-[20px] max-lg:text-center uppercase w-[90%] lg:text-right ">Мы обязательно свяжемся с вами</h3>
        </div>
      </div>
    </div>
  );
};

export default ModalFinancialModel;
