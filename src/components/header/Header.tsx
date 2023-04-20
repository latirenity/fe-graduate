import { settingsActions } from "../../redux/settings/settingsSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { C } from "../../styledComponent";
import { S } from "./Header.styled";

export const Header = () => {
	const dispatch = useAppDispatch();
	const { language } = useAppSelector((state) => state.settings);

	return (
		<S.globalHeader>
			<C.wrapper>
				<S.header>
					<S.logoLink to={"/"}>
						<S.logo src="https://store.cloudflare.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016" />
					</S.logoLink>

					<S.navigateContainer>
						<S.navigateLink to={"/store"}>
							{language.header.links.store}
						</S.navigateLink>
						<S.navigateLink to={"/about"}>
							{language.header.links.aboutSteam}
						</S.navigateLink>
					</S.navigateContainer>

					<S.optionContainer>
						<S.optionLink to={"/account"}>
							<S.optionIconAccount />
						</S.optionLink>

						<S.optionLink to={"/cart"}>
							<S.optionIconCart />
						</S.optionLink>

						<S.separation />

						<S.optionButton
							onClick={() => dispatch(settingsActions.changeLanguage())}
						>
							<S.optionIconLanguage />
						</S.optionButton>

						<S.optionButton
							onClick={() => dispatch(settingsActions.changeTheme())}
						>
							<S.optionIconTheme />
						</S.optionButton>
					</S.optionContainer>
				</S.header>
			</C.wrapper>
		</S.globalHeader>
	);
};
