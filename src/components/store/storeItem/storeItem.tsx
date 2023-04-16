import { useNavigate } from "react-router-dom";
import { S } from "./StoreItem.styled";
import { GameInfoType } from "../../../types/types";

interface PropsType {
  dataItem: GameInfoType;
}

export const StoreItem = ({ dataItem }: PropsType) => {
  const navigate = useNavigate();
  const toGamePage = () => {
    navigate(`/store/${dataItem.id}`);
  };

  return (
    <S.container onClick={toGamePage}>
      <S.image src={`${dataItem.background_image}`} />
      <S.title>{dataItem.name}</S.title>
      <S.rating>{dataItem.rating}</S.rating>
      <S.released>{dataItem.released}</S.released>
    </S.container>
  );
};
