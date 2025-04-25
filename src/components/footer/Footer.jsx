import styles from './Footer.module.css'
import { NavLink } from 'react-router-dom'
import { PiCoffeeBeanFill } from "react-icons/pi";
import { FaTelegramPlane } from "react-icons/fa";
import { FaVk } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.foot}>
                <NavLink className={styles.logo} to='/'>
                    <PiCoffeeBeanFill className={styles.logo01} />
                    <PiCoffeeBeanFill className={styles.logo02} />
                    <PiCoffeeBeanFill className={styles.logo03} />
                    <PiCoffeeBeanFill className={styles.logo04}/>
                </NavLink>
                <ul className={styles.menu_links_list}>
                    <NavLink to='/' className={styles.nav_link}>
                    Главная
                    </NavLink>
                    <NavLink to='/About' className={styles.nav_link}>
                    О нас
                    </NavLink>
                    <NavLink to='/Menu' className={styles.nav_link}>
                    Меню
                    </NavLink>
                    <NavLink to='/Franchise' className={styles.nav_link}>
                    Франшиза
                    </NavLink>
                    <NavLink to='/Contacts' className={styles.nav_link}>
                    Контакты
                    </NavLink>
                </ul>
                 <div className={styles.message}>
                    <FaTelegramPlane className={styles.massage01} />
                    <FaVk className={styles.massage01} />
                    <FaWhatsapp className={styles.massage01} />
                </div>
                <a className={styles.barcode}>Happy little</a>
            </div>
        </footer>
    )
  }
  
  export default Footer