import axios from "axios";
import { GamesListFromCartType } from "../../types/types";

export const getGamesListFromCart = async () => {
	return axios<GamesListFromCartType>({
		method: "GET",
		url: "http://localhost:3001/cart",
	});
};
