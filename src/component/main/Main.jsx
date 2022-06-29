import React, { useEffect } from 'react';
import Header from '../header/Header';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('login')) {
      navigate('/login');
    }
  });

  return (
    <div>
      <Header />
    </div>
  );
};

export default Main;
