import React from 'react';
import styles from './books.module.css';

const Books = ({ books }) => {
  return (
    <ul>
      <li className={styles.bookBox}>
        <div className={styles.bookCoverImg}></div>
        <div className={styles.bookInfoBox}>
          <p className={styles.bookTitle}>제목</p>
          <p className={styles.bookAuthor}>작가</p>
        </div>
      </li>
      <li className={styles.bookBox}>
        <div className={styles.bookCoverImg}></div>
        <div className={styles.bookInfoBox}>
          <p className={styles.bookTitle}>제목</p>
          <p className={styles.bookAuthor}>작가</p>
        </div>
      </li>
      <li className={styles.bookBox}>
        <div className={styles.bookCoverImg}></div>
        <div className={styles.bookInfoBox}>
          <p className={styles.bookTitle}>제목</p>
          <p className={styles.bookAuthor}>작가</p>
        </div>
      </li>
      <li className={styles.bookBox}>
        <div className={styles.bookCoverImg}></div>
        <div className={styles.bookInfoBox}>
          <p className={styles.bookTitle}>제목</p>
          <p className={styles.bookAuthor}>작가</p>
        </div>
      </li>
      <li className={styles.bookBox}>
        <div className={styles.bookCoverImg}></div>
        <div className={styles.bookInfoBox}>
          <p className={styles.bookTitle}>제목</p>
          <p className={styles.bookAuthor}>작가</p>
        </div>
      </li>
      <li className={styles.bookBox}>
        <div className={styles.bookCoverImg}></div>
        <div className={styles.bookInfoBox}>
          <p className={styles.bookTitle}>제목</p>
          <p className={styles.bookAuthor}>작가</p>
        </div>
      </li>
      <li className={styles.bookBox}>
        <div className={styles.bookCoverImg}></div>
        <div className={styles.bookInfoBox}>
          <p className={styles.bookTitle}>제목</p>
          <p className={styles.bookAuthor}>작가</p>
        </div>
      </li>
    </ul>
  );
};

export default Books;
