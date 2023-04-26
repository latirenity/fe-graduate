import { Route, Routes } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Store } from "./components/store/Store";
import { Home } from "./components/home/Home";
import { GamePage } from "./components/gamePage/GamePage";
import { Login } from "./components/login/Login";
import { ThemeProvider } from "styled-components";
import { useAppSelector } from "./redux/store";
import { GlobalStyle } from "./globalStyle";
import { Cart } from "./components/cart/Cart";
import { Account } from "./components/account/Account";

function App() {
	const { theme } = useAppSelector((state) => state.settings);

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/account" element={<Account />} />
				<Route path="/store" element={<Store />} />
				<Route path="/store/:gameId" element={<GamePage />} />
				<Route path="/cart" element={<Cart />} />
			</Routes>
		</ThemeProvider>
	);
}

export default App;
