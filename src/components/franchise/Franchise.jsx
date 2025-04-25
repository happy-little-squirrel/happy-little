import styles from './Franchise.module.css';
import blob from '/src/assets/images/franchise/blob.png';
import video_img from '/src/assets/images/franchise/video.png';
import left from '/src/assets/images/franchise/left.png';
import right from '/src/assets/images/franchise/right.png';
import line01 from '/src/assets/images/franchise/line01.png';
import line02 from '/src/assets/images/franchise/line02.png';
import line03 from '/src/assets/images/franchise/line03.png';
import Block from '../helpers/block/Block';
import Format from './format/Format';
import React, { useState } from 'react';
import ModalOpen from './modalopen/ModalOpen';
import Modalmodel from './modalmodel/Modalmodel';
import St from './statistics/Statistics';
import { help, mainStatistics } from '../../utils/data';

export const Franchise = () => {
  const [modalActive, setModalActive] = useState(false);
  const [modelActive, setModelActive] = useState(false);
  return (
    <section className={styles.page}>
      <section className={styles.cover}>
        <h1 className={styles.cover_heading}>Франшиза кофейни</h1>
        <h2 className={styles.cover_text}>Откройте свою кофейню с прибылью от 290 000 рублей в месяцев</h2>
      </section>
      <section className={styles.content_decor}>
        <img className={styles.line01} src={line01}></img>
        <section className={styles.video}>
          <img className={styles.blob} src={blob}></img>
          <div className={styles.video_content}>
            <div className={styles.statistics}>
              {mainStatistics.map((st, index) => {
                return <St key={index} number={st.number} info={st.info} />;
              })}
            </div>
            <img className={styles.video_img} src={video_img}></img>
          </div>
        </section>
        <section className={styles.section}>
          <ModalOpen active={modalActive} setActive={setModalActive} />
          <img className={styles.line02} src={line02}></img>
          <img className={styles.left} src={left}></img>
          <img className={styles.right} src={right}></img>
          <div className={styles.help_content}>
            <h2 className={styles.help_heading}>Поможем во всех вопросах</h2>
            <div className={styles.help_column}>
              {help.map((block, index) => {
                return <Block key={index} img={block.img} heading={block.heading} title={block.title} />;
              })}
            </div>
            <div className={styles.offer}>
              <h2>Только для новых городов</h2>
              <p>Станьте первым партнёром HAPPY LITTLE в вашем городе и займите лидирующую позицию на рынке!</p>
              <button onClick={() => setModalActive(true)}>Открыть кофейню</button>
            </div>
          </div>
        </section>
        <section className={styles.section}>
          <Modalmodel active={modelActive} setActive={setModelActive} />
          <img className={styles.blob01} src={blob}></img>
          <div className={styles.formats_content}>
            <img className={styles.line03} src={line03}></img>
            <h2>Выбери подходящий формат</h2>
            <Format />
            <button onClick={() => setModelActive(true)}>Запросить финансовую модель</button>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Franchise;
