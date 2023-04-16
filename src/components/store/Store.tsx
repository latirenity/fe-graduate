import { useEffect } from "react";
import { gamesActions } from "../../redux/games/gamesSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { C } from "../../styledComponent";
import { StoreItem } from "./storeItem/storeItem";
import { S } from "./Store.styled";

export const Store = () => {
  const dispatch = useAppDispatch();
  const { games, error } = useAppSelector((state) => state.games);

  useEffect(() => {
    dispatch(gamesActions.getGamesList());
  }, [dispatch]);

  return (
    <C.wrapper>
      <S.container>
        {error && "Error"}
        {games.map((item) => (
          <StoreItem key={item.id} data={item} />
        ))}
      </S.container>
    </C.wrapper>
  );
};
