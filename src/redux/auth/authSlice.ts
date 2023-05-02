import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authApi } from "../../api/auth/authApi";
import { AxiosError } from "axios";
import {
	CreateTokensRequestType,
	CreateTokensResponseType,
} from "../../types/types";

interface AuthStateType {
	isAuthorized: boolean;
	access: string;
	refresh: string;
	error: string | null;
	loading: boolean;
}

const getInitialState = (): AuthStateType => {
	const access = localStorage.getItem("access") || "";
	const refresh = localStorage.getItem("refresh") || "";
	const isAuthorized = !!(access && refresh);

	return {
		isAuthorized,
		access,
		refresh,
		error: null,
		loading: false,
	};
};

const createTokens = createAsyncThunk<
	CreateTokensResponseType,
	CreateTokensRequestType,
	{ rejectValue: string }
>("auth/createTokens", async (data, thunksApi) => {
	try {
		const response = await authApi.createTokens(data);
		return response.data;
	} catch (error) {
		if (error instanceof AxiosError && error.response?.data?.detail) {
			return thunksApi.rejectWithValue(error.response.data.detail);
		}
		return thunksApi.rejectWithValue("Login error");
	}
});

export const verifyToken = createAsyncThunk(
	"auth/verifyToken",
	async (_, thunksApi) => {
		try {
			return authApi.verifyToken();
		} catch (error) {
			if (error instanceof AxiosError && error.response?.status === 401) {
				try {
					const refreshResponse = await authApi.refreshToken();
					thunksApi.dispatch(authActions.setAccessToken(refreshResponse));
				} catch {
					thunksApi.dispatch(authActions.logout());
					throw error;
				}

				return await authApi.verifyToken();
			} else {
				throw error;
			}
		}
	}
);

const authSlice = createSlice({
	name: "auth",
	initialState: getInitialState(),
	reducers: {
		logout: (state) => {
			state.isAuthorized = false;
			state.access = "";
			state.refresh = "";
			state.error = null;
			state.loading = false;
			localStorage.removeItem("access");
			localStorage.removeItem("refresh");
		},
		setAccessToken: (state, { payload }) => {
			state.isAuthorized = true;
			state.access = payload.access;
			localStorage.setItem("access", state.access);
		},
	},
	extraReducers(builder) {
		builder.addCase(createTokens.pending, (state) => {
			state.loading = true;
			state.error = null;
			state.access = "";
			state.refresh = "";
		});
		builder.addCase(createTokens.rejected, (state, { payload }) => {
			state.loading = false;
			state.error = payload || null;
		});
		builder.addCase(createTokens.fulfilled, (state, { payload }) => {
			state.loading = false;
			state.isAuthorized = true;
			state.access = payload.access;
			state.refresh = payload.refresh;
			localStorage.setItem("access", state.access);
			localStorage.setItem("refresh", state.refresh);
		});
	},
});

export const authReducer = authSlice.reducer;

export const authActions = {
	...authSlice.actions,
	createTokens,
};
