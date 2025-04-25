import styles from './Slider.module.css';
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { slider } from '../../../utils/data';

const Slidered = ({ img }) => {
  return (
    <div className={styles.slide}>
      <img className={styles.img} src={img}></img>
    </div>
  );
};

const dots = () => <div className={styles.dot}></div>;

const Carousel = () => (
  <AliceCarousel disableButtonsControls="false" renderDotsItem={dots}>
    {slider.map((slidered, index) => {
      return <Slidered key={index} img={slidered.img} />;
    })}
  </AliceCarousel>
);

export default Carousel;
