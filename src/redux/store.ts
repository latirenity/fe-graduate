import { configureStore } from "@reduxjs/toolkit";
import { gamesListReducer } from "./store/gamesListSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { gameInfoReducer } from "./store/gameInfoSlice";
import { settingsReducer } from "./settings/settingsSlice";
import { cartReducer } from "./cart/cartSlice";
import { libraryReducer } from "./library/librarySlice";
import { userReducer } from "./user/userSlice";
import { authReducer } from "./auth/authSlice";

export const store = configureStore({
	reducer: {
		auth: authReducer,
		gamesList: gamesListReducer,
		gameInfo: gameInfoReducer,
		settings: settingsReducer,
		cart: cartReducer,
		library: libraryReducer,
		user: userReducer,
	},
});

type AppDispathType = typeof store.dispatch;
export const useAppDispatch: () => AppDispathType = useDispatch;

type RootStateType = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
