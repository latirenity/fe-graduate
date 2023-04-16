import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { gamesApi } from "../../api/games/gamesApi";
import { GamesListType } from "../../types/types";

interface GamesListStateType {
  gamesList: GamesListType;
  error?: string | null;
  loading: boolean;
}

const initialState: GamesListStateType = {
  gamesList: [],
  error: null,
  loading: false,
};

const getGamesList = createAsyncThunk<GamesListType, void, { rejectValue: string}>(
  "gamesList/getGamesList",
  async (data, thunksApi) => {
    try {
      const response = await gamesApi.getGamesList()
      return response.data
    } catch (error) {
      return thunksApi.rejectWithValue(`${error}`)
    }
  }
);

export const gamesListSlice = createSlice({
  name: "gamesList",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getGamesList.pending, (state) => {
      state.error = null;
      state.loading = true;
    });
    builder.addCase(getGamesList.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
    builder.addCase(getGamesList.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.gamesList = payload;
    });
  },
});

export const gamesListReducer = gamesListSlice.reducer

export const gamesListActions = {
  ...gamesListSlice.actions,
  getGamesList,
}