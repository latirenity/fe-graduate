import { useEffect, useState } from "react";
import { gamesListActions } from "../../redux/gamesList/gamesListSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { C } from "../../styledComponent";
import { S } from "./Store.styled";
import { StoreItem } from "./storeItem/StoreItem";
import { StoreOptions } from "./storeOptions/StoreOptions";

export const Store = () => {
	const [sortItem, setSortItem] = useState("id");
	const [sortDirection, setSortDirection] = useState("desc");
	const [limitItem, setLimitItem] = useState(6);
	const [page, setPage] = useState(1);
	const [query, setQuery] = useState("");

	const dispatch = useAppDispatch();
	const { gamesList, totalGames, error } = useAppSelector(
		(state) => state.gamesList
	);

	const pageQty = Math.ceil(totalGames / limitItem);

	useEffect(() => {
		dispatch(
			gamesListActions.getGamesList({
				sortItem,
				sortDirection,
				page,
				limitItem,
				query,
			})
		);

		if (page > pageQty) setPage(1);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [sortItem, page, query]);

	return (
		<C.wrapper>
			<StoreOptions
				setSortItem={setSortItem}
				setSortDirection={setSortDirection}
				setQuery={setQuery}
			/>
			<S.storeContainer>
				{error && "Error"}
				{gamesList.map((item) => (
					<StoreItem key={item.id} dataItem={item} />
				))}
			</S.storeContainer>
			<S.Pagination
				count={pageQty}
				onChange={(_, num) => setPage(num)}
				size="large"
				showFirstButton
				showLastButton
			/>
		</C.wrapper>
	);
};
