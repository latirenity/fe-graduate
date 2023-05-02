import axios from "axios";

interface RefreshTokenResponseType {
	access: string;
}

export const refreshToken = () => {
	axios<RefreshTokenResponseType>({
		method: "POST",
		url: "https://studapi.teachmeskills.by/auth/jwt/refresh/",
		data: {
			token: localStorage.getItem("refresh"),
		},
	});
};
