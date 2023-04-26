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
  }, []);

  const { gamesListFromCart } = useAppSelector(
    (state) => state.cart
  );

  return (
    <C.wrapper>
      <S.container>
        {gamesListFromCart.map((item) => (
          <CartItem key={item.id} data={item} />
        ))}
      </S.container>
    </C.wrapper>
  );
};
