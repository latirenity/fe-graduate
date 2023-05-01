import axios from "axios";
import { UserInfoType } from "../../types/types";

export const getUserInfo = async () => {
	return axios<UserInfoType>({
		method: "GET",
		url: `http://localhost:3001/user`,
	});
};
