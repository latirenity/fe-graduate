import { createSlice } from "@reduxjs/toolkit";

interface AuthStateType {
	isAuthorized: boolean;
	access: string;
	refresh: string;
	error: string;
	loading: boolean;
}

const initialState: AuthStateType = {
	isAuthorized: false,
	access: "",
	refresh: "",
	error: "",
	loading: false,
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {},
	extraReducers(builder) {},
});
