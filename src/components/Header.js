import React, { useState } from 'react';
import styles from '../css/Header.module.css';
import { Icon } from '@iconify/react';

function Header() {

  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.logo}>COTEIS</div>
        <ul className={styles["navList"]}>
          <li className={styles["navItem"]}>
            글쓰기
          </li>
          <li className={styles["navItem"]}>
            게시판
          </li>
          <Icon icon="ph:user" className={styles["icon"]}/>
        </ul>
      </nav>
    </header>
  );
}
  

export default Header;