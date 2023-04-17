import { useEffect, useState } from "react";
import { gamesListActions } from "../../redux/gamesList/gamesListSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { C } from "../../styledComponent";
import { S } from "./Store.styled";
import { StoreItem } from "./storeItem/StoreItem";
import { StoreOptions } from "./storeOptions/StoreOptions";
import { StorePagination } from "./storePagination/storePagination";

export const Store = () => {

  const [sortItem, setSortItem] = useState("id");
  const [sortDirection, setSortDirection] = useState("asc");
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState("")

  const dispatch = useAppDispatch();
  const { gamesList, error} = useAppSelector( (state) => state.gamesList);

  useEffect(() => {
    dispatch(gamesListActions.getGamesList({
      sortItem,
      sortDirection,
      page,
      limit: 6,
      query
    }));
  // eslint-disable-next-line react-hooks/exhaustive-deps  
  }, [sortItem]);

  return (
    <C.wrapper>
      <StoreOptions setSortItem={setSortItem} setSortDirection={setSortDirection} />
      <S.storeContainer>
        {error && "Error"}
        {gamesList.map((item) => (
          <StoreItem key={item.id} dataItem={item} />
        ))}
      </S.storeContainer>
      <StorePagination />
    </C.wrapper>
  );
};
