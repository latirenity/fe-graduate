import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { gamesApi } from "../../api/games/gamesApi";
import { GameInfoType } from "../../types/types";

interface GamesListStateType {
  gamesInfo: GameInfoType;
  error?: string | null;
  loading: boolean;
}

const initialState: GamesListStateType = {
  gamesInfo: {} as GameInfoType,
  error: null,
  loading: false,
};

const getGame = createAsyncThunk<GameInfoType, number, { rejectValue: string }>(
  "game/getGame",
  async (data, thunksApi) => {
    try {
      const response = await gamesApi.getGame(data);
      return response.data;
    } catch (error) {
      return thunksApi.rejectWithValue(`${error}`);
    }
  }
);

export const gameInfoSlice = createSlice({
  name: "games",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getGame.pending, (state) => {
      state.gamesInfo = {} as GameInfoType;
      state.error = null;
      state.loading = true;
    });
    builder.addCase(getGame.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
    builder.addCase(getGame.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.gamesInfo = payload;
    });
  },
});

export const gameInfoReducer = gameInfoSlice.reducer;

export const gameInfoActions = {
  ...gameInfoSlice.actions,
  getGame,
};
