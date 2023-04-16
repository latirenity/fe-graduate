import axios from "axios";
import { GameType } from "../../redux/games/gamesSlice";

export const getGamesList = async () => {
  return axios<GameType[]>({
    method: "GET",
    url: "http://localhost:3001/games",
    // params: {

    // }
  })
}