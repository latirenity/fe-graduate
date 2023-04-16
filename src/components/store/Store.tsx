import { useEffect } from "react";
import { gamesListActions } from "../../redux/gamesList/gamesListSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { C } from "../../styledComponent";
import { S } from "./Store.styled";
import { StoreItem } from "./storeItem/StoreItem";

export const Store = () => {
  const dispatch = useAppDispatch();
  const { gamesList, error} = useAppSelector( (state) => state.gamesList);

  useEffect(() => {
    dispatch(gamesListActions.getGamesList());
  // eslint-disable-next-line react-hooks/exhaustive-deps  
  }, []);

  return (
    <C.wrapper>
      <S.container>
        {error && "Error"}
        {gamesList.map((item) => (
          <StoreItem key={item.id} dataItem={item} />
        ))}
      </S.container>
    </C.wrapper>
  );
};
