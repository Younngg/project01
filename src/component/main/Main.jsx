import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Books from '../books/Books';
import styles from './main.module.css';
import MainBtn from '../mainBtn/mainBtn';

const Main = ({ bookData }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('login')) {
      navigate('/login');
    }
  });

  return (
    <div>
      <div className={styles.mainWrap}>
        <MainBtn />
        <Books bookData={bookData} />
      </div>
    </div>
  );
};

export default Main;
