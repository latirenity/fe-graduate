import axios from "axios";
import { UserInfoType } from "../../types/types";

export const setUserInfo = async (data: UserInfoType) => {
	return axios<UserInfoType>({
		method: "POST",
		url: "http://localhost:3001/user",
		data,
	});
};
