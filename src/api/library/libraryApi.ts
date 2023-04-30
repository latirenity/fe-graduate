import { deleteGameFromLibrary } from "./deleteGameFromLibrary";
import { getGamesListFromLibrary } from "./getGamesFromLibrary";
import { setGameToLibrary } from "./setGameToLibrary";


export const libraryApi = {
  getGamesListFromLibrary,
  setGameToLibrary,
  deleteGameFromLibrary,
}