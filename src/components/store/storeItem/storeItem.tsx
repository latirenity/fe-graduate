import { useNavigate } from "react-router-dom";
import { S } from "./StoreItem.styled";
import { GameInfoType } from "../../../types/types";

interface StoreItemProps {
	dataItem: GameInfoType;
}

export const StoreItem = ({ dataItem }: StoreItemProps) => {
	const navigate = useNavigate();

	const toGamePage = () => {
		navigate(`/store/${dataItem.id}`);
	};

	return (
		<S.itemContainer onClick={toGamePage}>
			<S.imageContainer>
				<S.image src={`${dataItem.background_image}`} />
			</S.imageContainer>
			<S.title>{dataItem.name}</S.title>
		</S.itemContainer>
	);
};
