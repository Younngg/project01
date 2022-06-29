import React from 'react';
import styles from './searchBar.module.css';
import { GoSearch } from 'react-icons/go';

const SearchBar = () => {
  return (
    <div className={styles.searchBox}>
      <input type='text' placeholder='검색' id='searchInput' />
      <button className={styles.searchBtn}>
        <GoSearch />
      </button>
    </div>
  );
};

export default SearchBar;
