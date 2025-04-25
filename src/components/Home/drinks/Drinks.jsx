import styles from './Drinks.module.css';
import { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import { coffees } from '../../../utils/data';

export const Drinks = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [offset, setoffset] = useState(0);
  const handlePrev = () => {
    setoffset((currentoffset) => {
      const newoffset = currentoffset + 100;
      return Math.min(newoffset, 0);
    });
  };
  const handleNext = () => {
    setoffset((currentoffset) => {
      const newoffset = currentoffset - 100;
      const maxoffset = -(55 * (coffees.length - 1));
      return Math.max(newoffset, maxoffset);
    });
  };
  const selectedCoffee = coffees[selectedIndex];
  return (
    <div className={styles.drinks}>
      <div className={styles.drink}>
        <div className={styles.drinks_column}>
          {selectedCoffee && (
            <div className={styles.description}>
              <p className={styles.title}>
                В нашей кофейне каждый напиток – это загадочный персонаж, созданный по мотивам вашего знака зодиака.
              </p>
              <div className={styles.example_description}>
                <div className={styles.example}>
                  <p className={styles.txt}>Например,</p>
                  <p className={styles.txt}>{selectedCoffee.name}</p>
                </div>
                <p>{selectedCoffee.descriptions}</p>
              </div>
              <button className={styles.btn_detail}>Подробнее</button>
            </div>
          )}
          {selectedCoffee && (
            <div className={styles.example_drink}>
              <img bigimg={selectedCoffee.bigimg} />
            </div>
          )}
        </div>
        {selectedCoffee && (
          <div className={styles.info}>
            <div className={styles.vp}>
              <h4 className={styles.volume}>{selectedCoffee.volume}</h4>/
              <h4 className={styles.price}>{selectedCoffee.price}</h4>
            </div>
            <p className={styles.ing}>{selectedCoffee.composition}</p>
          </div>
        )}
      </div>
      <div className={styles.slides}>
        <div className={styles.slider_drinks}>
          <div className={styles.btn}>
            <IoIosArrowBack className={styles.arrow} onClick={handlePrev} />
          </div>
          <div className={styles.slider}>
            {coffees.map((item, index) => {
              return (
                <div
                  key={index}
                  className={styles.slide}
                  style={{
                    transform: `translateX(${offset}px)`,
                  }}
                  onClick={() => setSelectedIndex(index)}
                >
                  <img className={styles.img} img={item.img} />
                </div>
              );
            })}
          </div>
          <div className={styles.btn}>
            <IoIosArrowForward
              className={styles.arrow}
              onClick={handleNext}
              // disabled={selectedIndex === null || selectedIndex === coffees.length - 1}
            />
          </div>
        </div>
        <button>Посмотреть меню</button>
      </div>
    </div>
  );
};

export default Drinks;
