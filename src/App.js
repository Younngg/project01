import './App.css';
import Login from './component/login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './component/main/Main';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Main />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
