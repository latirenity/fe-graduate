import { configureStore } from "@reduxjs/toolkit";
import { gamesListReducer } from "./gamesList/gamesListSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { gameInfoReducer } from "./gameInfo/gameInfoSlice";

export const store = configureStore({
  reducer: {
    gamesList: gamesListReducer,
    gameInfo: gameInfoReducer,
  },
});

type AppDispathType = typeof store.dispatch;
export const useAppDispatch: () => AppDispathType = useDispatch;

type RootStateType = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
