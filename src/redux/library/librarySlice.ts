import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  GameInfoType,
  GamesListFromCartType,
  GamesListType,
  GamesOptionsType,
} from "../../types/types";
import { libraryApi } from "../../api/library/libraryApi";

interface LibraryStateType {
  gamesListFromLibrary: GamesListType;
  totalGamesFromLibrary: number;
  error?: string | null;
  loading: boolean;
}

const initialState: LibraryStateType = {
  gamesListFromLibrary: [],
  totalGamesFromLibrary: 0,
  error: null,
  loading: false,
};

interface GetGamesListFromLibraryType {
  data: GamesListFromCartType;
  totalGames: number;
}

const getGamesListFromLibrary = createAsyncThunk<
  GetGamesListFromLibraryType,
  GamesOptionsType,
  { rejectValue: string }
>("library/getGamesListFromLibrary", async (data, thunksApi) => {
  try {
    const response = await libraryApi.getGamesListFromLibrary(data);
    return {
      data: response.data,
      totalGames: response["headers"]["x-total-count"],
    };
  } catch (error) {
    return thunksApi.rejectWithValue(`${error}`);
  }
});

const setGameToLibrary = createAsyncThunk<
  GameInfoType,
  GameInfoType | undefined,
  { rejectValue: string }
>("library/setGameToLibrary", async (data, thunksApi) => {
  try {
    const response = await libraryApi.setGameToLibrary(data);
    return response.data;
  } catch (error) {
    return thunksApi.rejectWithValue(`${error}`);
  }
});

const deleteGameFromLibrary = createAsyncThunk<
  GameInfoType,
  number,
  { rejectValue: string }
>("library/setGameToLibrary", async (data, thunksApi) => {
  try {
    const response = await libraryApi.deleteGameFromLibrary(data);
    return response.data;
  } catch (error) {
    return thunksApi.rejectWithValue(`${error}`);
  }
});

export const librarySlice = createSlice({
  name: "library",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getGamesListFromLibrary.pending, (state) => {
      state.loading = true;
      state.gamesListFromLibrary = [];
      state.totalGamesFromLibrary = 0;
      state.error = null;
    });
    builder.addCase(getGamesListFromLibrary.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
    builder.addCase(getGamesListFromLibrary.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.gamesListFromLibrary = payload.data as GamesListType;
      state.totalGamesFromLibrary = payload.totalGames;
    });
  },
});

export const libraryReducer = librarySlice.reducer;

export const libraryActions = {
  ...librarySlice.actions,
  getGamesListFromLibrary,
  setGameToLibrary,
  deleteGameFromLibrary,
};
