import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { gamesApi } from "../../api/games/gamesApi";
import { GamesListType, GamesOptionsType } from "../../types/types";

interface GamesListStateType {
	gamesList: GamesListType;
	totalGames: number;
	error?: string | null;
	loading: boolean;
}

const initialState: GamesListStateType = {
	gamesList: [],
	totalGames: 0,
	error: null,
	loading: false,
};

interface GetGamesListType {
	data: GamesListType;
	totalGames: number;
}

const getGamesList = createAsyncThunk<
	GetGamesListType,
	GamesOptionsType,
	{ rejectValue: string }
>("gamesList/getGamesList", async (data, thunksApi) => {
	try {
		const response = await gamesApi.getGamesList(data);
		return {
			data: response.data,
			totalGames: response["headers"]["x-total-count"],
		};
	} catch (error) {
		return thunksApi.rejectWithValue(`${error}`);
	}
});

export const gamesListSlice = createSlice({
	name: "gamesList",
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(getGamesList.pending, (state) => {
			state.loading = true;
			state.gamesList = [];
			state.totalGames = 0;
			state.error = null;
		});
		builder.addCase(getGamesList.rejected, (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		});
		builder.addCase(getGamesList.fulfilled, (state, { payload }) => {
			state.loading = false;
			state.gamesList = payload.data;
			state.totalGames = payload.totalGames;
		});
	},
});

export const gamesListReducer = gamesListSlice.reducer;

export const gamesListActions = {
	...gamesListSlice.actions,
	getGamesList,
};
