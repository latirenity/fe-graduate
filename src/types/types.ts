export interface GameInfoType {
	id: number;
	name: string;
	description: string;
	background_image: string;
	short_screenshots: { id: number; image: string }[];
	developer: string;
	released: string;
	rating: number;
}

export type GamesListType = GameInfoType[];

export type GameInfoFromCartType = Pick<
	GameInfoType,
	"id" | "name" | "background_image"
>;

export type GamesListFromCartType = GameInfoFromCartType[];

export interface GamesOptionsType {
	sortItem?: string;
	sortDirection?: string;
	page?: number;
	limitItem?: number;
	query?: string;
}

export interface UserInfoType {
	username?: string;
	description?: string;
	avatar?: string;
}

export interface CreateTokensRequestType {
	email: string;
	password: string;
}

export interface CreateTokensResponseType {
	access: string;
	refresh: string;
}
