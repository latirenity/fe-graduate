export interface GameInfoType {
  id: number;
  name: string;
  background_image: string;
  short_screenshort?: Object[]
  released: string;
  rating: number;
}

export type GamesListType = GameInfoType[]