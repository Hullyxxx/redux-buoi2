import { ADD_SHOE } from "../constants/shoeConstants";

export const addToCart = (payload) => ({
  type: ADD_SHOE,
  payload: payload
})
