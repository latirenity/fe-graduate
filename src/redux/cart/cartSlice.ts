import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { cartApi } from "../../api/cart/cartApi";
import { GameInfoFromCartType, GamesListFromCartType } from "../../types/types";

interface CartStateType {
	gamesListFromCart: GamesListFromCartType;
	totalGamesFromCart: number;
	error?: string | null;
	loading: boolean;
}

const initialState: CartStateType = {
	gamesListFromCart: [],
	totalGamesFromCart: 0,
	error: null,
	loading: false,
};

interface GetGamesListFromCartType {
	data: GamesListFromCartType;
	totalGames: number;
}

export const setGameToCart = createAsyncThunk<
	GameInfoFromCartType,
	GameInfoFromCartType,
	{ rejectValue: string }
>("cart/setGameToCart", async (data, thunksApi) => {
	try {
		const response = await cartApi.setGameToCart(data);
		return response.data;
	} catch (error) {
		return thunksApi.rejectWithValue(`${error}`);
	}
});

export const deleteGameFromCart = createAsyncThunk<
	GameInfoFromCartType,
	number,
	{ rejectValue: string }
>("cart/deleteGameFromCart", async (data, thunksApi) => {
	try {
		const response = await cartApi.deleteGameFromCart(data);
		return response.data;
	} catch (error) {
		return thunksApi.rejectWithValue(`${error}`);
	}
});

export const getGamesListFromCart = createAsyncThunk<
	GetGamesListFromCartType,
	void,
	{ rejectValue: string }
>("cart/getGamesListFromCart", async (_, thunksApi) => {
	try {
		const response = await cartApi.getGamesListFromCart();
		return {
			data: response.data,
			totalGames: response["headers"]["x-total-count"],
		};
	} catch (error) {
		return thunksApi.rejectWithValue(`${error}`);
	}
});

export const cartSlice = createSlice({
	name: "gamesList",
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(getGamesListFromCart.pending, (state) => {
			state.loading = true;
			state.gamesListFromCart = [];
			state.totalGamesFromCart = 0;
			state.error = null;
		});
		builder.addCase(getGamesListFromCart.rejected, (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		});
		builder.addCase(getGamesListFromCart.fulfilled, (state, { payload }) => {
			state.loading = false;
			state.gamesListFromCart = payload.data;
			state.totalGamesFromCart = payload.totalGames;
		});
	},
});

export const cartReducer = cartSlice.reducer;

export const cartActions = {
	...cartSlice.actions,
	setGameToCart,
	getGamesListFromCart,
	deleteGameFromCart,
};
