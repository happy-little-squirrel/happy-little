import List from '../../../helpers/list/List';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { coffeehouse } from '../../../../utils/data';

export const Modal = ({ active, setActive }) => {
  return (
    <div className={`${active ? 'fixed' : 'hidden'} w-[100vw] h-[100vh] top-0 left-0 z-10 backdrop-blur-sm`}>
      <div className="">
        <div className={'flex '}>
          <button className={''}>
            <AiOutlineCloseCircle className={''} onClick={() => setActive(false)} />
          </button>
          <h2>Наши кофейни</h2>
          <div className={'flex gap-4 item-center justify-center w-[100vw] h-[100vh]'}>
            {coffeehouse.map((list, index) => {
              return <List key={index} heading={list.heading} img={list.img} />;
            })}
          </div>
          <NavLink
            className={''}
            to="https://yandex.ru/maps/213/moscow/search/кофейня/?ll=37.619303%2C55.759910&sll=37.620948%2C55.770643&source=serp_navig&sspn=1.145325%2C0.411840&z=13"
          >
            Открыть в картах
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Modal;
