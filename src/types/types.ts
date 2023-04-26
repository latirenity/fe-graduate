export interface GameInfoType {
  id: number;
  name: string;
  description: string;
  background_image: string;
  short_screenshort: Object[];
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
