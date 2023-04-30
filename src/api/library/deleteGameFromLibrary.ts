import axios from "axios";

export const deleteGameFromLibrary = async (gameId: number) => {
	return axios({
		method: "DELETE",
		url:`http://localhost:3001/library/${gameId}`,
	});
};
