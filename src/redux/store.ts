import { configureStore } from "@reduxjs/toolkit"
import { gamesReducer } from "./games/gamesSlice"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    games: gamesReducer,
  }
})

type AppDispathType = typeof store.dispatch;
export const useAppDispatch: () => AppDispathType = useDispatch;

type RootStateType = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;