import { Route, Routes } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Store } from "./components/store/Store";
import { Home } from "./components/home/Home";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="store" element={<Store />} />
			</Routes>
		</>
	);
}

export default App;
