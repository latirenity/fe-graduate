import axios from "axios";
import { GamesListType } from "../../types/types";

export const getGamesList = async () => {
  return axios<GamesListType>({
    method: "GET",
    url: "http://localhost:3001/games",
  });
};
