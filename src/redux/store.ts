import { configureStore } from "@reduxjs/toolkit";
import { gamesListReducer } from "./store/gamesListSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { gameInfoReducer } from "./store/gameInfoSlice";
import { settingsReducer } from "./settings/settingsSlice";
import { cartReducer } from "./cart/cartSlice";
import { libraryReducer } from "./library/librarySlice";

export const store = configureStore({
  reducer: {
    gamesList: gamesListReducer,
    gameInfo: gameInfoReducer,
    settings: settingsReducer,
    cart: cartReducer,
    library: libraryReducer,
  },
});

type AppDispathType = typeof store.dispatch;
export const useAppDispatch: () => AppDispathType = useDispatch;

type RootStateType = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
