import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { storeApi } from "../../api/store/storeApi";
import { GameInfoType } from "../../types/types";

interface GameInfoStateType {
  gameInfo: GameInfoType;
  error?: string | null;
  loading: boolean;
}

const initialState: GameInfoStateType = {
  gameInfo: {} as GameInfoType,
  error: null,
  loading: false,
};

const getGame = createAsyncThunk<GameInfoType, number, { rejectValue: string }>(
  "gameInfo/getGame",
  async (data, thunksApi) => {
    try {
      const response = await storeApi.getGame(data);
      return response.data;
    } catch (error) {
      return thunksApi.rejectWithValue(`${error}`);
    }
  }
);

export const gameInfoSlice = createSlice({
  name: "gameInfo",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getGame.pending, (state) => {
      state.gameInfo = {} as GameInfoType;
      state.error = null;
      state.loading = true;
    });
    builder.addCase(getGame.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
    builder.addCase(getGame.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.gameInfo = payload;
    });
  },
});

export const gameInfoReducer = gameInfoSlice.reducer;

export const gameInfoActions = {
  ...gameInfoSlice.actions,
  getGame,
};
