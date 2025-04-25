import { useParams } from 'react-router-dom';
import styles from './Drink.module.css';
import { categories } from '../../../utils/data';

export const Drink = () => {
  const { idMenu, id } = useParams();
  const drink = categories[idMenu].posts[id];

  return (
    <section className={styles.page}>
      <div className={styles.drink_content}>
        <p>{id}</p>
        <h2 className={styles.heading}>{drink.namecoff}</h2>
        <div className={styles.drink_info}></div>
      </div>
    </section>
  );
};

export default Drink;
