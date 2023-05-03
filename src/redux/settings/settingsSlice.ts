import { createSlice } from "@reduxjs/toolkit";
import { ThemesType, darkTheme, lightTheme } from "../../themes/themes";
import en from "../../resources/localization/en.json";
import ru from "../../resources/localization/ru.json";

type LanguagesNameType = "en" | "ru";
type ThemesNameType = "lightTheme" | "darkTheme";

const languagesName: LanguagesNameType[] = ["en", "ru"];
const themesName: ThemesNameType[] = ["lightTheme", "darkTheme"];

interface SettingsStateType {
	languageName: LanguagesNameType;
	language: typeof en & typeof ru;
	themeName: ThemesNameType;
	theme: ThemesType;
}

const getInitialState = (): SettingsStateType => {
	let languageName =
		(localStorage.getItem("language") as LanguagesNameType) || "en";
	if (!languagesName.includes(languageName)) languageName = "en";
	const language = languageName === "en" ? en : ru;

	let themeName =
		(localStorage.getItem("theme") as ThemesNameType) || "lightTheme";
	if (!themesName.includes(themeName)) themeName = "lightTheme";
	const theme = themeName === "lightTheme" ? lightTheme : darkTheme;

	return { languageName, language, themeName, theme };
};

export const settingsSlice = createSlice({
	name: "settings",
	initialState: getInitialState(),
	reducers: {
		changeTheme: (state) => {
			state.themeName =
				state.themeName === "lightTheme" ? "darkTheme" : "lightTheme";
			state.theme = state.themeName === "lightTheme" ? lightTheme : darkTheme;
			localStorage.setItem("theme", state.themeName);
		},
		changeLanguage: (state) => {
			state.languageName = state.languageName === "en" ? "ru" : "en";
			state.language = state.languageName === "en" ? en : ru;
			localStorage.setItem("language", state.languageName);
		},
	},
});

export const settingsReducer = settingsSlice.reducer;

export const settingsActions = {
	...settingsSlice.actions,
};
