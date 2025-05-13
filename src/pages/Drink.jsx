import { useParams } from 'react-router-dom';
import { categories } from '../utils/data';

export const Drink = () => {
  const { idMenu, id } = useParams();
  const drink = categories[idMenu].posts[id];
    return (
        <section className="">
        <div className="">
            <p>{id}</p>
            <h2 className="">{drink.namecoff}</h2>
            <div className=""></div>
        </div>
        </section>
  );
};

export default Drink;
