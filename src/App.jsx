import './App.css';
import Login from './component/login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './component/main/Main';
import { useState } from 'react';

function App() {
  const [books, setBooks] = useState([]);

  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route
            path='/'
            element={<Main books={books} setBooks={setBooks} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
