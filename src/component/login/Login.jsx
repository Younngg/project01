import React, { useRef } from 'react';
import styles from './login.module.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Login = () => {
  const idRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    idRef.current.focus();
  });

  const loginSubmit = (event) => {
    event.preventDefault();
    const submitId = idRef.current.value;
    const submitPassword = passwordRef.current.value;
    if (!submitId || !submitPassword) {
      return alert('올바른 Id와 Password를 입력해주세요');
    } else {
      const submitLogin = { id: submitId, password: submitPassword };
      localStorage.setItem('login', JSON.stringify(submitLogin));
      if (localStorage.getItem('login') !== false) {
        navigate('/');
      }
    }
  };

  return (
    <form className={styles.loginForm}>
      <input
        ref={idRef}
        type='text'
        className={styles.inputId}
        placeholder='ID'
        required
      />
      <input
        ref={passwordRef}
        type='text'
        className={styles.inputPassword}
        placeholder='PASSWORD'
        required
      />
      <button onClick={loginSubmit} className={styles.loginBtn}>
        LOG IN
      </button>
    </form>
  );
};

export default Login;
