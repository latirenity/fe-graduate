import { useEffect, useState } from "react";
import { gamesListActions } from "../../redux/store/gamesListSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { C } from "../../styledComponent";
import { S } from "./Store.styled";
import { StoreItem } from "./storeItem/StoreItem";
import { StoreOptions } from "./storeOptions/StoreOptions";
import { LinearProgress } from "@mui/material";

export const Store = () => {
	const [sortItem, setSortItem] = useState("id");
	const [sortDirection, setSortDirection] = useState("desc");
	const [limitItem] = useState(6);
	const [page, setPage] = useState(1);
	const [query, setQuery] = useState("");

	const dispatch = useAppDispatch();
	const { gamesList, totalGames, error, loading } = useAppSelector(
		(state) => state.gamesList
	);
	const { theme } = useAppSelector((state) => state.settings);

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
	}, [sortItem, sortDirection, page, query]);

	return (
		<C.wrapper>
			<StoreOptions
				setSortItem={setSortItem}
				setSortDirection={setSortDirection}
				query={query}
				setQuery={setQuery}
			/>
			{loading && <LinearProgress />}
			<S.storeContainer>
				{error && "Error"}
				{!loading &&
					gamesList.map((item) => <StoreItem key={item.id} dataItem={item} />)}
			</S.storeContainer>
			<S.Pagination
				count={pageQty || 1}
				onChange={(_, num) => setPage(num)}
				size="large"
				showFirstButton
				showLastButton
				color="primary"
				sx={{
					"& .MuiPagination-ul": {
						justifyContent: "space-around",
					},
					"& .MuiButtonBase-root": {
						color: `${theme.colors.grey[0]}`,
					},
				}}
			/>
		</C.wrapper>
	);
};
