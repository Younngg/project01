import React from 'react';
import styles from './login.module.css';

const Login = () => {
  return (
    <form className={styles.loginForm}>
      <input
        type='text'
        name=''
        className={styles.inputId}
        placeholder='ID'
        required
      />
      <input
        type='text'
        name=''
        className={styles.inputPassword}
        placeholder='PASSWORD'
        required
      />
      <button className={styles.loginBtn}>LOG IN</button>
    </form>
  );
};

export default Login;
