import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { gamesApi } from "../../api/games/gamesApi";

export interface GameType {
  id: number;
  name: string;
  background_image: string;
  short_screenshort?: Object[]
  released: string;
  rating: number;
}

interface GamesStateType {
  games: GameType[];
  error?: string | null;
  loading: boolean;
}

const initialState: GamesStateType = {
  games: [],
  error: null,
  loading: false,
};

const getGamesList = createAsyncThunk<GameType[], void, { rejectValue: string}>(
  "games/getGamesList",
  async (data, thunksApi) => {
    try {
      const response = await gamesApi.getGamesList()
      return response.data
    } catch (error) {
      return thunksApi.rejectWithValue('error')
    }
  }
);

export const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getGamesList.pending, (state) => {
      state.games = [];
      state.error = null;
      state.loading = true;
    });
    builder.addCase(getGamesList.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
    builder.addCase(getGamesList.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.games = payload;
    });
  },
});

export const gamesReducer = gamesSlice.reducer

export const gamesActions = {
  ...gamesSlice.actions,
  getGamesList
}