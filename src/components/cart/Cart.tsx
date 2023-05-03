import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { C } from "../../styledComponent";
import { S } from "./Cart.styled";
import { getGamesListFromCart } from "../../redux/cart/cartSlice";
import { CartItem } from "./cartItem/CartItem";

export const Cart = () => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(getGamesListFromCart());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const { language } = useAppSelector((state) => state.settings);

	const { gamesListFromCart } = useAppSelector((state) => state.cart);

	return (
		<C.wrapper>
			<S.title>{language.cart.cartTitle}</S.title>
			<S.container>
				{gamesListFromCart.length > 0 ? (
					gamesListFromCart.map((item) => (
						<CartItem key={item.id} data={item} />
					))
				) : (
					<S.cartEmptyText>{language.cart.emptyCart}</S.cartEmptyText>
				)}
			</S.container>
		</C.wrapper>
	);
};
