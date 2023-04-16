import axios from "axios";
import { GameInfoType } from "../../types/types";

export const getGame = async (gameId: number) => {
  return axios<GameInfoType>({
    method: "GET",
    url: `http://localhost:3001/games/${gameId}`,
  });
};
