import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { C } from "../../styledComponent";
import { S } from "./GamePage.styled";
import { useNavigate, useParams } from "react-router-dom";
import { gameInfoActions } from "../../redux/store/gameInfoSlice";
import { cartActions } from "../../redux/cart/cartSlice";
import { libraryActions } from "../../redux/library/librarySlice";
import { SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/navigation";
import "swiper/css";

export const GamePage = () => {
	const dispatch = useAppDispatch();
	const { language } = useAppSelector((state) => state.settings);
	const { gamesListFromLibrary } = useAppSelector((state) => state.library);
	const { gamesListFromCart } = useAppSelector((state) => state.cart);
	const { isAuthorized } = useAppSelector((state) => state.auth);
	const navigate = useNavigate();

	const {
		id,
		name,
		description,
		background_image,
		short_screenshots,
		developer,
		released,
		rating,
	} = useAppSelector((state) => state.gameInfo.gameInfo);

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
					{!isAuthorized ? null : checkLibrary ? (
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
					<S.Swiper
						spaceBetween={50}
						slidesPerView={1}
						navigation
						scrollbar={{ draggable: true }}
						modules={[Navigation, Pagination, Scrollbar, A11y]}
					>
						{short_screenshots &&
							short_screenshots.map((item) => (
								<SwiperSlide key={item.id}>
									<S.swiperImg src={item.image} />
								</SwiperSlide>
							))}
					</S.Swiper>

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
