import styles from './Contacts.module.css';
import vector from '/src/assets/images/contacts/vector.png';
import phone from '/src/assets/images/contacts/phone.png';
import connection_img from '/src/assets/images/contacts/connection.png';
import beans from '/src/assets/images/contacts/beans.png';
import vector_two from '/src/assets/images/contacts/vector_two.png';
import blob01 from '/src/assets/images/contacts/blob01.png';
import blob02 from '/src/assets/images/contacts/blob02.png';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaVk } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import line01 from '/src/assets/images/contacts/line01.png';
import line02 from '/src/assets/images/contacts/line02.png';
import line03 from '/src/assets/images/contacts/line03.png';
import List from '../helpers/list/List';
import ModalOpen from '../franchise/modalopen/ModalOpen';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { coffeehouse } from '../../utils/data';

export const Contacts = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <section className={styles.page}>
      <section className={styles.cover}>
        <h1 className={styles.cover_heading}>Ты знаешь где искать</h1>
      </section>
      <section className={styles.content_decor}>
        <img className={styles.line01} src={line01}></img>
        <section className={styles.connection}>
          <ModalOpen active={modalActive} setActive={setModalActive} />
          <img className={styles.vector} src={vector}></img>
          <div className={styles.connection_content}>
            <div className={styles.message}>
              <FaTelegramPlane className={styles.massage01} />
              <FaVk className={styles.massage01} />
              <FaWhatsapp className={styles.massage01} />
            </div>
            <div className={styles.connection_head}>
              <h2 className={styles.text}>Центральный офис: г. Москва, ул. Новгородняя, д.22</h2>
              <p className={styles.text}>По будням: 9:00–17:30</p>
            </div>
            <div className={styles.format}>
              <div className={styles.format_connection}>
                <h2 className={styles.heading}>
                  <h2>Телефон и почта для связи с нами</h2>
                </h2>
                <div className={styles.connection_phone}>
                  <img className={styles.phone} src={phone}></img>
                  <a href="tel:+7(495)136-55-12">8(495)136-55-12</a>
                </div>
                <p className={styles.cooperation}>
                  По вопросам сотрудничества: in@mail.ru. Отдел закупки: zakupka@google.com. Отдел B2B: b2b@yandex.ru.
                  Отдел кадров: hr@inbox.com
                </p>
              </div>
              <img className={styles.connection_img} src={connection_img}></img>
            </div>
            <button className={styles.btn} onClick={() => setModalActive(true)}>
              <h2>Открыть кофейню</h2>
            </button>
          </div>
        </section>
        <section className={styles.ours_coffeehouse}>
          <img className={styles.line02} src={line02}></img>
          <img className={styles.beans} src={beans}></img>
          <img className={styles.vector_two} src={vector_two}></img>
          <div className={styles.ours_content}>
            <h2>Наши кофейни</h2>
            <div className={styles.ours_column}>
              {coffeehouse.map((list, index) => {
                return <List key={index} heading={list.heading} img={list.img} />;
              })}
            </div>
            <NavLink
              className={styles.btn}
              to="https://yandex.ru/maps/213/moscow/search/кофейня/?ll=37.619303%2C55.759910&sll=37.620948%2C55.770643&source=serp_navig&sspn=1.145325%2C0.411840&z=13"
            >
              <button>Открыть в картах</button>
            </NavLink>
          </div>
        </section>
        <section className={styles.director}>
          <img className={styles.blob01} src={blob01}></img>
          <img className={styles.blob02} src={blob02}></img>
          <div className={styles.director_content}>
            <img className={styles.line03} src={line03}></img>
            <h2>Написать руководителю</h2>
            <div className={styles.format_director}>
              <div className={styles.director_img}>
                <h3 className={styles.director_name}>Миронов Анатолий Олегович</h3>
                <p className={styles.director_text}>Основатель сети кофеен HAPPY LITTLE</p>
              </div>
              <div className={styles.director_form}>
                <h3 className={styles.form_heading}>
                  <p>Вы можете написать руководству Ваши пожелания и предложения</p>
                </h3>
                <form className={styles.form}>
                  <label className={styles.form_text}>
                    Имя
                    <input className={styles.form_inp} type="text"></input>
                  </label>
                  <label className={styles.form_text}>
                    Телефон
                    <input className={styles.form_inp} type="text"></input>
                  </label>
                  <label className={styles.comment}>
                    Ваш комментарий
                    <input className={styles.form_comm} type="text"></input>
                  </label>
                  <button className={styles.btn_submit}>Отправить</button>
                  <p className={styles.dangerous}>
                    Нажимая на кнопку, вы даёте разрешение на обработкой персональных данных и принимаете условия
                    пользовательского соглашения отправить
                  </p>
                </form>
              </div>
            </div>
            <p className={styles.text}> По знаку зодиака. По вкусу. По душе....</p>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Contacts;
