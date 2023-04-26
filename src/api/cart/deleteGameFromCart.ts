import axios from "axios";
import { GameInfoFromCartType } from "../../types/types";

export const deleteGameFromCart = async (gameId: number) => {
	return axios<GameInfoFromCartType>({
		method: "DELETE",
		url:`http://localhost:3001/cart/${gameId}`,
	});
};
