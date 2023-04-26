import { cartActions } from "../../../redux/cart/cartSlice";
import { libraryActions } from "../../../redux/library/librarySlice";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { gamesListActions } from "../../../redux/store/gamesListSlice";
import { GameInfoFromCartType } from "../../../types/types";
import { S } from "./CartItem.styled";

interface CartItemProps {
  data: GameInfoFromCartType;
}

export const CartItem = ({ data }: CartItemProps) => {
  const dispatch = useAppDispatch();
  const { gamesList } = useAppSelector((state) => state.gamesList);
  const { language } = useAppSelector((state) => state.settings);

  const deleteItem = async (event: React.MouseEvent) => {
    event.preventDefault();
    await dispatch(cartActions.deleteGameFromCart(data.id));
    await dispatch(cartActions.getGamesListFromCart());
  };

  const buyingItem = async (event: React.MouseEvent) => {
    event.preventDefault();
    await dispatch(gamesListActions.getGamesList({}));
    const selectGame = await gamesList.find((item) => item.id === data.id);
    await dispatch(libraryActions.setGameToLibrary(selectGame));
    await dispatch(cartActions.deleteGameFromCart(data.id));
    await dispatch(cartActions.getGamesListFromCart());
  };

  return (
    <S.container>
      <S.imageContainer>
        <S.image src={`${data.background_image}`} />
      </S.imageContainer>
      <S.itemName>{data.name}</S.itemName>
      <S.itemGetButton onClick={buyingItem}>
        {language.cart.getButton}
      </S.itemGetButton>
      <S.itemDeleteButton onClick={deleteItem}>
        {language.cart.deleteButton}
      </S.itemDeleteButton>
    </S.container>
  );
};
