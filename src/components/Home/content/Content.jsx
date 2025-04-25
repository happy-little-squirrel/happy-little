import styles from './Content.module.css';
import coff01 from '/src/assets/images/home/coff01.png';
import coff02 from '/src/assets/images/home/coff02.png';
import coff03 from '/src/assets/images/home/coff03.png';
import coff04 from '/src/assets/images/home/coff04.png';
import coff05 from '/src/assets/images/home/coff05.png';
import beans from '/src/assets/images/home/beans.png';
import blob01 from '/src/assets/images/home/blob01.png';
import blob02 from '/src/assets/images/home/blob02.png';
import Drinks from '../drinks/Drinks';
import line01 from '/src/assets/images/home/line01.png';
import line02 from '/src/assets/images/home/line02.png';
import line03 from '/src/assets/images/home/line03.png';
import List from '../../helpers/list/List';
import Slider from '../slider/Slider';
import React, { useState } from 'react';
import Modal from './modal/Modal';
import { NavLink } from 'react-router-dom';
import cloud01 from '/src/assets/images/home/cloud01.png';
import cloud02 from '/src/assets/images/home/cloud02.png';
import coffee from '/src/assets/images/home/coffee.png';
import vector01 from '/src/assets/images/home/vector.png';
import vector02 from '/src/assets/images/home/vector_two.png';
import { news } from '../../../utils/data';

export const Content = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <section className={styles.page}>
      <section className={styles.cover}>
        <img className={styles.cloud01} src={cloud01}></img>
        <img className={styles.cloud02} src={cloud02}></img>
        <div className={styles.cover_content}>
          <div className={styles.substrates}>
            <figure className={styles.substrate}></figure>
            <img className={styles.coffee} src={coffee}></img>
          </div>
          <div className={styles.txt}>
            <div className={styles.cover_txt_top}>
              <h1 className={styles.cover_txt_white}>Ha</h1>
              <h1 className={styles.cover_txt_brown}>ppy</h1>
            </div>
            <h1>Little</h1>
          </div>
        </div>
      </section>
      <section className={''}>
        <img className={styles.line01} src={line01}></img>
        <section className={styles.happy}>
          <img className={styles.line02} src={line02}></img>
          <img className={styles.vector01} src={vector01}></img>
          <div className={styles.content}>
            <h2>“HAPPY LITTLE” - Маленькое счастье - чашечка кофе</h2>
            <Slider />
          </div>
        </section>
        <section className={''}>
          <Modal active={modalActive} setActive={setModalActive} />
          <img className={styles.beans} src={beans}></img>
          <img className={styles.vector02} src={vector02}></img>
          <div className={styles.content}>
            <div className={styles.about_info}>
              <h2 className={styles.about_heading}>Мы — проводники в мир вкусов, ароматов и звезд</h2>
              <p>
                Каждый знак зодиака уникален, и мы создаем кофе, который отражает его энергию, характер и настроение. От
                насыщенных и смелых купажей для огненных Овнов до нежных и утонченных ноток для воздушных Весов — наш
                кофе подобран так, чтобы подчеркнуть вашу индивидуальность и стать частью вашего дня.
              </p>
              <button className={styles.btn} onClick={() => setModalActive(true)}>
                Наши кофейни
              </button>
            </div>
            <div className={styles.gallery}>
              <img className={styles.coff01} src={coff01}></img>
              <img className={styles.coff02} src={coff02}></img>
              <img className={styles.coff03} src={coff03}></img>
              <img className={styles.coff04} src={coff04}></img>
              <img className={styles.coff05} src={coff05}></img>
            </div>
            <p className={styles.heading}>По знаку зодиака. По вкусу. По душе....</p>
            <img className={styles.line03} src={line03}></img>
          </div>
        </section>
        <section className={styles.drinks}>
          <img className={styles.blob01} src={blob01}></img>
          <img className={styles.blob02} src={blob02}></img>
          <div className={styles.drinks_content}>
            <h2 className={styles.drinks_heading}>
              “HAPPY LITTLE” - не просто кофейня, а гастрономическое путешествие по созвездиям.
            </h2>
            <Drinks />
          </div>
        </section>
        <section className={styles.news}>
          <div className={styles.news_content}>
            <h2 className={styles.heading}>Последние новости</h2>
            <div className={styles.news_column}>
              {news.map((list, index) => {
                return <List key={index} heading={list.heading} img={list.img} />;
              })}
            </div>
            <NavLink className={styles.btn} to="https://vk.com/">
              Подробнее в нашем сообществе ВКонтакте
            </NavLink>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Content;
