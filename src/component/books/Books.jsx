import React from 'react';
import styles from './books.module.css';
import { Link } from 'react-router-dom';

const Books = ({ bookData }) => {
  return (
    <ul>
      {bookData.map((book) => {
        return (
          <li className={styles.bookBox} key={book.id}>
            <Link to={`/book/${book.id}`}>
              <div className={styles.bookCoverImg}></div>
              <div className={styles.bookInfoBox}>
                <p className={styles.bookTitle}>{book.title}</p>
                <p className={styles.bookAuthor}>{book.author}</p>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Books;
