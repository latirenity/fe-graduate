import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { C } from "../../styledComponent";
import { S } from "./GamePage.styled";
import { useParams } from "react-router-dom";
import { gameInfoActions } from "../../redux/gameInfo/gameInfoSlice";

export const GamePage = () => {
  const dispatch = useAppDispatch();
  const { 
    id, 
    name, 
    background_image, 
    short_screenshort, 
    released, 
    rating } = useAppSelector( state => state.gameInfo.gamesInfo)

  const { gameId } = useParams();
  const gameIdToNumber = +(gameId ?? 0);

  useEffect(() => {
    dispatch(gameInfoActions.getGame(gameIdToNumber));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.container>
      <C.wrapper>
        <S.titleContainer>
          <S.title>{name}</S.title>
          <S.cartButton>Add to cart</S.cartButton>
        </S.titleContainer>

        <S.contentContainer>
          <S.swiperContainer>SWIPER</S.swiperContainer>

          <S.infoContainer>
            <S.infoImage src={background_image} alt="not found" />
            <S.infoDescription>DESCRIPTION</S.infoDescription>
            <S.infoProperties>{released}</S.infoProperties>
            <S.infoProperties>{rating}</S.infoProperties>
          </S.infoContainer>
        </S.contentContainer>
      </C.wrapper>
    </S.container>
  );
};
