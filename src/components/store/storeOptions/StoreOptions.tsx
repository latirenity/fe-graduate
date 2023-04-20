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

	useEffect(() => {
		isActiveRatingSort && setSortItem("rating");
		isActiveReleaseSort && setSortItem("released");
		isActiveRatingSort || isActiveReleaseSort || setSortItem("id");
	}, [isActiveRatingSort, isActiveReleaseSort]);

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
					active={isActiveRatingSort}
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
					active={isActiveReleaseSort}
				>
					{language.store.options.byReleaseDate}
				</S.sortButton>
			</S.sort>
			<S.filter
				placeholder={language.store.options.search}
				onChange={(event) => setQuery(event.target.value)}
			/>
		</S.optionsContainer>
	);
};
