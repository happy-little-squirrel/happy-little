import styles from './Menu.module.css'
import Menulist from '../helpers/menulist/Menulist'
import line01 from '/src/assets/images/franchise/line02.png'

export const Menu = () => {
  return (
    <section className={styles.page}>
      <div className={styles.cover}>
        <div className={styles.img_cover}>
          <div className={styles.cover_heading}>
            <div className={styles.cover_text}>
              <h1 className={styles.heading01}>Твой</h1>
              <h1 className={styles.heading02}>кофе</h1>
              <h1 className={styles.heading03}>у нас</h1>
            </div>
            <p className={styles.order}>Закажи заранее</p>
          </div>
          <div className={styles.overlay}></div>
        </div>
      </div>
      <section className={styles.content_decor}>
        <section className={styles.menu}>
          <img className={styles.line01} src={line01}></img>
          <div className={styles.menu_content}>
            <Menulist />
            <button className={styles.btn_menu}>В корзину</button>
          </div>
        </section>
      </section>
    </section>
  )
}

export default Menu
