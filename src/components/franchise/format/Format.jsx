import styles from './Format.module.css';
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import { formats, mainStatistics } from '../../../utils/data';
import Statistic from '../../helpers/statistics/Statistics';

const Format = ({ img, heading, title }) => {
  return (
    <div className={styles.formats}>
      <img className={styles.format_img} src={img}></img>
      <div className={styles.format}>
        <h2>{heading}</h2>
        <p className={styles.title}>
          <p>{title}</p>
        </p>
        <div className={styles.statistics}>
          {mainStatistics.map((statistic, index) => {
            return <Statistic key={index} name={statistic.name} price={statistic.price} />;
          })}
        </div>
      </div>
    </div>
  );
};

const prevbuttons = () => (
  <div className={styles.arrows01}>
    <IoIosArrowBack className={styles.arrow} />
  </div>
);

const nextbuttons = () => (
  <div className={styles.arrows02}>
    <IoIosArrowForward className={styles.arrow} />
  </div>
);

const Form = () => (
  <AliceCarousel disableDotsControls="false" renderPrevButton={prevbuttons} renderNextButton={nextbuttons}>
    {formats.map((format, index) => {
      return <Format key={index} img={format.img} heading={format.heading} title={format.title} />;
    })}
  </AliceCarousel>
);
export default Form;
