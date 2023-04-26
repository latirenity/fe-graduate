import axios from "axios";
import { GamesListType, GamesOptionsType } from "../../types/types";

export const getGamesList = async (options: GamesOptionsType) => {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	return axios<GamesListType>({
		method: "GET",
		url: "http://localhost:3001/games",
		params: {
			_sort: options.sortItem,
			_order: options.sortDirection,
			_page: options.page,
			_limit: options.limitItem,
			name_like: options.query,
		},
	});
};
