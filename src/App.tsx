import { Route, Routes } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Store } from './components/store/Store';
import { Home } from './components/home/Home';
import { GamePage } from './components/gamePage/GamePage';
import { Login } from './components/login/Login';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/store' element={<Store />} />
      <Route path='/store/:gameId' element={<GamePage />} />
    </Routes>
    </>
  );
}

export default App;
