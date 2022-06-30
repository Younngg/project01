import React, { useEffect } from 'react';
import Header from '../header/Header';
import { useNavigate } from 'react-router-dom';
import CreateBooks from '../createBooks/CreateBooks';
import Books from '../books/Books';
import styles from './main.module.css';

const Main = ({ books, setBooks }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('login')) {
      navigate('/login');
    }
  });

  return (
    <div>
      <Header />
      <div className={styles.mainWrap}>
        <CreateBooks setBooks={setBooks} />
        <Books books={books} />
      </div>
    </div>
  );
};

export default Main;
