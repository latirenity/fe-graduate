import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { S } from "./StoreOptions.styled";

interface PropsType {
  setSortItem: Dispatch<SetStateAction<string>>;
  setSortDirection: Dispatch<SetStateAction<string>>;
}

export const StoreOptions = ({ setSortItem, setSortDirection }: PropsType) => {
  const [isActiveRatingSort, setIsActiveRatingSort] = useState(false);
  const [isActiveReleaseSort, setIsActiveReleaseSort] = useState(false);

  useEffect(() => {
    isActiveRatingSort && setSortItem("rating");
    isActiveReleaseSort && setSortItem("released");
    isActiveRatingSort || isActiveReleaseSort || setSortItem("id")
  }, [isActiveRatingSort, isActiveReleaseSort]);

  return (
    <S.optionsContainer>
      <S.sort>
        Viewing
        <S.sortButton
          onClick={() => {
            isActiveRatingSort
              ? setIsActiveRatingSort(false)
              : setIsActiveRatingSort(true);
            isActiveReleaseSort && setIsActiveReleaseSort(false);
          }}
          active={isActiveRatingSort}
        >
          By rating
        </S.sortButton>
        <S.sortButton
          onClick={() => {
            isActiveReleaseSort
              ? setIsActiveReleaseSort(false)
              : setIsActiveReleaseSort(true);
            isActiveRatingSort && setIsActiveRatingSort(false);
          }}
          active={isActiveReleaseSort}
        >
          By release date
        </S.sortButton>
      </S.sort>
      <S.filter placeholder="Search" />
    </S.optionsContainer>
  );
};
