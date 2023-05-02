import axios from "axios";

export const verifyToken = async () => {
	axios({
		method: "POST",
		url: "https://studapi.teachmeskills.by/auth/jwt/verify/",
		data: {
			token: localStorage.getItem("access"),
		},
	});
};
