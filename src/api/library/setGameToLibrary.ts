import axios from "axios";
import { GameInfoType } from "../../types/types";

export const setGameToLibrary = async (data: GameInfoType | undefined) => {
	return axios<GameInfoType>({
		method: "POST",
		url: "http://localhost:3001/library",
		data,
	});
};
