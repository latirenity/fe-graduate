import axios from "axios";
import { GamesListType, GamesOptionsType } from "../../types/types";

export const getGamesListFromLibrary = async (options: GamesOptionsType) => {
	return axios<GamesListType>({
		method: "GET",
		url: "http://localhost:3001/library",
		params: {
			_sort: options.sortItem,
			_order: options.sortDirection,
			_page: options.page,
			_limit: options.limitItem,
			name_like: options.query,
		},
	});
};
