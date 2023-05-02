import axios from "axios";
import { CreateTokensRequestType, CreateTokensResponseType } from "../../types/types";

export const createTokens = async (data: CreateTokensRequestType) => {
	return axios<CreateTokensResponseType>({
		method: "POST",
		url: "https://studapi.teachmeskills.by/auth/jwt/create/",
		data,
	});
};
