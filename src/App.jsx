import './App.css';
import Login from './component/login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './component/main/Main';
import { useState } from 'react';
import CreateBooks from './component/createBooks/CreateBooks';
import data from './data/bookData.json';
import Header from './component/header/Header';
import Detail from './component/detail/Detail';

function App() {
  const bookData = data.books;

  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Main bookData={bookData} />} />
          <Route path='/book/:book' element={<Detail />} />
          <Route
            path='/createBooks'
            element={<CreateBooks bookData={bookData} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
