import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { C } from "../../styledComponent";
import { S } from "./GamePage.styled";
import { useNavigate, useParams } from "react-router-dom";
import { gameInfoActions } from "../../redux/store/gameInfoSlice";
import { cartActions } from "../../redux/cart/cartSlice";
import { libraryActions } from "../../redux/library/librarySlice";

export const GamePage = () => {
	const dispatch = useAppDispatch();
	const { language } = useAppSelector((state) => state.settings);
	const { gamesListFromLibrary } = useAppSelector((state) => state.library);
	const { gamesListFromCart } = useAppSelector((state) => state.cart);
	const navigate = useNavigate();

	const {
		id,
		name,
		description,
		background_image,
		short_screenshort,
		developer,
		released,
		rating,
	} = useAppSelector((state) => state.gameInfo.gamesInfo);

	const { gameId } = useParams();
	const gameIdToNumber = +(gameId ?? 0);

	useEffect(() => {
		dispatch(gameInfoActions.getGame(gameIdToNumber));
		dispatch(cartActions.getGamesListFromCart());
		dispatch(libraryActions.getGamesListFromLibrary({}));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	let checkLibrary = gamesListFromLibrary.find(
		(item) => item.id === gameIdToNumber
	);
	let checkCart = gamesListFromCart.find((item) => item.id === gameIdToNumber);

	const handleCartButton = async () => {
		await dispatch(cartActions.setGameToCart({ id, name, background_image }));
		await dispatch(cartActions.getGamesListFromCart());
		checkCart = gamesListFromCart.find((item) => item.id === gameIdToNumber);
	};

	return (
		<S.container>
			<C.wrapper>
				<S.titleContainer>
					<S.title>{name}</S.title>
					{checkLibrary ? (
						<S.cartButton onClick={() => navigate("/account")}>
							{language.gamePage.inLibraryButton}
						</S.cartButton>
					) : checkCart ? (
						<S.cartButton onClick={() => navigate("/cart")}>
							{language.gamePage.inCartButton}
						</S.cartButton>
					) : (
						<S.cartButton onClick={handleCartButton}>
							{language.gamePage.addToCartButton}
						</S.cartButton>
					)}
				</S.titleContainer>

				<S.contentContainer>
					<S.swiperContainer>SLIDER</S.swiperContainer>

					<S.infoContainer>
						<S.infoImageContainer>
							<S.infoImage src={background_image} />
						</S.infoImageContainer>
						<S.infoDescription>{description}</S.infoDescription>
						<S.infoProperties>
							{language.gamePage.developer}: <S.span>{developer}</S.span>
						</S.infoProperties>
						<S.infoProperties>
							{language.gamePage.releaseDate}: <S.span>{released}</S.span>
						</S.infoProperties>
						<S.infoProperties>
							{language.gamePage.overallRating}: <S.span>{rating} / 5</S.span>
						</S.infoProperties>
					</S.infoContainer>
				</S.contentContainer>
			</C.wrapper>
		</S.container>
	);
};
