import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserInfoType } from "../../types/types";
import { userApi } from "../../api/user/userApi";

interface UserStateType {
	user: UserInfoType;
	error: string | null;
	loading: boolean;
}

const initialState: UserStateType = {
	user: {} as UserInfoType,
	error: null,
	loading: false,
};

const getUserInfo = createAsyncThunk<
	UserInfoType,
	void,
	{ rejectValue: string }
>("user/getUserInfo", async (_, thunksApi) => {
	try {
		const response = await userApi.getUserInfo();
		return response.data;
	} catch (error) {
		return thunksApi.rejectWithValue(`${error}`);
	}
});

const setUserInfo = createAsyncThunk<
	UserInfoType,
	UserInfoType,
	{ rejectValue: string }
>("user/setUserInfo", async (data, thunksApi) => {
	try {
		const response = await userApi.setUserInfo(data);
		return response.data;
	} catch (error) {
		return thunksApi.rejectWithValue(`${error}`);
	}
});

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(getUserInfo.pending, (state) => {
			state.loading = true;
			state.user = {} as UserInfoType;
			state.error = "";
		});
		builder.addCase(getUserInfo.rejected, (state, { payload }) => {
			state.loading = false;
			state.error = payload ?? null;
		});
		builder.addCase(getUserInfo.fulfilled, (state, { payload }) => {
			state.loading = false;
			state.user = payload;
		});
	},
});

export const userReducer = userSlice.reducer;

export const userActions = {
	...userSlice.actions,
	getUserInfo,
	setUserInfo,
};
