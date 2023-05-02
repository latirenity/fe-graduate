import { refreshToken } from "./refreshToken";
import { verifyToken } from "./verifyToken";
import { createTokens } from "./createTokens";

export const authApi = {
	createTokens,
	verifyToken,
	refreshToken,
};
