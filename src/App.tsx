import { Route, Routes } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Store } from "./components/store/Store";
import { Home } from "./components/home/Home";
import { GamePage } from "./components/gamePage/GamePage";
import { Login } from "./components/login/Login";
import { ThemeProvider } from "styled-components";
import { useAppSelector } from "./redux/store";

function App() {
  const { theme } = useAppSelector((state) => state.settings);
  console.log(theme)

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/store" element={<Store />} />
        <Route path="/store/:gameId" element={<GamePage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
