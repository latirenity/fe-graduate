export interface GameInfoType {
  id: number;
  name: string;
  description: string;
  background_image: string;
  short_screenshort?: Object[];
  developer: string;
  released: string;
  rating: number;
}

export type GamesListType = GameInfoType[];

export interface GamesOptionsType {
  sortItem: string,
  sortDirection: string;
  page: number;
  limit: number;
  query: string;
}
