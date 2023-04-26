
import { deleteGameFromCart } from "./deleteGameFromCart";
import { getGamesListFromCart } from "./getGamesListFromCart";
import { setGameToCart } from "./setGameToCart";


export const cartApi = {
  getGamesListFromCart,
  setGameToCart,
  deleteGameFromCart,
}