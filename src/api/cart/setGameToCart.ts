import axios from "axios";
import { GameInfoFromCartType } from "../../types/types";

export const setGameToCart = async (data: GameInfoFromCartType) => {
	return axios<GameInfoFromCartType>({
		method: "POST",
		url: "http://localhost:3001/cart",
		data,
	});
};
