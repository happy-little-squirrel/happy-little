import day from '/src/assets/images/header/day.svg'
import daynight from '/src/assets/images/header/daynight.svg'
import night from '/src/assets/images/header/night.svg'
import styles from './Header.module.css'
import decor from '/src/assets/images/dropdownmenu/decor.png'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { RemoveScroll } from 'react-remove-scroll'
import { IoIosMenu } from "react-icons/io";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { PiCoffeeBeanFill } from "react-icons/pi";
import { FaTelegramPlane } from "react-icons/fa";
import { FaVk } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export const Header = () => {
    const [modalActive, setModalActive] = useState(false)
        return (
            <header className={`${styles.header} ${modalActive && styles.menuBlock}`}>
                <nav className={styles.navigation}>
                    <NavLink className={styles.logo} to='/'>
                        <PiCoffeeBeanFill className={`${styles.logo01} ${modalActive && styles.logoMenu}`} />
                        <PiCoffeeBeanFill className={`${styles.logo02} ${modalActive && styles.logoMenu}`} />
                        <PiCoffeeBeanFill className={`${styles.logo03} ${modalActive && styles.logoMenu}`} />
                        <PiCoffeeBeanFill className={`${styles.logo04} ${modalActive && styles.logoMenu}`} />
                    </NavLink>
                    <div className={`${styles.themes} ${modalActive && styles.themeMenu}`}>
                        <button><img className={styles.theme} src={day}/></button>
                        <button><img className={styles.theme} src={daynight}></img></button>
                        <button><img className={styles.theme} src={night}/></button>
                    </div>
                    <li className={`${styles.language} ${modalActive && styles.languageMenu}`}> 
                        <button className={`${styles.ru} ${modalActive && styles.ruMenu}`}>ru</button> 
                        /
                        <button className={`${styles.en} ${modalActive && styles.enMenu}`}>en</button> 
                    </li>
                    <button onClick={() => setModalActive(!modalActive)}>{modalActive ? <AiOutlineCloseCircle className={styles.close} /> : <IoIosMenu className={styles.menu} />}</button>
                </nav>
                {modalActive &&
                    <RemoveScroll>
                        <section className={`${styles.dropdownmenu}`}>
                            <div className={styles.drop_content}>
                                <ul className={styles.menu_links_list}>
                                    <NavLink to='/' className={styles.nav_link} onClick={() => setModalActive(false)}>
                                        Главная
                                    </NavLink>
                                    <NavLink to='/About' className={styles.nav_link} onClick={() => setModalActive(false)}>
                                        О нас
                                    </NavLink>
                                    <NavLink to='/Menu' className={styles.nav_link} onClick={() => setModalActive(false)}>
                                        Меню
                                    </NavLink>
                                    <NavLink to='/Franchise' className={styles.nav_link} onClick={() => setModalActive(false)}>
                                        Франшиза
                                    </NavLink>
                                    <NavLink to='/Contacts' className={styles.nav_link} onClick={() => setModalActive(false)}>
                                        Контакты
                                    </NavLink>
                                </ul>
                                <div className={styles.autorization}>
                                    <button className={styles.validation}>Регистрация</button>
                                        /
                                    <button className={styles.entrance}>Войти</button>
                                </div>
                                <div className={styles.messages}>
                                    <FaTelegramPlane className={styles.massage} />
                                    <FaVk className={styles.massage} />
                                    <FaWhatsapp className={styles.massage} />
                                </div>
                                <img className={styles.decor} src={decor}></img>
                                <a className={styles.barcode}>Happy little</a>
                            </div>
                        </section>
                    </RemoveScroll>
                }
            </header>
        )
}

export default Header
