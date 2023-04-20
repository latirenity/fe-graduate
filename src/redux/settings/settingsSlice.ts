import { createSlice } from "@reduxjs/toolkit";
import { ThemesType, darkTheme, lightTheme } from "../../themes/themes";
import { LanguageType } from "../../types/types";
import en from "../../resources/localization/en.json";
import ru from "../../resources/localization/ru.json";

interface SettingsStateType {
	languageType: LanguageType;
	language: typeof en & typeof ru;
	themeType: string | null;
	theme: ThemesType;
}

const getInitialState = (): SettingsStateType => {
	const languageType =
		(localStorage.getItem("language") as LanguageType) || "en";
	const language = languageType === "en" ? en : ru;

	const themeType = localStorage.getItem("theme") || "lightTheme";
	const theme = themeType === "lightTheme" ? lightTheme : darkTheme;

	return { languageType, language, themeType, theme };
};

export const settingsSlice = createSlice({
	name: "settings",
	initialState: getInitialState(),
	reducers: {
		changeTheme: (state) => {
			state.themeType =
				state.themeType === "lightTheme" ? "darkTheme" : "lightTheme";
			state.theme = state.themeType === "lightTheme" ? lightTheme : darkTheme;
			localStorage.setItem("theme", state.themeType);
		},
		changeLanguage: (state) => {
			state.languageType = state.languageType === "en" ? "ru" : "en";
			state.language = state.languageType === "en" ? en : ru;
			localStorage.setItem("language", state.languageType);
		},
	},
});

export const settingsReducer = settingsSlice.reducer;

export const settingsActions = {
	...settingsSlice.actions,
};
