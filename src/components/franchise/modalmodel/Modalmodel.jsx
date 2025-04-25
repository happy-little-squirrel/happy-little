import styles from './Modalmodel.module.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import modalmodel from '/src/assets/images/franchise/modalmodel.png';

export const Modalmodel = ({ active, setActive }) => {
  return (
    <div className={`${active ? styles.modal.active : styles.modal}`}>
      <div className={styles.modal_content}>
        <div className={styles.content}>
          <AiOutlineCloseCircle className={styles.close} onClick={() => setActive(false)} />
          <h2>Оставьте вашу заявку</h2>
          <div className={styles.format}>
            <img className={styles.img} src={modalmodel}></img>
            <div className={styles.model_form}>
              <p>Запрос финановой модели</p>
              <form className={styles.form}>
                <label className={styles.form_txt}>
                  Имя
                  <input className={styles.form_inp} type="text"></input>
                </label>
                <label className={styles.form_txt}>
                  Город
                  <input className={styles.form_inp} type="text"></input>
                </label>
                <label className={styles.form_txt}>
                  Телефон
                  <input className={styles.form_inp} type="text"></input>
                </label>
                <button className={styles.btn}>Отправить</button>
                <p className={styles.dangerous}>
                  Нажимая на кнопку, вы даёте разрешение на обработкой персональных данных и принимаете условия
                  пользовательского соглашения отправить
                </p>
              </form>
            </div>
          </div>
          <h3 className={styles.heading}>Мы обязательно свяжемся с вами</h3>
        </div>
      </div>
    </div>
  );
};

export default Modalmodel;
