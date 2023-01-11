import './App.css';
import { Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage/>}></Route>
        <Route path='/cart' element={<CartPage/>}></Route>
      </Routes>
    </>
  );
}

export default App;
