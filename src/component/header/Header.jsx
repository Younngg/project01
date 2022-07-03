import React from 'react';
import SearchBar from '../searchBar/SearchBar';
import styles from './header.module.css';

const Header = () => {
  const logoutFnc = () => {
    localStorage.clear();
    window.location.replace('/login');
  };

  return (
    <div
      className={localStorage.getItem('login') ? styles.gnb : styles.gnbBlind}
    >
      <div className={styles.wrap}>
        <h1>Logo</h1>
        <SearchBar />
        <div className={styles.gnbRight}>
          <div className={styles.profileImgBox}></div>
          <button onClick={logoutFnc} className={styles.logoutBtn}>
            LOGOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
