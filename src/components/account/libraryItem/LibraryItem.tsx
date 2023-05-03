import { libraryActions } from "../../../redux/library/librarySlice";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { GameInfoType } from "../../../types/types";
import { S } from "./LibraryItem.styled";

interface LibraryItemProps {
	data: GameInfoType;
}

export const LibraryItem = ({ data }: LibraryItemProps) => {
	const dispatch = useAppDispatch();
	const { language } = useAppSelector((state) => state.settings);

	const deleteItem = async (event: React.MouseEvent) => {
		event.preventDefault();
		await dispatch(libraryActions.deleteGameFromLibrary(data.id));
		await dispatch(libraryActions.getGamesListFromLibrary({}));
	};

	return (
		<S.container>
			<S.imageContainer>
				<S.image src={`${data.background_image}`} />
			</S.imageContainer>
			<S.itemName>{data.name}</S.itemName>
			<S.itemDeleteButton onClick={deleteItem}>
				{language.cart.deleteButton}
			</S.itemDeleteButton>
		</S.container>
	);
};
