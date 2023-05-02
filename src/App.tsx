import { Route, Routes } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Store } from "./components/store/Store";
import { Home } from "./components/home/Home";
import { GamePage } from "./components/gamePage/GamePage";
import { Login } from "./components/login/Login";
import { ThemeProvider } from "styled-components";
import { useAppDispatch, useAppSelector } from "./redux/store";
import { GlobalStyle } from "./globalStyle";
import { Cart } from "./components/cart/Cart";
import { Account } from "./components/account/Account";
import { verifyToken } from "./redux/auth/authSlice";
import { useEffect } from "react";

function App() {
	const { theme } = useAppSelector((state) => state.settings);
	const { isAuthorized } = useAppSelector((state) => state.auth);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (isAuthorized) {
			dispatch(verifyToken);
		}
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				{!isAuthorized && <Route path="/login" element={<Login />} />}
				{isAuthorized && (
					<>
						<Route path="/account" element={<Account />} />
						<Route path="/cart" element={<Cart />} />
					</>
				)}

				<Route path="/store" element={<Store />} />
				<Route path="/store/:gameId" element={<GamePage />} />
			</Routes>
		</ThemeProvider>
	);
}

export default App;
