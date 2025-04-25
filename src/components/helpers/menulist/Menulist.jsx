import styles from './Menulist.module.css';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { NavLink } from 'react-router-dom';
import { categories } from '../../../utils/data';

export default function Example() {
  return (
    <div className={styles.menu}>
      <TabGroup>
        <TabList className={styles.menu_list}>
          {categories.map(({ name }) => (
            <Tab key={name} className={styles.name}>
              {name}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {categories.map(({ id, posts }) => (
            <TabPanel key={id}>
              <ul className={styles.cards}>
                {posts.map((post, index) => (
                  <NavLink to={`/drink/${id - 1}/${index}`} key={index}>
                    <div className={styles.card}>
                      <li key={post.id} className={styles.card_info}>
                        <img src={post.img} className={styles.img_coff}></img>
                        <h3 className={styles.namecoff}>{post.namecoff}</h3>
                        <ul className={styles.volumecoff} aria-hidden="true">
                          <li>{post.volumecoff}</li>
                        </ul>
                      </li>
                      <button className={styles.btn_order}>Заказать</button>
                    </div>
                  </NavLink>
                ))}
              </ul>
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </div>
  );
}
