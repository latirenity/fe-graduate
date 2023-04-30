import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { S } from "./StoreOptions.styled";
import { useAppSelector } from "../../../redux/store";

interface PropsType {
  setSortItem: Dispatch<SetStateAction<string>>;
  setSortDirection: Dispatch<SetStateAction<string>>;
  setQuery: Dispatch<SetStateAction<string>>;
}

export const StoreOptions = ({
  setSortItem,
  setSortDirection,
  setQuery,
}: PropsType) => {
  const { language } = useAppSelector((state) => state.settings);

  const [isActiveRatingSort, setIsActiveRatingSort] = useState(false);
  const [isActiveReleaseSort, setIsActiveReleaseSort] = useState(false);
  const [isActiveSortDirection, setIsActiveSortDirection] = useState(false);

  useEffect(() => {
    isActiveRatingSort && setSortItem("rating");
    isActiveReleaseSort && setSortItem("released");
    isActiveSortDirection ? setSortDirection("asc") : setSortDirection("desc");
    isActiveRatingSort || isActiveReleaseSort || setSortItem("id");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActiveRatingSort, isActiveReleaseSort, isActiveSortDirection]);

  return (
    <S.optionsContainer>
      <S.sort>
        {language.store.options.viewing}
        <S.sortButton
          onClick={() => {
            isActiveRatingSort
              ? setIsActiveRatingSort(false)
              : setIsActiveRatingSort(true);
            isActiveReleaseSort && setIsActiveReleaseSort(false);
          }}
          $active={isActiveRatingSort}
        >
          {language.store.options.byRating}
        </S.sortButton>
        <S.sortButton
          onClick={() => {
            isActiveReleaseSort
              ? setIsActiveReleaseSort(false)
              : setIsActiveReleaseSort(true);
            isActiveRatingSort && setIsActiveRatingSort(false);
          }}
          $active={isActiveReleaseSort}
        >
          {language.store.options.byReleaseDate}
        </S.sortButton>
        <S.sortIcon
          onClick={() => {
            isActiveSortDirection
              ? setIsActiveSortDirection(false)
              : setIsActiveSortDirection(true);
          }}
        >
          <S.sortArrow $active={isActiveSortDirection} />
        </S.sortIcon>
      </S.sort>
      <S.filter
        placeholder={language.store.options.search}
        onChange={(event) => setQuery(event.target.value.trim())}
      />
    </S.optionsContainer>
  );
};
