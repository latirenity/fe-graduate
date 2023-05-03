import { S } from "./Home.styled";
import { C } from "../../styledComponent";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/store";

export const Home = () => {
	const navigate = useNavigate();
	const { isAuthorized } = useAppSelector((state) => state.auth);
	const { language } = useAppSelector((state) => state.settings);

	return (
		<C.wrapper>
			<S.title>{language.home.greeting}</S.title>
			<S.container>
				{!isAuthorized && (
					<>
						<S.button onClick={() => navigate("/login")}>
							{language.home.loginButton}
						</S.button>
						<S.button onClick={() => navigate("/store")}>
							{language.home.guestButton}
						</S.button>
					</>
				)}
			</S.container>
		</C.wrapper>
	);
};
