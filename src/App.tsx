import { Route, Routes } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Store } from './components/store/Store';
import { Home } from './components/home/Home';
import { GamePage } from './components/gamePage/GamePage';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='store' element={<Store />} />
      <Route path='store/:gameId' element={<GamePage />} />
    </Routes>
    </>
  );
}

export default App;
