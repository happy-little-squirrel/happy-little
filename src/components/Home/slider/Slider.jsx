import styles from './Slider.module.css';
import slide01 from '/src/assets/images/home/slide01.png';
import slide02 from '/src/assets/images/home/slide02.png';
import slide03 from '/src/assets/images/home/slide03.png';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { NavLink } from 'react-router-dom';

const slider = [
  {
    img: slide01,
    heading: 'Франшиза кофейни “HAPPY LITTLE”',
    btn: 'Узнать подробнее',
    path: '/Franchise',
  },
  {
    img: slide02,
    heading: 'Мы - кофейня, где звезды становятся ближе',
    btn: 'Узнать подробнее',
    path: '/About',
  },
  {
    img: slide03,
    heading: 'Твой кофе у нас',
    btn: 'Заказать',
    path: '/Menu',
  },
];

const Slidered = ({ img, heading, btn, path }) => {
  return (
    <div className={styles.slide}>
      <img className={styles.img} src={img}></img>
      <figure className={styles.die}>
        <h3 className={styles.heading}>{heading}</h3>
        <NavLink className={styles.btn} to={path}>
          {btn}
        </NavLink>
      </figure>
    </div>
  );
};

const dots = () => <div className={styles.dot}></div>;

const Carousel = () => (
  <AliceCarousel disableButtonsControls="false" renderDotsItem={dots}>
    {slider.map((slidered, index) => {
      return <Slidered key={index} img={slidered.img} heading={slidered.heading} btn={slidered.btn} />;
    })}
  </AliceCarousel>
);
export default Carousel;
